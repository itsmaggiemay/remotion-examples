import React from 'react';
import styled from 'styled-components';
import {ReactLogo} from './Icon';

const Container = styled.div`
	width: 300px;
	height: 300px;
	background-color: white;
	border-radius: 40px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
	overflow: hidden;
	display: flex;
	flex-direction: column;
`;

const TitleBar = styled.div`
	height: 90px;
	background-color: #ff5420;
	font-size: 50px;
	text-align: center;
	color: white;
	font-weight: bold;
	font-family: Arial;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const DateContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 8em;
	font-family: Arial;
	font-weight: bold;
`;

export const Calendar: React.FC<{
	day: string;
	offset: number;
	isReactWednesday: boolean;
}> = ({day, offset, isReactWednesday}) => {
	return (
		<Container>
			<TitleBar>{day}</TitleBar>
			{isReactWednesday ? (
				<DateContainer>
					<ReactLogo />
				</DateContainer>
			) : (
				<DateContainer>{new Date().getDate() - offset}</DateContainer>
			)}
		</Container>
	);
};
