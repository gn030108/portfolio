import { useState } from 'react'
import 숫자게임 from '../image/숫자게임.png'
import 스포티파이 from '../image/스포티파이.png'
import 루이비통 from '../image/루이비통.png'
import 당근마켓 from '../image/당근마켓.png'
import 할일앱 from '../image/할일앱.png'




import styles from '../styles/componentStyles/Project.module.scss'

const Project = () => {

  const [catchAll , setCatchAll] = useState(false)
  const [projectList,setProjectList] = useState([
    {
      open:false,
      title:'숫자 맞추기 게임',
      content:'5번 안에 랜덤한 숫자를 맞추는 간단한 숫자 게임입니다.',
      skill:'HTML5, javaScript',
      image:숫자게임,
      url:'https://pw2numbergame.netlify.app/',
      code:'https://github.com/gn030108/coding/tree/main/%EC%88%AB%EC%9E%90%20%EB%A7%9E%EC%B6%94%EA%B8%B0%20%EA%B2%8C%EC%9E%84'},
    {
      open:false,
      title:'당근마켓 클론코딩',
      content:'당근마켓 홈페이지를 클론코딩했습니다',
      skill:'HTML5, CSS3',
      image:당근마켓,
      url:'https://pw2numbergame.netlify.app/',
      code:'https://github.com/gn030108/coding/tree/main/%EC%88%AB%EC%9E%90%20%EB%A7%9E%EC%B6%94%EA%B8%B0%20%EA%B2%8C%EC%9E%84'
    },
    {
      open:false,
      title:'스포티파이 클론코딩',
      content:'스포티파이 홈페이지를 클론코딩했습니다.',
      skill:'HTML5, CSS3',
      image:스포티파이,
      url:'https://pw2numbergame.netlify.app/',
      code:'https://github.com/gn030108/coding/tree/main/%EC%88%AB%EC%9E%90%20%EB%A7%9E%EC%B6%94%EA%B8%B0%20%EA%B2%8C%EC%9E%84'
    },
    {
      open:false,
      title:'루이비통 클론코딩',
      content:'루이비통 홈페이지를 클론코딩했습니다',
      skill:'HTML5, CSS3, BootStrap',
      image:루이비통,url:'https://pw2numbergame.netlify.app/',
      code:'https://github.com/gn030108/coding/tree/main/%EC%88%AB%EC%9E%90%20%EB%A7%9E%EC%B6%94%EA%B8%B0%20%EA%B2%8C%EC%9E%84'
    },
    {
      open:false,
      title:'할일 앱',
      content:'할일을 기록하고 완료,삭제 하는 기능을 넣은 To Do List 입니다',
      skill:'HTML5, CSS3, JavaScript, BootStrap, ',
      image:할일앱,url:'https://pw2numbergame.netlify.app/',
      code:'https://github.com/gn030108/coding/tree/main/%EC%88%AB%EC%9E%90%20%EB%A7%9E%EC%B6%94%EA%B8%B0%20%EA%B2%8C%EC%9E%84'
    },
    // {open:false , title:'',content:'',image:'',url:'',code:''},
  ])

  const handleOpen = (index) => {
    setProjectList(prevList => 
      prevList.map((item, i) => 
        // 조건부 open 변경
      ({ ...item, open: i === index ? !item.open : false })
        // i === index ? { ...item, open: !item.open } : item
      )
    );
    console.log('실행')
  };

  const handleOpenAll = () =>{
    setProjectList(prevList =>
      prevList.map((item)=>
        ({...item, open: true})
      )
    )
    setCatchAll(true)
  }
  const handleCloseAll = () =>{
    setProjectList(prevList =>
      prevList.map((item)=>
        ({...item, open: false})
      )
    )
    setCatchAll(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>Project</div>
      <div className={styles.button}>
        <button onClick={catchAll ? handleCloseAll : handleOpenAll}>
          {catchAll ? 'Close All' : 'Open All'}
        </button>
      </div>
      <div className={styles.grid}>
      {projectList.map((item, index)=>(
        <div 
          className={`${styles.project_item} ${item.open === true ? styles.flipped : ''}`}
          key={index} 
          onClick={() => (handleOpen(index))}
        >

          <div className={styles.project_front} style={{backgroundImage:`url(${item.image})`}}></div> 

          <div className={styles.project_back}>
            <div>
              <div>{item.title}</div>
              <div>{item.content}</div>
              <div>{item.title}</div>
              <div>{item.title}</div>
            </div>
          </div>

        </div>
      ))}
      </div>
    </div>
  )
}

export default Project