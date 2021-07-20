import {useVideoConfig} from 'remotion';

export function useSeconds(): (seconds: number) => number {
	const config = useVideoConfig();
	return (seconds) => Math.round(config.fps * seconds);
}
