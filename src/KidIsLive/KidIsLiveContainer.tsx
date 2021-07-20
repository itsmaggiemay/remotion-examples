import {Composition} from 'remotion';
import {Scene} from './scene';

const FPS = 30;
const DURATION = FPS * 5;

export const KidIsLiveContainer: React.FC = () => {
	return (
		<>
			<Composition
				id="KidIsLive-Scene"
				component={Scene}
				durationInFrames={DURATION}
				fps={FPS}
				width={1920}
				height={1080}
				defaultProps={{
					title: 'Welcome to Remotion',
				}}
			/>
		</>
	);
};
