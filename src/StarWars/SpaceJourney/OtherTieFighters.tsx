import { Img, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import otherTieFighter from './images/other-tie-fighter.png'

export default function OtherTieFighters() {
  const frame = useCurrentFrame();
  const { width, height, durationInFrames } = useVideoConfig();
  const left = interpolate(frame, [0, 200], [0,width]);
  const top = interpolate(frame, [0, 200], [0, height]);
  const tieFighterWidth = interpolate(frame, [0, 200], [50, 240]);
  return (
    <>
      <Img
        src={otherTieFighter}
        width={tieFighterWidth}
        style={{
          zIndex: 5,
          position: 'absolute',
          top: `${top}px`,
          left: `${left}px`,
        }}
      />
      <Img
        src={otherTieFighter}
        width={tieFighterWidth - 20}
        style={{
          zIndex: 5,
          position: 'absolute',
          top: `${top - 100}px`,
          left: `${left - tieFighterWidth}px`,
        }}
      />
      <Img
        src={otherTieFighter}
        width={tieFighterWidth - 20}
        style={{
          zIndex: 5,
          position: 'absolute',
          top: `${top - 100}px`,
          left: `${left + tieFighterWidth}px`,
        }}
      />
    </>
  );
}
