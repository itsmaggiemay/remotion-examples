import React, {useCallback, useRef, useState} from 'react';
import {Canvas, MeshProps} from 'react-three-fiber';
import {
	continueRender,
	delayRender,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import type {Mesh} from 'three';
import '../index.css';

const Box: React.FC<
	MeshProps & {
		frame: number;
	}
> = (props) => {
	// This reference will give us direct access to the mesh
	const mesh = useRef<Mesh>();

	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);

	if (mesh.current) {
		mesh.current.rotation.x = props.frame * 0.02;
	}

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
			onClick={(event) => setActive(!active)}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}
		>
			<boxBufferGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	);
};

type Props = Record<string, never>;

export default (() => {
	const [handle] = useState(() => delayRender());
	const config = useVideoConfig();
	const frame = useCurrentFrame();

	const onLoad = useCallback(() => {
		continueRender(handle);
	}, []);

	return (
		<Canvas
			style={{width: config.width, height: config.height}}
			onCreated={onLoad}
		>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Box position={[-1.2, 0, 0]} frame={frame} />
			<Box position={[1.2, 0, 0]} frame={frame} />
		</Canvas>
	);
}) as React.FC<Props>;
