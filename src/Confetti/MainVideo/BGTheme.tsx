import {Audio, interpolate, useCurrentFrame} from 'remotion';
import bgTheme from '../assets/sounds/TeaserTheme.mp3';

export const BGTheme = () => {
	const frame = useCurrentFrame();

	return (
		<Audio
			src={bgTheme}
			startFrom={26 * 30}
			volume={interpolate(frame, [0, 30], [0, 1], {extrapolateLeft: 'clamp'})}
		/>
	);
};
