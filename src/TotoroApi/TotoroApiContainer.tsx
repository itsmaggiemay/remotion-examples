import {Composition} from 'remotion';
import {Stories} from './Stories';

export const TotoroApiContainer: React.FC = () => {
	return (
		<>
			<Composition
				id="Totoro-Stories"
				component={Stories}
				durationInFrames={9 * 30}
				fps={30}
				width={1080}
				height={1080}
				defaultProps={{
					messageIds: [
						// '2baf70d1-42bb-4437-b551-e5fed5a87abe',
						'58611129-2dbc-4a81-a72f-77ddfc1b1b49',
					],
				}}
			/>
		</>
	);
};
