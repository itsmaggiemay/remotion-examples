import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Glyph } from "./Glyph";

export const Logo: React.FC = () => {
  const videoConfig = useVideoConfig();

  return (
    <div
      style={{
        position: "absolute",
        width: videoConfig.width,
        height: videoConfig.height
      }}
    >
      <Glyph scale={0.8} />
    </div>
  );
};

export const SpinLogo: React.FC<{ spinCount?: number }> = ({ spinCount }) => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();

  const rotSpring = spring({
    frame: frame * 2,
    fps: videoConfig.fps,
    config: {
      mass: 15,
      damping: 60
    }
  });

  const rot = interpolate(rotSpring, [0, 1], [0, (spinCount ?? 1) * 360]);

  return (
    <div
      style={{
        position: "absolute",
        width: videoConfig.width,
        height: videoConfig.height,
        transform: `rotate(${rot}deg)`
      }}
    >
      <Glyph scale={0.8} />
    </div>
  );
};
