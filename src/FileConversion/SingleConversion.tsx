import { Sequence, useVideoConfig } from "remotion";
import { BadFile } from "./LogoVideo/BadFile";
import { GoodFile } from "./LogoVideo/GoodFile";
import { Logo, SpinLogo } from "./LogoVideo/Logo";

export const SingleConversion: React.FC<{
  badFile: { label: string; color: string; goodLabel?: string };
}> = ({ badFile }) => {
  const videoConfig = useVideoConfig();

  return (
    <div style={{ flex: 1 }}>
      <div>
        <Sequence from={0} durationInFrames={(3 * videoConfig.durationInFrames) / 10}>
          <Logo />
        </Sequence>
        <Sequence
          from={(3 * videoConfig.durationInFrames) / 10}
          durationInFrames={(4.5 * videoConfig.durationInFrames) / 10}
        >
          <SpinLogo />
        </Sequence>
        <Sequence
          from={(7.5 * videoConfig.durationInFrames) / 10}
          durationInFrames={(2.5 * videoConfig.durationInFrames) / 10}
        >
          <Logo />
        </Sequence>
        <Sequence
          from={videoConfig.durationInFrames / 50}
          durationInFrames={videoConfig.durationInFrames / 3}
        >
          <BadFile label={badFile.label} color={badFile.color} />
        </Sequence>
        <Sequence
          from={(1.55 * videoConfig.durationInFrames) / 3}
          durationInFrames={videoConfig.durationInFrames / 2.5}
        >
          <GoodFile label={badFile.goodLabel} />
        </Sequence>
      </div>
    </div>
  );
};
