import { Sequence } from 'remotion';
import OtherTieFighters from './OtherTieFighters';
import StarDestroyerBridge from './StarDestroyerBridge';
import Stars from './Stars';
import TieFighters from './TieFighters';
import YellowSubmarine from './YellowSubmarine';

export default function SpaceJourney() {
  return (
    <>
      <Stars />
      <Sequence from={100} durationInFrames={200}>
        <TieFighters />
      </Sequence>
      <Sequence from={1300} durationInFrames={200}>
        <OtherTieFighters />
      </Sequence>
      <Sequence from={2400} durationInFrames={200}>
        <TieFighters />
      </Sequence>
      <Sequence from={4200} durationInFrames={300}>
        <YellowSubmarine />
      </Sequence>
      <StarDestroyerBridge />
    </>
  );
}
