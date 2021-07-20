import { useVideoConfig } from "remotion";
import { COLOR_1, COLOR_2 } from "./config";

export const Glyph: React.FC<{
  scale: number;
}> = ({ scale }) => {
  const config = useVideoConfig();
  return (
    <svg
      viewBox="0 0 410 460"
      width={config.width}
      height={config.height}
      style={{
        position: "absolute",
        transform: `scale(${scale})`
      }}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>status_bar_icon</title>
      <defs>
        <linearGradient x1="75.0836156%" y1="0%" x2="24.8750188%" y2="100%" id="linearGradient-1">
          <stop offset="0%" stopColor={COLOR_1} />
          <stop offset="100%" stopColor={COLOR_2} />
        </linearGradient>
      </defs>
      <g id="Professional" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="vector-icon"
          transform="translate(-45.000000, -20.000000)"
          fill="url(#linearGradient-1)"
          fillRule="nonzero"
        >
          <g id="status_bar_icon" transform="translate(45.000000, 20.000000)">
            <path
              d="M345,282.5 L252.5,282.5 L330,147.5 C345,172.5 355,200 355,227.5 C355,247.5 350,265 345,282.5 Z M72.5,160 L225,160 L180,82.5 C135,90 95,120 72.5,160 Z M320,135 C292.5,100 250,80 205,80 C202.5,80 200,80 197.5,80 L275,212.5 L320,135 Z M55,230 C55,260 62.5,287.5 80,312.5 L135,217.5 L135,215 L157.5,175 L65,175 C60,192.5 55,210 55,230 Z M337.5,297.5 L182.5,297.5 L227.5,377.5 C277.5,370 317.5,340 337.5,297.5 Z M410,232.5 C410,345 317.5,437.5 205,437.5 C172.5,437.5 142.5,427.5 112.5,415 L112.5,415 L77.5,460 L67.5,337.5 C100,380 150,405 205,405 C302.5,405 380,327.5 380,232.5 L380,232.5 Z M135,245 L212.5,380 L212.5,380 L205,380 C160,380 117.5,360 87.5,325 L87.5,325 L135,245 Z M332.5,0 L342.5,122.5 C310,80 260,55 205,55 C110,55 32.5,132.5 30,227.5 L30,227.5 L0,227.5 C0,115 92.5,22.5 205,22.5 C237.5,22.5 267.5,32.5 297.5,45 L297.5,45 L332.5,0 Z"
              id="Shape"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
