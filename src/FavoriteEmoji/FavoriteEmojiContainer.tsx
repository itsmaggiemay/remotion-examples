import { Composition } from 'remotion'

import { FavoriteEmojis } from './FavoriteEmojis';
import { EmojiTitle } from './Title';
import { Emojis } from './Emojis';


export const FavoriteEmojiContainer: React.FC = () => {
	const emojiDuration = 2.5;
	const emojiFps = 30;
	const emojiDurationInFrames = emojiDuration * emojiFps;
	return (
		<>
			<Composition
				id="FavoriteEmojis"
				component={FavoriteEmojis}
				durationInFrames={emojiDurationInFrames}
				fps={emojiFps}
				width={1920}
				height={1080}
				defaultProps={{
					name: 'John Doe',
					emojis: ['🙌', '😂', '✨', '😅'],
				}}
			/>
			<Composition
				id="FavoriteEmoji-EmojiTitle"
				component={EmojiTitle}
				durationInFrames={emojiDurationInFrames}
				fps={emojiFps}
				width={1920}
				height={1080}
				defaultProps={{
					name: 'John Doe',
				}}
			/>
			<Composition
				id="FavoriteEmoji-Emojis"
				component={Emojis}
				durationInFrames={emojiDurationInFrames}
				fps={emojiFps}
				width={1920}
				height={1080}
				defaultProps={{
					emojis: ['🙌', '😂', '✨', '😅'],
				}}
			/>
		</>
	);
};
