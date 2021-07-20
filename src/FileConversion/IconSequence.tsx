import { Sequence, useVideoConfig } from "remotion";
import { SingleConversion } from "./SingleConversion";

export const IconSequence: React.FC<{
  badFiles: { label: string; color: string; goodLabel?: string }[];
}> = ({ badFiles }) => {
  const videoConfig = useVideoConfig();

  const videoDuration = videoConfig.durationInFrames / badFiles.length;

  return (
    <div
      style={{
        flex: 1,
        background: "linear-gradient(31deg, rgba(18,24,33,1) 0%, rgba(22,35,41,1) 100%)"
      }}
    >
      <div>
        {badFiles.map((value, index) => {
          return (
            <Sequence from={index * videoDuration} durationInFrames={videoDuration}>
              <SingleConversion badFile={value} />
            </Sequence>
          );
        })}
      </div>
    </div>
  );
};
