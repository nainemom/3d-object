import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

type PermissionType = 'camera';


const WithPermission = ({
  name,
  children
}: {
  name: PermissionType,
  children?: ReactNode,
}) => {
  const isBinded = useRef(false);
  const [status, setStatus] = useState<PermissionStatus>();

  useEffect(() => {
    if (isBinded.current) return;
    isBinded.current = true;
    (async () => {
      try {
        const newStatus = await navigator.permissions.query({ name: name as PermissionName });
        setStatus(newStatus);
        newStatus.onchange = () => {
          setStatus(newStatus);
        }
      } catch (_e) {
        //
      }
    })();
  }, [isBinded, name, setStatus]);

  const handleGetPermission = useCallback(() => navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      facingMode: '',
    },
  }), []);


  useEffect(() => {
    if (status?.state === 'prompt') {
      const result = confirm(`The ${name} permission is needed.`);
      if (result) {
        handleGetPermission().then(() => window.location.reload());
      }
    }
    if (status?.state === 'denied') {
      alert(`This app will not works without ${name} permission. Please give this permission via browser.`);
    }
  }, [handleGetPermission, name, status]);
  
  return status?.state === 'granted' && children;
};

export default WithPermission;