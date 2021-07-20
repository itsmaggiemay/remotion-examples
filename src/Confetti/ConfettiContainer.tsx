import {Composition} from 'remotion';
import {MainVideo} from './MainVideo';
import {BGTheme} from './MainVideo/BGTheme';
import {ConfettiEffect} from './MainVideo/ConfettiEffect';
import {Logo} from './MainVideo/Logo';
import {PhoneScene} from './MainVideo/PhoneScene';
import {Title} from './MainVideo/Title';

export const ConfettiContainer: React.FC = () => {
	return (
		<>
			<Composition
				id="Confetti-MainVideo"
				component={MainVideo}
				durationInFrames={805}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'New NFT-Metro update',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Confetti-Logo"
				component={Logo}
				durationInFrames={500}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Confetti-Title"
				component={Title}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Confetti-ConfettiEffect"
				component={ConfettiEffect}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Confetti-BGTheme"
				component={BGTheme}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Confetti-PhoneScene"
				component={PhoneScene}
				durationInFrames={300}
				fps={30}
				width={1280}
				height={720}
				defaultProps={{
					videoSrc: 'phone',
					baseScale: 1,
				}}
			/>
		</>
	);
};
