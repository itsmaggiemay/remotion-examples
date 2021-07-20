import {useCurrentFrame} from 'remotion'
import {spring} from 'remotion'
import {useState} from 'react'
import {useEffect} from 'react'
import {useCallback} from 'react'
import { AbsoluteFill, continueRender, delayRender, interpolate, useVideoConfig } from "remotion"
import { Background } from "./Background"
import { SingleMessageApiResponse } from './Types'
import { DURATION_PER_CHARACTER, Message} from './Message';
import { reduceEachTrailingCommentRange } from 'typescript'
import { animation } from 'polished'


export const Stories:React.FC<{
  messageIds : string[];
}> = ({messageIds}) => {
  const [handle] = useState(() => delayRender()); 
  const {fps, durationInFrames} = useVideoConfig();
	const frame = useCurrentFrame();
  const [messages, setMessages] = useState<SingleMessageApiResponse[] | null >(
    null
    );
  const fetchMessages = useCallback(async () => {
      const fetchedMessages = await Promise.all(
        messageIds.map(async(m) => {
        const response = await fetch(
          `https://ghibliapi.herokuapp.com/films/${m}`
        );
        const json = await response.json();
        return json as SingleMessageApiResponse;
        
      })
     );
     setMessages(fetchedMessages);
     continueRender(handle);
     
    },[handle, messageIds],);

    useEffect(() => {
      fetchMessages();
    }, [fetchMessages])
  
    if (!messages) {
      return null;
    }

const messagesDurations = messages.map(m => {
  return m.description.length * DURATION_PER_CHARACTER + fps
})

  const outTrasition = spring ({
    frame: frame - durationInFrames + 15,
    fps,
    config:{
      damping: 100,
    },
  })

  const outTranslateY = interpolate(outTrasition, [0, 1], [0, 20]);

  
    // console.log(messages);
  
    return (
	<AbsoluteFill>
		<Background />
		<AbsoluteFill style={{ 
      justifyContent: 'center',
      opacity: interpolate(outTrasition,[0, 1], [1, 0]),
      transform: `translateY(${outTranslateY}px)`,
		}}
		>
			{messages.map((m, i) => {
      const delay = messagesDurations
      .slice(0, i)
      .reduce((a, b) => a+ b, 0);
      
      const animation = spring({
        frame: frame - delay,
        fps,
        config: {
          damping: 200,
        },
      });
      
      const outTranslateY = interpolate(animation, [0, 1], [50, 0]);
      
      return (
	      <div 
		style={{ 
          opacity: animation, 
          transform: `translateY(${outTranslateY}px)`,
		}}
	      >
		          <Message key={m.id} delay={delay} data={m} />
	      </div>
        
      );
    })}
		</AbsoluteFill>
	</AbsoluteFill>
	
)
}