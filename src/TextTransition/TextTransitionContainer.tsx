import { Composition } from 'remotion'
import { TextTransition } from './TextTransition';
import { TextTitleSubtitle } from './TextTitleSubtitle';


export const TextTransitionContainer: React.FC = () => {

	return (
		<>
	<Composition
				id="TextTransition"
				component={TextTransition}
				durationInFrames={270}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'BrainDUMP',
					titleColor: '#CBD5E0',
				}}
			/>
			<Composition
				id="TextTransitionTitle"
				component={TextTitleSubtitle}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
