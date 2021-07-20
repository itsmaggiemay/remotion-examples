import { interpolate, useCurrentFrame } from 'remotion';
import './font.css';

export const Date: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1]);
  return (
    <div
      style={{
        fontFamily: 'Roboto',
        fontSize: 250,
        textAlign: 'center',
        position: 'absolute',
        top: '40%',
        width: '100%',
        color: '#0BC5EA',
        fontWeight: 'bold'
      }}
    >
      {/* Store All Your Thoughts In One Place */}
			March 27th
    </div>
  );
};
