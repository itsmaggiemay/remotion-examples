import {AbsoluteFill} from 'remotion'
export const Background: React.FC = () => {
  
	return (
		<AbsoluteFill style={{
    // background: 'linear-gradient(to bottom, #7affad, #3be374)',
		background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',

    padding: 55,
		}}
		>
			<div style={{
      flex: 1,
      backgroundColor: 'white',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)'
			}} />
		</AbsoluteFill>
);
};