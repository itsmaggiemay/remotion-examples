import { Img, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import stars from './images/stars.png';

export default function Stars() {
  const frame = useCurrentFrame();
  const { width, height, durationInFrames } = useVideoConfig();
  const left = interpolate(frame, [0, durationInFrames], [0, width]);
  return (
    <>
      <Img
        src={stars}
        width={width}
        height={height}
        style={{ zIndex: 0, position: 'absolute', top: 0, left: `${left}px` }}
      />
      <Img
        src={stars}
        width={width}
        height={height}
        style={{
          zIndex: 0,
          position: 'absolute',
          top: 0,
          left: `${left - width}px`,
        }}
      />
    </>
  );
}
