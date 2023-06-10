import { useCallback, useState } from 'react';
import { TinyFaceDetectorOptions, detectSingleFace } from 'face-api.js';
import GitHubButton from 'react-github-btn'
import Camera from './components/Camera';
import Object from './components/Object';
import Background from './components/Background';
import WithPermission from './components/WithPermission';

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
      <WithPermission name="camera">
        <Camera onStream={handleStream} />
      </WithPermission>
      <div
        style={{
          position: 'fixed',
          bottom: 15,
          right: 15,
        }}
      >
        <GitHubButton
          href="https://github.com/nainemom/3d-object"
          data-size="large"
          data-show-count="true"
          aria-label="Star nainemom/3d-object on GitHub"
        >
          Star
        </GitHubButton>
      </div>
    </div>
  )
}

export default App
