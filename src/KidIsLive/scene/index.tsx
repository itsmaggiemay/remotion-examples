import {FC} from 'react';
import {Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {useSeconds} from '../lib/in_seconds';
import {BgTransition1} from './sequences/bg_transition_1';
import {KidIn} from './sequences/kid_in';
import {KidUpDown} from './sequences/kid_up_down';
import {QuebIn} from './sequences/queb_in';
import {StreamTitle} from './sequences/stream_title';

type Props = {
	title: string;
};

export const Scene: FC<Props> = ({title}) => {
	const frame = useCurrentFrame();
	const config = useVideoConfig();
	const seconds = useSeconds();

	const kidInDur = seconds(0.5);
	const quebInDur = seconds(0.5);
	const kidUpDownDur = seconds(0.5);
	const bgTransition1Dur = seconds(1.5);
	const titleDur = seconds(2.5);

	return (
		<div style={{flex: 1, backgroundColor: '#000'}}>
			<Sequence
				from={kidInDur}
				durationInFrames={kidInDur + quebInDur + kidUpDownDur / 3}
			>
				<QuebIn duration={quebInDur} />
			</Sequence>

			<Sequence from={0} durationInFrames={kidInDur + quebInDur}>
				<KidIn duration={kidInDur} />
			</Sequence>

			<Sequence
				from={kidInDur + quebInDur + kidUpDownDur + bgTransition1Dur / 3}
				durationInFrames={config.durationInFrames}
			>
				<StreamTitle title={title} duration={titleDur} />
			</Sequence>

			<Sequence
				from={kidInDur + quebInDur + kidUpDownDur}
				durationInFrames={config.durationInFrames}
			>
				<BgTransition1 duration={bgTransition1Dur} />
			</Sequence>

			<Sequence
				from={kidInDur + quebInDur}
				durationInFrames={config.durationInFrames}
			>
				<KidUpDown duration={kidUpDownDur} />
			</Sequence>
		</div>
	);
};
