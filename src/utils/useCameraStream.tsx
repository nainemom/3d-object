import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";

const cameraStream = createContext<MediaStream | undefined>(undefined);

export const CameraStreamProvider = ({
  children
}: {
  children?: ReactNode,
}) => {
  const [stream, setStream] = useState<MediaStream>();


  const handleClick = useCallback(() => {
    if (stream?.active) return;
    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: '',
      },
    }).then(setStream).catch(() => {
      alert(`TPlease give this permission via website setting in your browser.`)
    });
  }, [stream, setStream]);

  return (
    <cameraStream.Provider value={stream}>
      { stream?.active ? (
        children
      ) : (
        <div
          style={{
            textAlign: 'center'
          }}
        >
          <h2
            style={{
            marginBottom: 8,
            }}
          >This app needs camera permission.</h2>
          <button
            style={{
              padding: 4,
            }}
            onClick={handleClick}
          > Allow Access </button>
        </div>
      ) }
    </cameraStream.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCameraStream = () => useContext(cameraStream);
