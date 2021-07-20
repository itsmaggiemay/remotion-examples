import {Composition} from 'remotion';
import {Calendar} from './Calendar';
import {Main} from './Main';

export const CalendarContainer: React.FC = () => {
	return (
		<>
			<Composition
				id="Calendar-Main"
				component={Main}
				durationInFrames={150}
				fps={30}
				width={1280}
				height={720}
			/>
			<Composition
				id="Calendar-Calendar"
				component={Calendar}
				durationInFrames={150}
				fps={30}
				width={300}
				height={300}
				defaultProps={{
					day: 'FRI',
					isReactWednesday: false,
					offset: 0,
				}}
			/>
			<Composition
				id="Calendar-ReactCalendar"
				component={Calendar}
				durationInFrames={150}
				fps={30}
				width={300}
				height={300}
				defaultProps={{
					day: 'FRI',
					isReactWednesday: true,
					offset: 0,
				}}
			/>
		</>
	);
};
