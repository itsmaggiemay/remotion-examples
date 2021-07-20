import { Img, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import yellowSubmarine from './images/yellow-submarine.png';

export default function YellowSubmarine() {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const left = interpolate(frame, [0, 300], [0-300, width ]);
  return (
    <Img
      src={yellowSubmarine}
      width={300}
      style={{
        zIndex: 5,
        position: 'absolute',
        top: `${height / 2 - 100}px`,
        left: `${left}px`,
      }}
    />
  );
}
