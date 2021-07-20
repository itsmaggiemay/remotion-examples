import React from 'react';
import {useVideoConfig} from 'remotion';
import styled from 'styled-components';

interface ICPathProps {
	transformY: number;
}

const Container = styled.div`
	width: 400px;
	height: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;

export function BracketPath(props: ICPathProps) {
	const {transformY} = props;

	const config = useVideoConfig();

	return (
		<Container>
			<svg
				viewBox={`0 0 ${config.width} ${config.height}`}
				width="auto"
				height="auto"
				transform={`translate(0, ${transformY})`}
			>
				<g transform="translate(320,800.6235)" id="g22">
					<path
						id="path28"
						style={{
							fill: '#fff',
							fillOpacity: 1,
							fillRule: 'nonzero',
							stroke: 'none',
							transform: 'scale(2.5) rotate(180deg)',
						}}
						d="m 0,0 c -12.776,13.461 -31.856,21.201 -56.739,23.003 l -88.991,5.311 c -14.869,0.858 -24.984,3.559 -30.066,8.029 -4.957,4.363 -7.47,13.129 -7.47,26.053 v 2.445 h -64.657 v -2.445 c 0,-12.917 -2.512,-21.683 -7.465,-26.051 -5.091,-4.472 -15.212,-7.173 -30.079,-8.031 l -89.011,-5.313 c -24.863,-1.8 -43.944,-9.54 -56.71,-23.001 -12.785,-13.459 -19.267,-31.34 -19.267,-53.147 v -39.632 h 64.658 v 13.07 c 0,11.266 3.057,19.104 9.347,23.963 6.424,4.981 18.359,7.938 35.476,8.788 l 66.43,3.324 c 14.934,0.91 27.925,4.599 38.618,10.964 v 0.002 c 9.103,5.43 15.919,14.275 20.332,26.349 4.412,-12.081 11.228,-20.924 20.331,-26.351 10.684,-6.365 23.675,-10.052 38.643,-10.966 l 66.41,-3.322 c 17.099,-0.85 29.038,-3.809 35.481,-8.788 6.2,-4.8 9.342,-12.864 9.342,-23.963 v -13.07 h 64.653 v 39.632 C 19.266,-31.35 12.785,-13.469 0,0"
					/>
				</g>
			</svg>
		</Container>
	);
}
