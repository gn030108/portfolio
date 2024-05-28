

import styles from '../styles/componentStyles/Skill.module.scss'

const Skill = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Skills</div>
      <div className={styles.main}>
        <ul>
          <li>
            <div className={styles.title}>HTML5</div>
            <div className={styles.bar}>
              <div style={{width:'80%'}}>
                <p>80%</p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.title}>CSS3</div>
            <div className={styles.bar}>
              <div style={{width:'80%'}}>
                <p>80%</p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.title}>JavaScript</div>
            <div className={styles.bar}>
              <div style={{width:'70%'}}>
                <p>70%</p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.title}>React</div>
            <div className={styles.bar}>
              <div style={{width:'70%'}}>
                <p>70%</p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.title}>SCSS</div>
            <div className={styles.bar}>
              <div style={{width:'75%'}}>
                <p>75%</p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.title}>BootStrap</div>
            <div className={styles.bar}>
              <div style={{width:'50%'}}>
                <p>50%</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Skill