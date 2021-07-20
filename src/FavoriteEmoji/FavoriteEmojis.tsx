import { interpolate, Sequence, useCurrentFrame, useVideoConfig } from 'remotion';
import { Emojis } from './Emojis';
import { EmojiTitle } from './Title';

export const FavoriteEmojis: React.FC<{
  name: string;
  emojis: string[] | string;
}> = ({ name, emojis }) => {
  const frame = useCurrentFrame();
  const videoConfig = useVideoConfig();

  const opacity = interpolate(frame, [videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const transitionStart = 20;
  const emojisArray: string[] = typeof emojis === 'string' ? [emojis] : emojis;

  return (
	<div style={{ flex: 1, backgroundColor: 'white' }}>
		<div style={{ opacity }}>
			<Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
				<EmojiTitle name={name} />
			</Sequence>
			<Sequence from={transitionStart} durationInFrames={Infinity}>
				<Emojis emojis={emojisArray} />
			</Sequence>
		</div>
	</div>
  );
};
