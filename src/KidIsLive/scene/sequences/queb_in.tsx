import {FC} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Queb} from '../../components/queb';

type Props = {
	duration: number;
};

export const QuebIn: FC<Props> = ({duration}) => {
	const frame = useCurrentFrame();

	const scale = interpolate(
		frame,
		[0, duration * 0.7 - 1, duration * 0.7, duration],
		[0, 0, 0.9, 1],
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
				transform: 'translate(-50%,-50%)',
				width: 'auto',
			}}
		>
			<Queb style={{width: 980, transform: `scale(${scale})`}} />;
		</div>
	);
};
