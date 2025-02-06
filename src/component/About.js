import { ReactComponent as 졸업 } from "../image/svg/졸업1.svg";
import 사진 from "../image/사진.jpg";
import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.header}>ABOUT ME</div>
        <div className={styles.profile}>
          <div className={styles.profile_img}>
            <img src={사진} />
          </div>
          <div className={styles.profile_text}>
            <li>
              <i className="ri-user-3-line"></i>
              <p>박원우</p>
            </li>
            <li>
              <i className="ri-cake-2-line"></i>
              <p>2000.11.04</p>
            </li>
            <li>
              <i className="ri-home-4-line"></i>
              <p>서울특별시 광진구</p>
            </li>
            <li>
              <i className="ri-mail-line"></i>
              <p>gn030108@gmail.com</p>
            </li>
            <li>
              <졸업 className={styles.school} />
              <p>동양미래대학교 (정보전자공학과)</p>
            </li>
            <li className={styles.profile_last}>
              <i className="ri-github-fill"></i>
              <a href="https://github.com/gn030108">GitHub</a>
            </li>
            <li>
              <i class="ri-notion-fill"></i>
              <a href="https://www.notion.so/1702af05a7ee8059b332eec9572de198?pvs=4">
                Notion
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
