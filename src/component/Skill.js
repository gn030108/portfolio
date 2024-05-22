

import styles from '../styles/componentStyles/Skill.module.scss'

const Skill = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Skills</div>
      <div className={styles.main}>
        <ul>
          <li>
            <div className={styles.title}>HTML</div>
            <div className={styles.bar}>
              <div style={{width:'80%'}}>
                <p>80%</p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.title}>CSS</div>
            <div className={styles.bar}>
              <div style={{width:'80%'}}>
                <p>80%</p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.title}>JAVASCRIPT</div>
            <div className={styles.bar}>
              <div style={{width:'70%'}}>
                <p>70%</p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.title}>REACT</div>
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
            <div className={styles.title}>BOOTSTRAP</div>
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