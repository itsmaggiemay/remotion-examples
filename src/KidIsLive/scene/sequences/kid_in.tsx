import {FC} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {Kid} from '../../components/kid';

type Props = {
	duration: number;
};

export const KidIn: FC<Props> = ({duration}) => {
	const frame = useCurrentFrame();
	const config = useVideoConfig();
	const tick = duration / 4;

	const kScale = interpolate(
		frame,
		[0, tick - 1, tick, tick * 2],
		[0, 0, 0.8, 1],
		{
			extrapolateRight: 'clamp',
		}
	);

	const iScale = interpolate(
		frame,
		[0, tick * 2 - 1, tick * 2, tick * 3],
		[0, 0, 0.8, 1],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const dScale = interpolate(
		frame,
		[tick * 3 - 1, tick * 3, duration],
		[0, 0.8, 1],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div
			style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%,-55%)',
				width: 'auto',
			}}
		>
			<Kid
				style={{width: 820}}
				k={{
					style: {
						transformOrigin: 'center',
						transform: `scale(${kScale})`,
					},
				}}
				i={{
					style: {
						transformOrigin: 'center',
						transform: `scale(${iScale})`,
					},
				}}
				d={{
					style: {
						transformOrigin: 'center',
						transform: `scale(${dScale})`,
					},
				}}
			/>
		</div>
	);
};
