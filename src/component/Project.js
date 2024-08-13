import { useState } from "react";
import 스포티파이 from "../image/스포티파이.png";
import 루이비통 from "../image/루이비통.png";
import 할일앱 from "../image/할일앱.png";
import 옷 from "../image/Cloop.png";
import 포폴 from "../image/포폴.png";
import 뉴스 from "../image/뉴스타임즈.png";
import HnM from "../image/HnM.png";
import 넷플릭스 from "../image/넷플릭스.png";
import styles from "../styles/Project.module.scss";

const Project = () => {
  const [catchAll, setCatchAll] = useState(false);
  const [projectList, setProjectList] = useState([
    {
      open: false,
      title: "portfolio",
      content: "포트폴리오 사이트 입니다.",
      skill: "javaScript, React, scss, Grid",
      image: 포폴,
      site: "https://pwwportfolio.netlify.app",
      code: "https://github.com/gn030108/portfolio",
    },
    {
      open: false,
      title: "Netflix",
      content:
        "Tmdb Api를 이용해 만든 영화 소개 사이트입니다. 영화를 검색, 리뷰, 예고편등을 볼 수 있습니다.",
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
        "옷을 사고 팔 수 있게 만든 옷가게 사이트 입니다. 판매자와 일반회원으로 나눠서 로그인 후 이용 할 수 있습니다.",
      skill:
        "javaScript, React, Scss, React Hook, Router, Axios, Redux,Pagination",
      image: 옷,
      site: "https://cloop.netlify.app",
      code: "https://github.com/gn030108/website",
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
      title: "할일 앱",
      content: "할일을 기록하고 완료,삭제 하는 기능을 넣은 To Do List 입니다",
      skill: "HTML5, CSS3, JavaScript, BootStrap, ",
      image: 할일앱,
      site: "https://pwwtodoapp.netlify.app",
      code: "https://github.com/gn030108/ToDoApp",
    },
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
