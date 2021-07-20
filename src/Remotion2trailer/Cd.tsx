import React from 'react';
import {useCurrentFrame} from 'remotion';

export const Cd: React.FC = () => {
	const frame = useCurrentFrame();
	const rotation = frame * 5;
	return (
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="compact-disc"
			className="svg-inline--fa fa-compact-disc fa-w-16"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 496 512"
			style={{
				height: 150,
				color: '#e67e22',
				transform: `rotate(${rotation}deg)`,
			}}
		>
			<path
				fill="currentColor"
				d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM88 256H56c0-105.9 86.1-192 192-192v32c-88.2 0-160 71.8-160 160zm160 96c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"
			/>
		</svg>
	);
};
