import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { CHICLET_ASPECT_RATIO, CHICLET_SIZE_CONSTANT, makeEase } from "./config";
import { FileChiclet } from "./FileChiclet";

export const BadFile: React.FC<{ label: string; color: string }> = ({ label, color }) => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();

  const chicWidth = videoConfig.width * CHICLET_SIZE_CONSTANT;
  const chicHeight = chicWidth * CHICLET_ASPECT_RATIO;

  const shrinkDelay = 0.82;
  const shrinkOut = interpolate(
    frame,
    [videoConfig.durationInFrames * shrinkDelay, videoConfig.durationInFrames],
    [1, 0],
    {
      easing: makeEase(1.4),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp"
    }
  );

  const zDelay = 0.7;
  const zDuration = 0.2;
  const zOut = interpolate(
    frame,
    [videoConfig.durationInFrames * zDelay, videoConfig.durationInFrames * (zDelay + zDuration)],
    [1, 0],
    {
      easing: makeEase(1.4),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp"
    }
  );

  const actingWidth = shrinkOut * chicWidth;

  const appearanceSpring = spring({
    config: {
      damping: 17,
      mass: 2.5
    },
    fps: videoConfig.fps,
    frame: frame * 2.35
  });

  const appearanceDevelopment = interpolate(
    appearanceSpring,
    [0, 1],
    [-actingWidth, (videoConfig.width - actingWidth) / 2]
  );

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
          left: appearanceDevelopment
        }}
      >
        <FileChiclet
          color={color}
          width={actingWidth}
          height={chicHeight}
          scale={shrinkOut}
          label={label}
          zDistance={zOut}
        />
      </div>
    </div>
  );
};
