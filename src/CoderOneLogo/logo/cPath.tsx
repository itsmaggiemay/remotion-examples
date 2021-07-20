import React from 'react';
import {useVideoConfig} from 'remotion';
import styled from 'styled-components';

interface ICPathProps {
	transformY: number;
}

const Container = styled.div`
	width: 400px;
	height: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;

export const  CPath: React.FC = (props: ICPathProps) => {
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
				<g transform="translate(1200.3398,744.9272)" id="g26">
					<path
						id="path28"
						transform="scale(2.5)"
						style={{
							fill: '#fff',
							fillOpacity: 1,
							fillRule: 'nonzero',
							stroke: 'none',
						}}
						d="m 0,0 v 61.023 c 0,45.687 -10.958,83.232 -32.572,111.582 l -0.005,0.01 c -22.55,29.544 -57.123,44.526 -102.763,44.526 -45.654,0 -80.23,-14.982 -102.765,-44.531 -21.614,-28.336 -32.575,-65.876 -32.575,-111.587 v -286.088 c 0,-45.725 10.961,-83.269 32.573,-111.581 22.525,-29.555 57.101,-44.537 102.767,-44.537 45.652,0 80.228,14.982 102.766,44.532 C -10.958,-308.31 0,-270.771 0,-225.065 v 78.604 h -64.505 v -81.001 c 0,-28.69 -5.929,-51.486 -17.623,-67.757 -10.756,-14.978 -27.899,-22.256 -52.412,-22.256 -24.515,0 -41.659,7.278 -52.417,22.261 -11.691,16.266 -17.621,39.062 -17.621,67.752 V 63.421 c 0,28.713 5.949,51.671 17.681,68.235 10.758,15.192 27.885,22.576 52.357,22.576 24.47,0 41.597,-7.384 52.354,-22.576 11.733,-16.564 17.681,-39.522 17.681,-68.235 V 0 Z"
					/>
				</g>
			</svg>
		</Container>
	);
}
