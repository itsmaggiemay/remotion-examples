import { Composition } from 'remotion'
import { TypeText } from './TypeText';


export const TypeTextContainer: React.FC = () => {

	return (
		<>
			<Composition
				id="TypeText"
				component={TypeText}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{}}
			/>
		</>
	);
};
