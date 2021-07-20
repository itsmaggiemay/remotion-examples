import { continueRender, delayRender, Composition} from 'remotion'
import {getAudioDuration} from '@remotion/media-utils';
import {useEffect, useState} from 'react';
import voiceover from './res/voiceover.wav';
import { OtherFeatures } from './OtherFeatures';
import { AudioDemo } from './AudioDemo';
import { AudioFeatures } from './AudioFeatures';
import { Contributors } from './Contributors';
import { Cube } from './Cube';
import { EndCard } from './EndCard';
import { END_CARD_LENGTH } from './EndCardLength';
import { Hype } from './Hype';
import { Intro } from './Intro';
import { Main } from './Main';
import { PreviousRelease } from './PreviousRelease';
import { ResizableFull } from './ResizableFull';
import { Showcase } from './Showcase';
import { Thumbnail } from './Thumbnail';



export const Remotion2TrailerContainer: React.FC = () => {
    	// REMOTION 2 TRAILER
	const [handle] = useState(() => delayRender());
	const [length, setLength] = useState<number | null>(null);

	useEffect(() => {
		getAudioDuration(voiceover)
			.then((l) => {
				setLength(l);
				continueRender(handle);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [handle]);

	if (!length) {
		return null;
	}
	return (
        <>
            <Composition
				id="RemotionTrailer2-OtherFeatures"
				component={OtherFeatures}
				durationInFrames={600}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{}}
			/>
			<Composition
				id="RemotionTrailer2-Contributors"
				component={Contributors}
				durationInFrames={600}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{}}
			/>
			<Composition
				id="RemotionTrailer2-resizeable"
				component={ResizableFull}
				durationInFrames={Math.floor(Math.PI * 2 * 30)}
				fps={30}
				width={1080}
				height={1080}
				defaultProps={{}}
			/>
			<Composition
				id="RemotionTrailer2-audio-demo"
				component={AudioDemo}
				durationInFrames={600}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{}}
			/>
			<Composition
				id="RemotionTrailer2-main"
				component={Main}
				durationInFrames={Math.floor(length * 30) + END_CARD_LENGTH}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{}}
			/>
			<Composition
				id="RemotionTrailer2-intro"
				component={Intro}
				durationInFrames={300}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{}}
			/>
			<Composition
				id="RemotionTrailer2-showcase"
				component={Showcase}
				durationInFrames={300}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{}}
			/>
			<Composition
				id="RemotionTrailer2-audio-features"
				component={AudioFeatures}
				durationInFrames={300}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="RemotionTrailer2-cube"
				component={Cube}
				durationInFrames={300}
				fps={30}
				width={400}
				height={400}
			/>
			<Composition
				id="RemotionTrailer2-previous-release"
				component={PreviousRelease}
				durationInFrames={300}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="RemotionTrailer2-endcard"
				component={EndCard}
				durationInFrames={300}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="RemotionTrailer2-hype"
				component={Hype}
				durationInFrames={300}
				fps={30}
				width={400}
				height={400}
			/>
			<Composition
				id="RemotionTrailer2-thumbnail"
				component={Thumbnail}
				durationInFrames={300}
				fps={30}
				width={1920}
				height={1080}
			/>
            </>
	);
};
