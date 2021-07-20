import { Composition } from 'remotion';
import './assets/font.css';
import { TOTAL_DURATION } from './constants';
import { WeatherComposition } from './WeatherComposition';

const FPS = 30;

export const WeatherContainer: React.FC = () => {
    return (
        <Composition
            id="WeatherContainer-WeatherComposition"
            component={WeatherComposition}
            durationInFrames={FPS * TOTAL_DURATION}
            fps={FPS}
            width={1920}
            height={1080}
        />
    );
};
