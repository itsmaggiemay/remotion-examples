import { Img, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import tieFighter from './images/tie-fighter.png';

export default function TieFighters() {
  const frame = useCurrentFrame();
  const { width, height, durationInFrames } = useVideoConfig();
  const left = interpolate(frame, [0, 200], [width * 0.9, 0]);
  const top = interpolate(frame, [0, 200], [0, height]);
  const tieFighterWidth = interpolate(frame, [0, 200], [50, 300]);
  return (
    <>
      <Img
        src={tieFighter}
        width={tieFighterWidth}
        style={{
          zIndex: 5,
          position: 'absolute',
          top: `${top}px`,
          left: `${left}px`,
        }}
      />
      <Img
        src={tieFighter}
        width={tieFighterWidth - 20}
        style={{
          zIndex: 5,
          position: 'absolute',
          top: `${top - 100}px`,
          left: `${left - 200}px`,
        }}
      />
      <Img
        src={tieFighter}
        width={tieFighterWidth - 20}
        style={{
          zIndex: 5,
          position: 'absolute',
          top: `${top - 100}px`,
          left: `${left + 200}px`,
        }}
      />
    </>
  );
}
