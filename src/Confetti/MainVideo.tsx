import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {BGTheme} from './MainVideo/BGTheme';
import {ConfettiEffect} from './MainVideo/ConfettiEffect';
import {Logo} from './MainVideo/Logo';
import {PhoneScene} from './MainVideo/PhoneScene';
import {Title} from './MainVideo/Title';

export const MainVideo: React.FC<{
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
	const transitionPop = 88;
	const transitionDone = 94;
	const slideAway = 178;

	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<div style={{opacity}}>
				<Sequence from={0} durationInFrames={slideAway}>
					<Logo />
				</Sequence>
				<Sequence from={transitionDone} durationInFrames={84}>
					<Title titleText={titleText} titleColor={titleColor} />
				</Sequence>
				<Sequence from={transitionPop} durationInFrames={slideAway}>
					<ConfettiEffect />
				</Sequence>
				<Sequence from={0} durationInFrames={Infinity}>
					<BGTheme />
				</Sequence>
				<Sequence from={180} durationInFrames={Infinity}>
					<PhoneScene videoSrc={'phone'} baseScale={1} />
				</Sequence>
			</div>
		</div>
	);
};
