import {Composition} from 'remotion';
import {Canvas} from './Canvas';

export const CanvasContainer: React.FC = () => {
	return (
		<>
			<Composition
				id="Canvas"
				component={Canvas}
				durationInFrames={300}
				fps={60}
				width={1920}
				height={1080}
			/>
		</>
	);
};
