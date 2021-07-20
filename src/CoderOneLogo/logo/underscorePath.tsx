import React from 'react';
import {useVideoConfig} from 'remotion';
import styled from 'styled-components';

interface IUnderscorePathProps {
	transformX: number;
	transformY: number;
	width: number;
}

const SvgWrapper = styled.svg`
	position: absolute;
`;

export function UnderscorePath(props: IUnderscorePathProps) {
	const {transformX, transformY, width} = props;

	const config = useVideoConfig();

	return (
		<SvgWrapper
			viewBox={`0 0 ${config.width} ${config.height}`}
			width="auto"
			height="auto"
			transform={`translate(${transformX}, ${transformY})`}
		>
			<g id="g10">
				<path
					id="path28"
					transform="scale(2.0)"
					style={{
						fill: '#fff',
						fillOpacity: 1,
						fillRule: 'nonzero',
						stroke: 'none',
					}}
					d={`m 464.206,251.535 h ${width} v 64.653 H 464.206 Z`}
				/>
			</g>
		</SvgWrapper>
	);
}
