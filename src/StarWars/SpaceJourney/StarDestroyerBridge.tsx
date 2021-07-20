import { Img, useVideoConfig } from 'remotion';
import starDestroyerBridge from './images/star-destroyer-bridge.png';

export default function StarDestroyerBridge() {
  const { width, height } = useVideoConfig();
  return (
    <Img
      src={starDestroyerBridge}
      width={width}
      height={height}
      style={{ zIndex: 100, position: 'absolute', top: 0, left: 0 }}
    />
  );
}
