import 카리나 from '../image/카리나.png'
import {ReactComponent as 졸업} from '../image/졸업1.svg'


import styles from '../styles/componentStyles/About.module.scss'


const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.header}>ABOUT ME</div>
        <div className={styles.profile}>
          <div className={styles.profile_img}>
            <img src={카리나}/>
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
              <졸업 style={{width:'20px',height:'20px',marginRight:'2rem',color:'#4C4C4C'}}/>
              <p>동양미래대학교 (정보전자공학과)</p>
            </li>
            <li className={styles.profile_last}>
              <i className="ri-github-fill"></i>
              <a href='https://github.com/gn030108'>GitHub</a>
            </li>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default About