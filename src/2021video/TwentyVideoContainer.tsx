import { Composition, getInputProps } from 'remotion'


import { VideoSeqs } from './VideoSeqs';
import { SessionInfo } from './Layers/SessionInfo';
import { Speakers } from './Layers/Speakers';
import { VideoLayer } from './Layers/VideoLayer';
import { Sponsors } from './Layers/Sponsors';


export const TwentyVideoContainer: React.FC = () => {
	// 2021Video
	const defaultSessionTitle = "Big Buck Bunny";
	const defaultVideoPath = "https://dl8.webmfiles.org/big-buck-bunny_trailer.webm"
	const defaultProfilePath = "https://upload.wikimedia.org/wikipedia/commons/c/c5/Big_buck_bunny_poster_big.jpg"
	const defaultSpeakersData = [
		{
			"name": "Bunny",
			"bio": "Big Buck Bunny",
			"photoPath": defaultProfilePath
		},
		{
			"name": "Rodents",
			"bio": "Three Villains",
			"photoPath": defaultProfilePath
		}
	];
	const defaultSponsorData = [
		{
			"class": "Diamond", "logos": [
				"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
			]
		},
		{
			"class": "Gold", "logos": [
				"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
				"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
				"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
			]
		},
		{
			"class": "Silver", "logos": [
				"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
				"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
				"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
				"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
				"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
				"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
			]
		},
		{
			"class": "Video Recording/Internalization support", "logos": [
				"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
				"https://raw.githubusercontent.com/ubucon-asia/2021/main/content/hosts/ubuntu-kr/logo.png",
			]
		}
	]

	const inputProps = getInputProps()

	return (
		<>
			<Composition
				id="2021Video-VideoSeqs"
				component={VideoSeqs}
				durationInFrames={200 + ((inputProps?.duration ?? 20) * 30)}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					videoPath: defaultVideoPath,
					sessionTitle: defaultSessionTitle,
					speakers: defaultSpeakersData,
					sponsorsData: defaultSponsorData
				}}
			/>
			<Composition
				id="2021Video-SessionInfo"
				component={SessionInfo}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					sessionTitle: defaultSessionTitle
				}}
			/>
			<Composition
				id="2021Video-Speakers"
				component={Speakers}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					speakers: defaultSpeakersData
				}}
			/>
			<Composition
				id="2021Video-SponsorsDiaAndGold"
				component={Sponsors}
				durationInFrames={50}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					sponsorsData: [
						defaultSponsorData[0],
						defaultSponsorData[1]
					]
				}}
			/>
			<Composition
				id="2021Video-SponsorsSilverAndOthers"
				component={Sponsors}
				durationInFrames={50}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					sponsorsData: [
						defaultSponsorData[2],
						defaultSponsorData[3]
					]
				}}
			/>
			<Composition
				id="2021Video-VideoLayer"
				component={VideoLayer}
				fps={30}
				durationInFrames={(inputProps?.duration ?? 20) * 30}
				width={1920}
				height={1080}
				defaultProps={{
					videoPath: defaultVideoPath,
					transitionStart: 200
				}}
			/>
		</>
	);
};
