import { useEffect, useState } from "react";

const TypingText = ({ text = "", speed = 100, reverseSpeed = 700, fontSize = '1em', color = 'black' , fontWeight='500' }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [count, setCount] = useState(0);
  const [reverse, setReverse] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      if (reverse === 1) {
        // 정방향 타이핑
        if (count < text.length) {
          setDisplayedText((prevText) => prevText + text[count]);
          setCount((prevCount) => prevCount + 1);
        } else {
          setReverse(-1); // 역방향으로 변경
        }
      } else {
        // 역방향 타이핑
        if (count > 0) {
          setDisplayedText((prevText) => prevText.slice(0, -1)); // 마지막 글자 제거
          setCount((prevCount) => prevCount - 1);
        } else {
          setReverse(1); // 다시 정방향으로 변경
        }
      }
    }, reverse === 1 ? speed : reverseSpeed);

      return () => {
        clearInterval(interval);
      };
    });

  return (
    <p style={{ fontSize, color,fontWeight }}>
      {displayedText}
    </p>
  );
};

export default TypingText;