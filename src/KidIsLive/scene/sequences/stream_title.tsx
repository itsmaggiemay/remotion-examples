import {FC} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

type Props = {
	title: string;
	duration: number;
};

export const StreamTitle: FC<Props> = ({title, duration}) => {
	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [0, duration * 0.9, duration], [1, 1, 0]);

	return (
		<div
			style={{
				color: '#fff',
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
				fontFamily: 'Helvetica Neue',
				fontWeight: 'bold',
				padding: '0 40px',
				textAlign: 'center',
				opacity,
			}}
		>
			<p style={{fontSize: 24, letterSpacing: '0.125em'}}>
				{new Date().toLocaleDateString()}
			</p>
			<p style={{fontSize: 120}}>{title}</p>
		</div>
	);
};
