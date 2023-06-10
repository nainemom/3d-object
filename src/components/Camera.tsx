import { useCallback, useEffect, useRef } from "react"

const Camera = ({
  onStream,
}: {
  onStream?: (media: HTMLVideoElement) => unknown | boolean | Promise<boolean>,
}) => {
  const isBinded = useRef(false);
  const videoEl = useRef<HTMLVideoElement>(null);

  const handleStream = useCallback(async (media: HTMLVideoElement) => {
    if (!onStream) return;
    const result = await onStream(media);
    if (result === true) {
      handleStream(media);
    }
  }, [onStream]);

  useEffect(() => {
    if (videoEl.current && !isBinded.current) {
      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: '',
        },
      }).then((stream) => {
        if (videoEl.current) {
          videoEl.current.srcObject = stream;
        }
      });
      isBinded.current = true;
    }
  }, [handleStream]);
  
  return (
    <video
      ref={videoEl}
      autoPlay
      playsInline
      onPlay={(e) => handleStream(e.target as HTMLVideoElement)}
      style={{ position: 'fixed', opacity: 0, top: 0, left: 0, }}
    />
  );
};

export default Camera;