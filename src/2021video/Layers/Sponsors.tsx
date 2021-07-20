import { useCurrentFrame, useVideoConfig, Img } from 'remotion';

import logo from '../Images/placeholder.png';
export type SponsorsData = {
	class: string,
	logos: Array<string>
}
export const Sponsors: React.FC<{
	sponsorsData: Array<SponsorsData>
}> = ({ sponsorsData }) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const opacity = frame >= 20 ? 1 : (frame / 20);
	const marginTop = frame > 20 ? 40 : 60 - frame;
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
				color: 'black'
			}}>
					{sponsorsData.map((item, index) => {
						let logoHeight = 100;
						switch(item.class){
							case "Diamond": logoHeight = 250; break;
							case "Gold": logoHeight = 200; break;
							case "Silver": logoHeight = 170; break;
							default: logoHeight = 150; break;
						}
						return (
							<div style={{
								margin: 20,
								marginTop: marginTop,
								display: 'flex',
								flexDirection: 'column'
							}}>
								<span style={{
									fontSize: 80,
									margin: 10
								}}>
									{item.class}
								</span>
								<div style={{
									display: 'flex',
									flexDirection: 'row',
									flexFlow: 'wrap',
								}}>
									{item.logos.map((item, index) => (
										<Img key={index} src={item} style={{ height: logoHeight, margin: 10 }} />
									))}
								</div>
							</div>
						)
					})}
		
		</div>
	);
};
