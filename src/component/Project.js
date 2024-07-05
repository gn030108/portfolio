import { useState } from "react";
import 숫자게임 from "../image/숫자게임.png";
import 스포티파이 from "../image/스포티파이.png";
import 루이비통 from "../image/루이비통.png";
import 당근마켓 from "../image/당근마켓.png";
import 할일앱 from "../image/할일앱.png";
import 게시판 from "../image/게시판.png";
import 옷 from "../image/Cloop.png";
import 포폴 from "../image/포폴.png";
import 뉴스 from "../image/뉴스타임즈.png";
import 가위바위보 from "../image/가위바위보.png";
import 날씨 from "../image/날씨.png";
import HnM from "../image/HnM.png";
import 넷플릭스 from "../image/넷플릭스.png";

import styles from "../styles/Project.module.scss";

const Project = () => {
  const [catchAll, setCatchAll] = useState(false);
  const [projectList, setProjectList] = useState([
    {
      open: false,
      title: "당근마켓 클론코딩",
      content: "당근마켓 홈페이지를 클론코딩했습니다.",
      skill: "HTML5, CSS3",
      image: 당근마켓,
      site: "https://carrotmarketclone.netlify.app",
      code: "https://github.com/gn030108/CarrotMarketClone",
    },
    {
      open: false,
      title: "스포티파이 클론코딩",
      content: "스포티파이 홈페이지를 클론코딩했습니다.",
      skill: "HTML5, CSS3",
      image: 스포티파이,
      site: "https://pwwspotifyclone.netlify.app",
      code: "https://github.com/gn030108/SpotifyClone",
    },
    {
      open: false,
      title: "루이비통 클론코딩",
      content: "루이비통 홈페이지를 클론코딩했습니다.",
      skill: "HTML5, CSS3, BootStrap",
      image: 루이비통,
      site: "https://louisvuittonclone.netlify.app",
      code: "https://github.com/gn030108/LouisVuittonClone",
    },
    {
      open: false,
      title: "숫자 맞추기 게임",
      content: "5번 안에 랜덤한 숫자를 맞추는 간단한 숫자 게임입니다.",
      skill: "HTML5, javaScript",
      image: 숫자게임,
      site: "https://pw2numbergame.netlify.app/",
      code: "https://github.com/gn030108/NumberGame",
    },
    {
      open: false,
      title: "할일 앱",
      content: "할일을 기록하고 완료,삭제 하는 기능을 넣은 To Do List 입니다",
      skill: "HTML5, CSS3, JavaScript, BootStrap, ",
      image: 할일앱,
      site: "https://pwwtodoapp.netlify.app",
      code: "https://github.com/gn030108/ToDoApp",
    },
    {
      open: false,
      title: "뉴스타임즈",
      content:
        "News API를 이용하여 만든 웹사이트 입니다. [무료 Api Key를 사용하여 localhost에서만 작동합니다.]",
      skill: "HTML5, CSS3, JavaScript, BootStrap, API, Pagination",
      image: 뉴스,
      site: "https://pwwnewstimes.netlify.app",
      code: "https://github.com/gn030108/newstimes",
    },
    {
      open: false,
      title: "가위바위보 게임",
      content: "컴퓨터와 가위바위보를 하는 간단한 게임입니다.",
      skill: "javaScript, React",
      image: 가위바위보,
      site: "https://pwwrsp-game.netlify.app/",
      code: "https://github.com/gn030108/RSP-Game",
    }, //사이트랑 코드주소 수정
    {
      open: false,
      title: "게시판",
      content:
        "글을 올릴수 있게 만든 게시판 사이트 입니다. [백엔드서버와의 연결은 로컬에서만 가능합니다.]",
      skill: "javaScript, React, redux, scss, axios, Pagination",
      image: 게시판,
      site: "https://pwwnoticeboard.netlify.app",
      code: "https://github.com/gn030108/NoticeBoard",
    }, //사이트랑 코드주소 수정
    {
      open: false,
      title: "날씨 앱",
      content: "현제 위치 및 3개의 지정한 도시의 날씨를 알려주는 앱입니다.",
      skill: "javaScript, React, BootStrap, API",
      image: 날씨,
      site: "https://pwwweather-app.netlify.app",
      code: "https://github.com/gn030108/weather-app",
    },
    {
      open: false,
      title: "H&M",
      content:
        "H&M 홈페이지를 클론코딩한 사이트 입니다. json서버를 이용하여 이미지와 가격등을 가져왔습니다.",
      skill: "javaScript, React, BootStrap, API, json.server",
      image: HnM,
      site: "https://pwwhnm-mall.netlify.app",
      code: "https://github.com/gn030108/H-M-mall",
    },
    {
      open: false,
      title: "Netflix",
      content:
        "Tmdb Api를 이용하여 만든 영화 소개 사이트입니다. 영화를 검색, 리뷰, 예고편등을 볼 수 있습니다.",
      skill:
        "javaScript, React, BootStrap,  Scss, React Hook, Router, Axios, Redux,Pagination",
      image: 넷플릭스,
      site: "https://movie-pww.netlify.app",
      code: "https://github.com/gn030108/Netflix",
    },
    {
      open: false,
      title: "Cloop, 옷가게",
      content:
        "옷을 판매하고 살 수 있게 만든 옷가게 사이트 입니다. 판매자와 일반회원으로 나눠서 로그인 후 이용 할 수 있습니다.",
      skill:
        "javaScript, React, Scss, React Hook, Router, Axios, Redux,Pagination",
      image: 옷,
      site: "https://cloop.netlify.app",
      code: "https://github.com/gn030108/website",
    },
    {
      open: false,
      title: "portfolio",
      content: "포트폴리오 사이트 입니다.",
      skill: "javaScript, React, scss, Grid",
      image: 포폴,
      site: "https://pwwportfolio.netlify.app",
      code: "https://github.com/gn030108/portfolio",
    },
    // {open:false , title:'',content:'',image:'',url:'',code:''},
  ]);

  const handleOpen = (index) => {
    setProjectList((prevList) =>
      prevList.map(
        (item, i) =>
          // 조건부 open 변경
          ({ ...item, open: i === index ? !item.open : false })
        // i === index ? { ...item, open: !item.open } : item
      )
    );
    console.log("실행");
  };

  const handleOpenAll = () => {
    setProjectList((prevList) =>
      prevList.map((item) => ({ ...item, open: true }))
    );
    setCatchAll(true);
  };
  const handleCloseAll = () => {
    setProjectList((prevList) =>
      prevList.map((item) => ({ ...item, open: false }))
    );
    setCatchAll(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>Project</div>
      <div className={styles.button}>
        <button onClick={catchAll ? handleCloseAll : handleOpenAll}>
          {catchAll ? "Close All" : "Open All"}
        </button>
      </div>
      <div className={styles.grid}>
        {projectList.map((item, index) => (
          <div
            className={`${styles.project_item} ${
              item.open === true ? styles.flipped : ""
            }`}
            key={index}
            onClick={() => handleOpen(index)}
          >
            <div
              className={styles.project_front}
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            <div className={styles.project_back}>
              <div className={styles.project_back_div}>
                <div className={styles.project_back_title}>
                  <div>{item.title}</div>
                </div>
                <div className={styles.project_back_content}>
                  <div>description</div>
                  <div>{item.content}</div>
                </div>
                <div className={styles.project_back_skill}>
                  <div>Skill</div>
                  <div>{item.skill}</div>
                </div>
                <div className={styles.project_back_btn}>
                  <a href={item.code}>
                    <button>Code</button>
                  </a>
                  <a href={item.site}>
                    <button>Site</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
