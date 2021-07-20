import {Composition} from 'remotion';
import {SVGCosmo} from './SVGCosmo';
import {Subtitle} from './SVGCosmo/Subtitle';

import {Cosmo} from './SVGCosmo/Cosmo';

export const SVGCosmoContainer: React.FC = () => {
	return (
		<>
			<Composition
				id="SVGCosmo"
				component={SVGCosmo}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Space Jelly',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="SVGCosmo-Cosmo"
				component={Cosmo}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="SVGCosmo-CosmoTitle"
				component={Subtitle}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
