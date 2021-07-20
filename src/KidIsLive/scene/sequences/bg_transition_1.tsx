import {FC} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {IsLive} from '../../components/is_live';
import {TwitchLogo} from '../../components/twitch';

type Props = {
	duration: number;
};

export const BgTransition1: FC<Props> = ({duration}) => {
	const frame = useCurrentFrame();

	const scale = interpolate(
		frame,
		[0, duration / 8, duration * 0.8, duration],
		[0, 1.25, 1.25, 0],
		{
			extrapolateRight: 'clamp',
		}
	);
	const opacity = interpolate(frame, [0, duration / 8], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}}
		>
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: 1920 * scale,
					height: 1920 * scale,
					background: '#24B8F8',
					borderRadius: '100%',
					overflow: 'hidden',
				}}
			>
				<div
					style={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: 1920,
						height: 1080,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<TwitchLogo
						style={{
							position: 'absolute',
							width: 100,
							opacity,
							transform: 'translateY(-320px)',
						}}
					/>
					<IsLive
						style={{
							position: 'absolute',
							width: 900,
							opacity,
						}}
					/>
					<p
						style={{
							position: 'absolute',
							opacity,
							fontFamily: 'Helvetica Neue',
							fontSize: 28,
							fontWeight: 'bold',
							color: '#fff',
							letterSpacing: '0.125em',
							textTransform: 'uppercase',
							transform: 'translateY(400px)',
						}}
					>
						twitch.com/kidqueb
					</p>
				</div>
			</div>
		</div>
	);
};
