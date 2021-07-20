import { useCurrentFrame, useVideoConfig, Img } from 'remotion';

import logo from '../Images/placeholder.png';
export type SpeakerData = {
	"name": string;
	"bio": string;
	"photoPath": string;
}

export const Speakers: React.FC<{
	speakers: Array<SpeakerData>;
}> = ({ speakers }) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const bottom = frame > 20 ? 50 : 30 + frame;
	const opacity = frame >= 20 ? 1 : (frame / 20);
	return (
		<div
			style={{
				width: videoConfig.width,
				height: videoConfig.height,
				flex: 1, justifyContent: "center",
				alignItems: "center",
				opacity: opacity,
				fontFamily: 'Ubuntu',
				paddingLeft: 30,
				color: 'white'
			}}>
			<div style={{
				marginLeft: 20,
				marginRight: 20,
				display: 'flex',
				flexDirection: 'column',
				position: 'absolute',
				bottom: bottom,
			}}>
				<div style={{
					display: 'flex',
					flexDirection: 'row',
					flexFlow: 'wrap'
				}}>
					{speakers.map((item, index) => (
							<div style={{
								border: 'solid white',
								display: 'flex',
								flexDirection: 'row',
								borderRadius: 75,
								height: 150,
								marginRight: 10
							}}
								key={index}>
								<div style={{
									background: `url(${item.photoPath}) no-repeat center`,
									backgroundSize: "cover",
									width: 150,
									height: 150,
									borderRadius: "100%",
									marginTop: -3,
									marginLeft: -3
								}} />
								<div style={{
									display: 'flex',
									flexDirection: 'column',
									marginRight: 60,
									marginLeft: 10
								}}>
									<span style={{
										fontSize: 40,
										marginTop: 20,
										marginLeft: 10,
										fontWeight: 'bold'
									}}>
										{item.name}
									</span>
									<span style={{
										fontSize: 30,
										marginLeft: 10,
										marginTop: 10
									}}>
										{item.bio}
									</span>
								</div>
							</div>
						))}
				</div>
			</div>



		</div>
	);
};
