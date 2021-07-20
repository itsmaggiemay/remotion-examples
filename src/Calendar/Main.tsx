import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Calendar} from './Calendar';

export const Main: React.FC = () => {
	const frame = useCurrentFrame();
	const {width, fps} = useVideoConfig();

	const translateX = (day: number) =>
		interpolate(
			frame,
			[((day + 1) * fps) / 2, ((day + 1) * fps) / 2 + (2 * fps) / 2],
			[width, 0],
			{
				extrapolateLeft: 'clamp',
				extrapolateRight: 'clamp',
			}
		);

	return (
		<div
			style={{
				backgroundColor: 'white',
				flex: 1,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{['MON', 'TUE', 'WED'].map((day, i) => {
				return (
					<AbsoluteFill
						key={day}
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							transform: `translateX(${translateX(i)}px)`,
						}}
					>
						<Calendar
							isReactWednesday={day === 'WED'}
							day={day}
							offset={2 - i}
						/>
					</AbsoluteFill>
				);
			})}
		</div>
	);
};
