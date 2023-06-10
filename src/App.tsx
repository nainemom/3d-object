import { useCallback, useState } from 'react';
import { TinyFaceDetectorOptions, detectSingleFace } from 'face-api.js';
import Camera from './components/Camera';
import Object from './components/Object';
import Background from './components/Background';

interface Position {
  x: number,
  y: number
}

function App() {
  const [lookingAngle, setLookingAngle] = useState<Position>({
    x: 50,
    y: 20,
  });
  
  const handleStream = useCallback(async (media: HTMLVideoElement) => {
    const detection = await detectSingleFace(
      media,
      // new SsdMobilenetv1Options({
      //   minConfidence: 0.5,
      // }),
      // new MtcnnOptions(),
      new TinyFaceDetectorOptions({
        scoreThreshold: 0.5,
        inputSize: 128,
      }),
    );
    if (detection?.box) {
      setLookingAngle({
        x: ((detection.box.x + (detection.box.width / 2)) / detection.imageWidth) * 100,
        y: ((detection.box.y + (detection.box.height / 2)) / detection.imageHeight) * 100,
      });
      await new Promise((resolve) => requestAnimationFrame(resolve));
    }
    return true;
  }, []);
  

  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        position: 'relative',
        height: '100%',
        width: '100%',
        background: 'cyan',
      }}
    >
      <Background angle={lookingAngle} />
      <Object angle={lookingAngle} />
      <Camera onStream={handleStream} />
    </div> 
  )
}

export default App
