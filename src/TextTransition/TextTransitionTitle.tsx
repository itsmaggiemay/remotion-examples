import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import './font.css';

export const TextTransitionTitle: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({ titleText, titleColor }) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const text = titleText.split(' ').map((t) => ` ${t} `);
	// const opacity = interpolate(frame, [0, 25], [0, 1]);
	const { fps } = useVideoConfig();
	const progress = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});

	const translateY = interpolate(progress, [0, 1], [600, 0]);


	return (
		<h1
			style={{
				fontFamily: 'Patua One',
				fontWeight: 'bold',
				fontSize: 200,
				textAlign: 'center',
				position: 'absolute',
				top: "25%",
				width: '100%',
			}}
		>
			{text.map((t, i) => {
				return (
					<span
						key={t}
						style={{
							color: titleColor,
							marginLeft: 10,
							marginRight: 10,
							// transform: `scale(${spring({
							// 	fps: videoConfig.fps,
							// 	frame: frame - i * 5,
							// 	config: {
							// 		damping: 100,
							// 		stiffness: 200,
							// 		mass: 0.5,
							// 	},
							// })})`,
							display: 'inline-block',
							transform: `translateY(${translateY}px)`
						}}
					>
						{t}
					</span>
				);
			})}
		</h1>
	);
};
