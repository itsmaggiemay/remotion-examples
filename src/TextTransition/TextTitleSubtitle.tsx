import { interpolate, useCurrentFrame } from 'remotion';
import './font.css';

export const TextTitleSubtitle: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 20], [0, 1]);
	return (
		<div
			style={{
				fontFamily: 'Roboto',
				fontSize: 200,
				textAlign: 'center',
				position: 'absolute',
				top: '40%',
				width: '100%',
				opacity,
				color: '#FBB6CE',
				fontWeight: 'bold'
			}}
		>
			{/* Store All Your Thoughts In One Place */}
			 Launching On
		</div>
	);
};
