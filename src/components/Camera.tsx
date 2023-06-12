import { useCallback, useEffect, useRef } from "react";
import { useCameraStream } from '../utils/useCameraStream';

const Camera = ({
  onStream,
}: {
  onStream?: (media: HTMLVideoElement) => unknown | boolean | Promise<boolean>,
}) => {
  const videoEl = useRef<HTMLVideoElement>(null);
  const stream = useCameraStream();

  const handleStream = useCallback(async (media: HTMLVideoElement) => {
    if (!onStream) return;
    const result = await onStream(media);
    if (result === true) {
      handleStream(media);
    }
  }, [onStream]);

  useEffect(() => {
    if (!stream?.active || !videoEl.current) return;
    videoEl.current.srcObject = stream;
  }, [stream, videoEl]);
  
  return stream?.active && (
    <video
      ref={videoEl}
      autoPlay
      playsInline
      onPlay={(e) => handleStream(e.target as HTMLVideoElement)}
      style={{
        position: 'fixed',
        opacity: 0,
        top: 0,
        left: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default Camera;