import { Composition} from 'remotion'
import { CoderOneLogo } from '.';



export const CoderOneLogoContainer: React.FC = () => {
	return (
        <Composition
        id="CoderOne-Logo"
        component={CoderOneLogo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
    />
	);
};
