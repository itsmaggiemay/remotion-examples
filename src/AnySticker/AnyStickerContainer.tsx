import { Composition} from 'remotion'

import {Welcome} from './Welcome';


export const AnyStickerContainer: React.FC = () => {

	return (
<>
<Composition
				component={Welcome}
				id="AnySticker-Welcome"
				durationInFrames={31 * 30}
				width={1080}
				height={1920}
				fps={30}
			/>
			<Composition
				id="AnySticker-springy"
				lazyComponent={() => import('./Springy')}
				width={1080}
				height={1920}
				fps={30}
				durationInFrames={60}
			/>
			<Composition
				id="AnySticker-screen-showcase"
				lazyComponent={() => import('./ScreenShowcase')}
				width={1080}
				height={1920}
				fps={30}
				durationInFrames={100}
			/>
			<Composition
				id="AnySticker-real-stickers"
				lazyComponent={() => import('./RealStickers')}
				width={1080}
				height={1920}
				fps={30}
				durationInFrames={30 * 2.2}
			/>
			<Composition
				id="AnySticker-layout"
				lazyComponent={() => import('./Layout')}
				width={1080}
				height={1920}
				fps={30}
				durationInFrames={3 * 30}
			/>
			<Composition
				id="AnySticker-end-logo"
				lazyComponent={() => import('./Circle')}
				width={1080}
				height={1920}
				fps={30}
				durationInFrames={3 * 30}
			/>
			<Composition
				id="AnySticker-big-rotate"
				lazyComponent={() => import('./BigRotate')}
				width={1080}
				height={1080}
				fps={60}
				durationInFrames={3 * 30}
			/>
</>
	);
};
