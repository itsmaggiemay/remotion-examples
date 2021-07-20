import {interpolate, useCurrentFrame} from 'remotion';

export const Subtitle: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	return (
		<div
			style={{
				fontFamily: 'Helvetica, Arial',
				fontSize: 40,
				textAlign: 'center',
				position: 'absolute',
				bottom: 140,
				width: '100%',
				opacity,
			}}
		>
			spacejelly.dev
		</div>
	);
};
