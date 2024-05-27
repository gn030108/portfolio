import { useState } from 'react'
import 숫자게임 from '../image/숫자게임.png'


import styles from '../styles/componentStyles/Project.module.scss'

const Project = () => {

  const [projectList,setProjectList] = useState([
    {open:false ,title:'숫자 맞추기 게임',content:'html,javaScript를 처음으로 사용해서 만든 간단한 숫자 게임입니다.',image:숫자게임,url:'https://pw2numbergame.netlify.app/',code:'https://github.com/gn030108/coding/tree/main/%EC%88%AB%EC%9E%90%20%EB%A7%9E%EC%B6%94%EA%B8%B0%20%EA%B2%8C%EC%9E%84'},
    {open:false ,title:'숫자 맞추기 게임',content:'html,javaScript를 처음으로 사용해서 만든 간단한 숫자 게임입니다.',image:숫자게임,url:'https://pw2numbergame.netlify.app/',code:'https://github.com/gn030108/coding/tree/main/%EC%88%AB%EC%9E%90%20%EB%A7%9E%EC%B6%94%EA%B8%B0%20%EA%B2%8C%EC%9E%84'},
    {open:false ,title:'숫자 맞추기 게임',content:'html,javaScript를 처음으로 사용해서 만든 간단한 숫자 게임입니다.',image:숫자게임,url:'https://pw2numbergame.netlify.app/',code:'https://github.com/gn030108/coding/tree/main/%EC%88%AB%EC%9E%90%20%EB%A7%9E%EC%B6%94%EA%B8%B0%20%EA%B2%8C%EC%9E%84'},
    {open:false ,title:'숫자 맞추기 게임',content:'html,javaScript를 처음으로 사용해서 만든 간단한 숫자 게임입니다.',image:숫자게임,url:'https://pw2numbergame.netlify.app/',code:'https://github.com/gn030108/coding/tree/main/%EC%88%AB%EC%9E%90%20%EB%A7%9E%EC%B6%94%EA%B8%B0%20%EA%B2%8C%EC%9E%84'},
    {open:false ,title:'숫자 맞추기 게임',content:'html,javaScript를 처음으로 사용해서 만든 간단한 숫자 게임입니다.',image:숫자게임,url:'https://pw2numbergame.netlify.app/',code:'https://github.com/gn030108/coding/tree/main/%EC%88%AB%EC%9E%90%20%EB%A7%9E%EC%B6%94%EA%B8%B0%20%EA%B2%8C%EC%9E%84'},
    {open:false ,title:'숫자 맞추기 게임',content:'html,javaScript를 처음으로 사용해서 만든 간단한 숫자 게임입니다.',image:숫자게임,url:'https://pw2numbergame.netlify.app/',code:'https://github.com/gn030108/coding/tree/main/%EC%88%AB%EC%9E%90%20%EB%A7%9E%EC%B6%94%EA%B8%B0%20%EA%B2%8C%EC%9E%84'},
      
    
    // {open:false , title:'',content:'',image:'',url:'',code:''},
  ])

  const handleOpen = (index) => {
    setProjectList(prevList => 
      prevList.map((item, i) => 
        // 조건부 open 변경
        i === index ? { ...item, open: !item.open } : item
      )
    );
    console.log('실행')
  };

  return (
    <div className={styles.container}>
      {projectList.map((item, index)=>(
        <div 
        className={`${styles.project_box} ${item.open === true ? styles.flipped : ''}`}
        key={index} 
        onMouseUp={() => handleOpen(index)}
        >
          <div className={styles.project_front} style={{backgroundImage:`url(${item.image})`}}></div> 
          <div className={styles.project_back}>
            <div>
              {item.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Project
