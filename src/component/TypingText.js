import { useEffect, useState } from "react";

const TypingText = ({ text = "", speed = 100, reverseSpeed = 200, fontSize = '1em', color = 'black' , fontWeight='500' }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [count, setCount] = useState(0);
  const [reverse, setReverse] = useState(1)

  useEffect(() => {
      const interval = setInterval(() => {
        setDisplayedText((prevText)=>{
          //이전의 글이 없는 경우 처음부터 시작  or 이전의 글이 있는경우 이전 텍스트 + 현재의 글자 
          let view = prevText ? prevText + text[count] : text[0]; 
          setCount(count+1);
          //count가 글자를 넘어가거나 같아지는 경우 처음으로 돌려서 무한반복실행
          if (count >= text.length) {
            setCount(0)
            setDisplayedText("")
          }

          return view;
        });
      }, speed);

      return () => {
        clearInterval(interval);
      };
    });;

  return (
    <p style={{ fontSize, color,fontWeight }}>
      {displayedText}
    </p>
  );
};

export default TypingText;