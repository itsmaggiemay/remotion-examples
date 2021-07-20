import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const EmojiTitle: React.FC<{
  name: string;
}> = ({ name }) => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();
  const text = `${name}'s favorite emojis`;
  const words = text.split(' ').map((t) => ` ${t} `);
  const opacity = interpolate(frame, [50, videoConfig.durationInFrames], [1, 0]);

  return (
	<h1
		style={{
        fontFamily: 'SF Pro Text, Helvetica, Arial',
        fontWeight: 'bold',
        fontSize: 120,
        textAlign: 'center',
        position: 'absolute',
        top: 160,
        width: '100%',
        opacity,
		}}
	>
		{words.map((word, i) => {
        return (
	<span
		key={word}
		style={{
              color: '#363636',
              marginLeft: 16,
              marginRight: 16,
              transform: `scale(${spring({
                fps: videoConfig.fps,
                frame: frame - i * 5,
                config: {
                  damping: 100,
                  stiffness: 200,
                  mass: 0.5,
                },
              })})`,
              display: 'inline-block',
		}}
	>
		{word}
	</span>
        );
      })}
	</h1>
  );
};
