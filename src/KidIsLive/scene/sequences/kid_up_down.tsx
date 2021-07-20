import {FC} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {Kid} from '../../components/kid';

type Props = {
	duration: number;
};

export const KidUpDown: FC<Props> = ({duration}) => {
	const frame = useCurrentFrame();
	const config = useVideoConfig();

	const scale = interpolate(
		frame,
		[0, duration * 0.2, duration * 0.4, duration * 0.75, duration],
		[1, 1.8, 2.1, 2.2, 0],
		{
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
				style={{
					width: 820,
					transform: `scale(${scale})`,
				}}
			/>
		</div>
	);
};
