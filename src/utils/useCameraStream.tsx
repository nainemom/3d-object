import { ReactNode, createContext, useContext, useEffect, useState } from "react";

const cameraStream = createContext<MediaStream | undefined>(undefined);

export const CameraStreamProvider = ({
  children
}: {
  children?: ReactNode,
}) => {
  const [stream, setStream] = useState<MediaStream>();


  useEffect(() => {
    if (stream?.active) return;
    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: '',
      },
    }).then(setStream).catch(() => {
      alert(`This app will not works without camera permission. Please give this permission via browser.`)
    });
  }, [stream, setStream]);

  return (
    <cameraStream.Provider value={stream}>
      { children }
    </cameraStream.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCameraStream = () => useContext(cameraStream);
