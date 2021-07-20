/* eslint-disable react/no-danger */
import twemoji from 'twemoji';

const style = 'display: inline-block; width: auto; height: 1em; vertical-align: -0.125em;';

export const Twemoji: React.FC<{
  emoji: string;
}> = ({ emoji }) => (
	<span
		dangerouslySetInnerHTML={{
      __html: twemoji.parse(emoji, {
        attributes: () => ({ style }),
        folder: 'svg',
        ext: '.svg',
      }),
		}}
  />
);
