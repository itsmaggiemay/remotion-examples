import { Composition } from 'remotion'

import { HelloWorld } from './HelloWorld';
import { Logo } from './HelloWorld/Logo';
import { Subtitle } from './HelloWorld/Subtitle';
import { Title } from './HelloWorld/Title';

import { FavoriteEmojiContainer } from './FavoriteEmoji/FavoriteEmojiContainer';
import { CoderOneLogoContainer } from './CoderOneLogo/CoderOneLogoContainer';
import { Remotion2TrailerContainer } from './Remotion2trailer/RemotionTrailer2Container';
import { TwentyVideoContainer } from './2021video/TwentyVideoContainer';
import { AnyStickerContainer } from './AnySticker/AnyStickerContainer';
import { TypeTextContainer } from './TypeText/TypeTextContainer';
import { TextTransitionContainer } from './TextTransition/TextTransitionContainer';
import { CanvasContainer } from './Canvas/CanvasContainer';
import { SVGCosmoContainer } from './SVGCosmo/SVGCosmoContainer';
import { FavoriteColorContainer } from './FavoriteColor/FavoriteColorContainer';
import { KidIsLiveContainer } from './KidIsLive/KidIsLiveContainer';
import { ConfettiContainer } from './Confetti/ConfettiContainer';
import { FileConversionContainer } from './FileConversion/FileConversionContainer';
import { ApiContainer } from './Api/ApiContainer';
import { CalendarContainer } from './Calendar/CalendarContainer';
import { SpotifyContainer } from './Spotify/SpotifyContainer'
import { TotoroApiContainer } from './TotoroApi/TotoroApiContainer';
import { WeatherContainer } from './Weather/WeatherContainer';
import { StarWarsContainer } from './StarWars/StarWarsContainer';


export const RemotionVideo: React.FC = () => {
	return (
		<>
			<CoderOneLogoContainer />
			<FavoriteEmojiContainer />
			<Remotion2TrailerContainer />
			<TwentyVideoContainer />
			<AnyStickerContainer />
			<TypeTextContainer />
			<TextTransitionContainer />
			<CanvasContainer/>
			<SVGCosmoContainer/>
			<FavoriteColorContainer />
			<KidIsLiveContainer />
			<ConfettiContainer />
			<FileConversionContainer />
			<ApiContainer />
			<CalendarContainer/>
			<SpotifyContainer />
			<TotoroApiContainer />
			<WeatherContainer/>
			<StarWarsContainer />

			{/* START HelloWorld */}
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Logo"
				component={Logo}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Title"
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
				id="Subtitle"
				component={Subtitle}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>
			{/* END HelloWorld */}


		</>
	);
};
