import { ReactNode, useCallback, useEffect, useState } from "react";
import { useMount } from 'react-use';

type PermissionType = 'camera';


const WithPermission = ({
  name,
  children
}: {
  name: PermissionType,
  children?: ReactNode,
}) => {
  const [status, setStatus] = useState<PermissionStatus>();

  useMount(async () => {
    try {
      const newStatus = await navigator.permissions.query({ name: name as PermissionName });
      setStatus(newStatus);
      newStatus.onchange = () => {
        setStatus(newStatus);
      }
    } catch (_e) {
      //
    }
  });

  const handleGetPermission = useCallback(async () => {
    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: '',
      },
    })
  }, []);


  useEffect(() => {
    if (status?.state === 'prompt') {
      const result = confirm(`The ${name} permission is needed.`);
      if (result) {
        handleGetPermission();
      }
    }
    if (status?.state === 'denied') {
      alert(`This app will not works without ${name} permission. Please give this permission via browser.`);
    }
  }, [handleGetPermission, name, status]);
  
  return status?.state === 'granted' && children;
};

export default WithPermission;