import { ChatBubbleContainer } from "./index.element";

interface IChatBubbleProps {
  from: 1 | 2;
  text: string;
  time: string;
  liked: boolean;
}

const ChatBubble = ({ from, text, time, liked }: IChatBubbleProps) => {
  return (
    <ChatBubbleContainer
      from={from === 1 ? "me" : "partner"}
      liked={liked}
    >
      {text}
    </ChatBubbleContainer>
  );
};

export default ChatBubble;
