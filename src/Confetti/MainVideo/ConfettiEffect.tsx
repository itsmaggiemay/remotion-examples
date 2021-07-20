import {useState} from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import {interpolate, useCurrentFrame} from 'remotion';

export const ConfettiEffect: React.FC = () => {
	const [isAnimationEnabled, setIsAnimationEnabled] = useState(false);
	const [intervalId, setIntervalId] = useState(null);
	const [animationInstance, setAnimationInstance] = useState(null);

	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);

	const randomInRange = (min: number, max: number) => {
		return Math.random() * (max - min) + min;
	};

	const canvasStyles = {
		position: 'fixed',
		pointerEvents: 'none',
		width: '100%',
		height: '100%',
		top: 300,
		left: 0,
		zIndex: 50,
	};

	const getAnimationSettings = (originXA: number, originXB: number) => {
		return {
			startVelocity: 30,
			spread: 360,
			ticks: 60,
			zIndex: 0,
			particleCount: 150,
			origin: {
				x: randomInRange(originXA, originXB),
				y: Math.random() - 0.2,
			},
		};
	};

	const startAnimation = () => {
		if (!isAnimationEnabled) {
			setIsAnimationEnabled(true);

			setIntervalId(setInterval(nextTickAnimation, 400));
		}
	};

	const getInstance = (instance) => {
		setAnimationInstance(instance);
	};

	const nextTickAnimation = () => {
		animationInstance && setAnimationInstance(getAnimationSettings(0.1, 0.3));
		animationInstance && setAnimationInstance(getAnimationSettings(0.7, 0.9));
	};

	return (
		<ReactCanvasConfetti
			refConfetti={(ref) => getInstance(ref)}
			style={canvasStyles}
			particleCount={1000}
			ticks={500}
			spread={10}
		/>
	);
};
