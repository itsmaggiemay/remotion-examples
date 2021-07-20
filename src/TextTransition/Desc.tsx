import { interpolate, useCurrentFrame } from 'remotion';
import './font.css';

export const Desc: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1]);
  return (
    <div
      style={{
        fontFamily: 'Patua One',
        fontSize: 120,
        position: 'absolute',
        top: '10%',
        width: '100%',
        color: '#CBD5E0',
        lineHeight: '70%'
      }}
    >
      {/* Store All Your Thoughts In One Place */}
      <p style={{ marginLeft: '10%' }}>All your</p>
      <h1 style={{ color: '#FBB6CE', textAlign: 'center' }}>Thoughts</h1>
      <p style={{ textAlign: 'right', paddingRight: '10%' }}>In <span style={{ textDecoration: 'underline' }}>one</span> place.</p>
    </div>
  );
};
