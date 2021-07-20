import {useCurrentFrame} from 'remotion';

export const Logo: React.FC<{}> = () => {
	const frame = useCurrentFrame();

	const scale = frame / 4.5 >= 20 ? 0.6 : frame / 80;

	return (
		<div
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				alignContent: 'center',
				width: '100%',
				display: 'flex',
			}}
		>
			<svg
				style={{transform: 'scale(' + scale + ')', marginLeft: 75}}
				xmlns="http://www.w3.org/2000/svg"
				width="1364"
				height="1364"
				viewBox="0 0 1364 1364"
			>
				<g
					id="Group_71127"
					data-name="Group 71127"
					transform="translate(0.056 0.055)"
				>
					<rect
						id="Rectangle_1"
						data-name="Rectangle 1"
						width="1364"
						height="1364"
						transform="translate(-0.056 -0.055)"
						fill="#fff"
					/>
					<rect
						id="Rectangle_2"
						data-name="Rectangle 2"
						width="139"
						height="682"
						transform="translate(272.944 344.945)"
					/>
					<rect
						id="Rectangle_3"
						data-name="Rectangle 3"
						width="139"
						height="682"
						transform="translate(685.944 344.945)"
					/>
					<rect
						id="Rectangle_4"
						data-name="Rectangle 4"
						width="136.43"
						height="682.151"
						transform="translate(286.808 475.961) rotate(-35.905)"
					/>
					<rect
						id="Rectangle_5"
						data-name="Rectangle 5"
						width="128"
						height="680"
						transform="translate(410.944 472.945) rotate(-90)"
					/>
					<rect
						id="Rectangle_6"
						data-name="Rectangle 6"
						width="137"
						height="275"
						transform="translate(685.944 752.945) rotate(-90)"
					/>
					<rect
						id="Rectangle_7"
						data-name="Rectangle 7"
						width="151"
						height="78"
						transform="translate(624.944 1026.945)"
						fill="#fff"
					/>
				</g>
			</svg>
		</div>
	);
};
