import {interpolate, useCurrentFrame} from 'remotion'
import styled from 'styled-components';
import {SingleMessageApiResponse} from "./Types";
import {GiftedAvatar} from './Avatar';
// import {getMessageDuration, getOpacityForWord, LIKE_DURATION} from './math';

export const DURATION_PER_CHARACTER = 0.5

const Container = styled.div `
  font-size: 45px;
  line-height:1.3;
  margin-left:100px;
  margin-right:100px;
  font-family: Ariel, Halvetica, sans-serif;
  margin-bottom:50px;
  margin-top:50px;
`;

const Row = styled.div`
display: flex;
flex-direction: row;
`;

const Spacer = styled.div`
width:30px;
`;

const Right = styled.div`
flex:1;
`;

const MovieName = styled.div`
font-weight: bold;
font-size: 0.8em;
margin-bottom:9px;
`;

const Time = styled.div`
color: grey;
font-size: 0.8em;
margin-left: 19px;
`;
const Director = styled.div`
color: rgba(0, 0, 0, 0.2);
font-size: 0.9em;
align-items: center;
margin-top:9px;
margin-left:39px;
`;

const getOpacityForward = (words: string[], index: number, frame: number) => {
  const wordsBefore = words.slice(0, index)
  const characterCount = wordsBefore.join('').length
  const duration = characterCount + DURATION_PER_CHARACTER
  return interpolate(frame, [duration, duration + 4], [0, 1]);
};

export const Message: React.FC<{
  data : SingleMessageApiResponse;
  delay: number;
}> =({data, delay}) => {
  const frame = useCurrentFrame()
  const words = data.description.split(' ');
  
  const wordOpacity = (index: number) => getOpacityForward(words, index, frame - delay);
  
  return (
	<Container>
		<Row>
			<GiftedAvatar user={data.director} />
			<Spacer/>
			<Right>
				<Row>
					<MovieName> {data.title}</MovieName>
					<Time> 🍿 {data.release_date}</Time>
				</Row>
				<div>
					{/* {data.description} */}
					{words.map((w, i) => {
          return (
	          <span 
		style={{
            opacity: wordOpacity(i)
		}}
	          >
		{w} {' '} 
	</span>
);
        })}
				</div>
				
				<div style={{height:29}} />
				<Row>🎥 
					<Director>
						{data.director}
					</Director>
				</Row>
		
			</Right>
		</Row>
	</Container>
)
}