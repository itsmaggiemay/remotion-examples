import {Sequence, useVideoConfig} from 'remotion';
import CanvasExample from './CanvasExample';

export const Canvas: React.FC = () => {
	const videoConfig = useVideoConfig();

	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
				<CanvasExample />
			</Sequence>
		</div>
	);
};
