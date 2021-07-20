import { Sequence, useCurrentFrame, useVideoConfig } from 'remotion';

export const TypeText: React.FC<{}> = () => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();
	const str = 'console.log("Hello World.");'.substr(0, Math.round(frame / 3));
	return (
		<Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
			<div style={{ display: "flex", flex: 1, flexDirection: "column", backgroundColor: 'white', alignItems: "center", justifyContent: "center", textAlign: "center" }}>
				<p style={{ fontSize: 60 }}>{str}</p>
			</div>
		</Sequence>
	);
};
