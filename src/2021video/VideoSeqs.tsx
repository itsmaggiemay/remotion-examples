import { interpolate, Sequence, useCurrentFrame, useVideoConfig, interpolateColors, getInputProps } from 'remotion';
import { SessionInfo } from './Layers/SessionInfo';
import { SpeakerData, Speakers } from './Layers/Speakers';
import { Sponsors, SponsorsData } from './Layers/Sponsors';
import { VideoLayer } from './Layers/VideoLayer';

export const VideoSeqs: React.FC<{
	speakers: Array<SpeakerData>;
	sessionTitle: string;
	videoPath: string,
	sponsorsData: Array<SponsorsData>
}> = ({
	speakers,
	sessionTitle,
	videoPath,
	sponsorsData
}) => {
		const frame = useCurrentFrame();
		const videoConfig = useVideoConfig();
		const inputProps = getInputProps()

		const bgColorA = interpolateColors(frame,
			[0, 100, 200],
			['#E95420', '#5E2750', '#F6BBA6']
		);
		const bgColorB = interpolateColors(frame,
			[0, 100, 200],
			['#5E2750', '#E95420', '#BEA8B9']
		);
		const opacity = interpolate(
			frame,
			[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
			[1, 0],
			{
				extrapolateLeft: 'clamp',
				extrapolateRight: 'clamp',
			}
		);
		const transitionStart = 25;

		return (
			<div style={{
				flex: 1,
				background: `linear-gradient(-45deg, ${bgColorA}, ${bgColorB})`
			}}>
				<div style={{ opacity }}>
					<Sequence from={0}
						durationInFrames={100}>
						<SessionInfo
							sessionTitle={sessionTitle}
						/>
					</Sequence>
					<Sequence from={20} durationInFrames={80}>
						<Speakers
							speakers={speakers} />
					</Sequence>
					<Sequence from={100} durationInFrames={50}>
						<Sponsors sponsorsData={[sponsorsData[0], sponsorsData[1]]}/>
					</Sequence>
					<Sequence from={150} durationInFrames={50}>
						<Sponsors sponsorsData={[sponsorsData[2], sponsorsData[3]]}/>
					</Sequence>
					<Sequence
						from={200}
						durationInFrames={(inputProps?.duration ?? 20) * 30}>
						<VideoLayer
							transitionStart={200}
							videoPath={videoPath}
						/>
					</Sequence>
				</div>
			</div>
		);
	};
