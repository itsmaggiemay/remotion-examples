import { useCurrentFrame, useVideoConfig, Img } from 'remotion';
import logo from '../Images/ubuCon_logo_or.svg';
import startup from '../Sounds/startup.mp3';
import { Audio } from 'remotion';
import '../Fonts/font.css'



export const SessionInfo: React.FC<{
	sessionTitle: string;

}> = ({
	sessionTitle,
}) => {
		const videoConfig = useVideoConfig();
		const frame = useCurrentFrame();
		const marginTop = frame > 20 ? 40 : 60 - frame;
		const opacity = frame >= 20 ? 1 : (frame / 20);
		return (
			<div
				style={{
					width: videoConfig.width,
					height: videoConfig.height,
					flex: 1, justifyContent: "center", alignItems: "center",
					marginTop: marginTop,
					opacity: opacity,
					fontFamily: 'Ubuntu',
					color: 'white',
					paddingLeft: 30
				}}>
				<Audio src={startup} />
				<div style={{
					display: 'flex',
					flexDirection: 'row',
					height: 200,
					alignItems: 'center',
					marginLeft: 20,
					marginRight: 20
				}}>
					<span style={{
						fontSize: 80,
						margin: 0,
						flex: 1
					}}>
						{sessionTitle}
					</span>
					<div style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: "center",
					}}>
						<Img src={logo} style={{ width: 500 }} />
						<span style={{
							fontSize: 40,
							margin: 0,
						}}>
							September 26-26 | Online
					</span>
					<span style={{
							fontSize: 40,
							margin: 0,
						}}>
							2021.ubucon.asia
					</span>
					</div>

				</div>
				<div style={{
					marginLeft: 30,
					display: 'flex',
					flexDirection: 'column'
				}}>

					<div style={{
						display: 'flex',
						flexDirection: 'row',
						flexFlow: 'wrap',
						marginTop: 10
					}}>
					</div>
				</div>

			</div>
		);
	};
