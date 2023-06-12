import { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Box } from './Box';
import { Environment, OrbitControls, OrbitControlsProps } from '@react-three/drei';

const Object = ({
  angle,
}: {
  angle: {
    x: number,
    y: number,
  },
}) => {
  const controls = useRef<OrbitControlsProps>();

  useEffect(() => {
    controls.current?.setAzimuthalAngle?.((angle.x * -1) / 100);
    controls.current?.setPolarAngle?.(0.5 + (angle.y / 100));
    controls.current?.update?.();
  }, [angle]);
  return (
    <>
      <Canvas>
        <Environment files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/evening_road_01_2k.hdr' ground={{ height: 5, radius: 40, scale: 30 }} />
        <Box />
        <OrbitControls
          minDistance={8}
          maxDistance={8}
          minPolarAngle={0.5}
          maxPolarAngle={1.5}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          /* @ts-ignore */
          ref={controls}
        />
      </Canvas>
    </>
  );
};
0
export default Object;
