import { Composition } from 'remotion';
import SpaceJourney from './SpaceJourney';

export const StarWarsContainer: React.FC = () => {
  return (
    <>
      <Composition
        id="StarWars-SpaceJourney"
        component={SpaceJourney}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={5000}
      />
    </>
  );
};
