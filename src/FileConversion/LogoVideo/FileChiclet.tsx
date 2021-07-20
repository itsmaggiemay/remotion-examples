export const FileChiclet: React.FC<{
  scale: number;
  label: string;
  color: string;
  width: number;
  height: number;
  zDistance: number; // between 1 and 0
}> = ({ scale, label, color, width, height, zDistance }) => {
  return (
    <div
      style={{
        background: color,
        borderRadius: height / 2,
        fontFamily: "Helvetica",
        height,
        width,
        color: "#ffffff",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: height / 2,
        boxShadow: `0 ${(zDistance * height) / 10}px ${
          (Math.pow(zDistance, 2) * height) / 20
        }px rgba(0, 0, 0, 0.5)`,
        overflow: "hidden",
        transform: `scale(${scale})`
      }}
    >
      {label}
    </div>
  );
};
