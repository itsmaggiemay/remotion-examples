import { spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Twemoji } from './Twemoji';

export const Emojis: React.FC<{
  emojis: string[];
}> = ({ emojis }) => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();

  return (
	<h1
		style={{
          fontSize: 300,
          textAlign: 'center',
          position: 'absolute',
          bottom: 20,
          width: '100%',
		}}
	>
		{emojis.map((emoji, i) => {
        return (
	<span
		key={`${emoji}-${i}`}
		style={{
              color: 'black',
              marginLeft: 30,
              marginRight: 30,
              transform: `scale(${spring({
                fps: videoConfig.fps,
                frame,
                config: {
                  damping: 100,
                  stiffness: 200,
                  mass: 0.3,
                },
              })})`,
              display: 'inline-block',
		}}
	>
		<Twemoji emoji={emoji} />
	</span>
        );
      })}
	</h1>
  );
};
