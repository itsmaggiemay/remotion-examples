import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';

import { Subtitle } from './SVGCosmo/Subtitle';
import { Cosmo } from './SVGCosmo/Cosmo';
import { Title } from './SVGCosmo/Title';

export const SVGCosmo: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transitionStart = 25;

	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<div style={{opacity}}>
				<Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
					<Cosmo />
				</Sequence>
				<Sequence from={transitionStart + 10} durationInFrames={Infinity}>
					<Title titleText={titleText} titleColor={titleColor} />
				</Sequence>
				<Sequence from={transitionStart + 50} durationInFrames={Infinity}>
					<Subtitle />
				</Sequence>
			</div>
		</div>
	);
};
