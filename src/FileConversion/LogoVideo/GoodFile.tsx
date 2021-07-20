import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  CHICLET_ASPECT_RATIO,
  CHICLET_SIZE_CONSTANT,
  COLOR_CHICLET_GOOD,
  makeEase
} from "./config";
import { FileChiclet } from "./FileChiclet";

export const GoodFile: React.FC<{ label?: string }> = ({ label }) => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();

  const chicWidth = videoConfig.width * CHICLET_SIZE_CONSTANT;
  const chicHeight = chicWidth * CHICLET_ASPECT_RATIO;

  const appearanceDevelopment = spring({
    config: {
      damping: 10,
      mass: 0.8
    },
    fps: videoConfig.fps,
    frame: frame * 1.9
  });

  const slideOutOffsetPercent = 0.6;
  const slideOut = interpolate(
    Math.max(0, frame - videoConfig.durationInFrames * slideOutOffsetPercent),
    [0, videoConfig.durationInFrames * (1 - slideOutOffsetPercent)],
    [0, videoConfig.width / 2 + chicWidth],
    {
      easing: makeEase(2.5)
    }
  );

  const zDuration = 0.22;
  const zOut = interpolate(frame, [0, videoConfig.durationInFrames * zDuration], [0, 1], {
    easing: makeEase(1.4),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  });

  const actingWidth = appearanceDevelopment * chicWidth;

  return (
    <div
      style={{
        position: "absolute",
        width: videoConfig.width,
        height: videoConfig.height
      }}
    >
      <div
        style={{
          position: "absolute",
          top: (videoConfig.height - chicHeight) / 2,
          left: slideOut + (videoConfig.width - actingWidth) / 2
        }}
      >
        <FileChiclet
          color={COLOR_CHICLET_GOOD}
          width={actingWidth}
          height={chicHeight}
          scale={appearanceDevelopment}
          label={label ?? "JPG"}
          zDistance={zOut}
        />
      </div>
    </div>
  );
};
