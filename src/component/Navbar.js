


import { useState } from 'react'
import styles from '../styles/componentStyles/Navbar.module.scss'

const Navbar = () => {

  const [handleMenu, setHandleMenu] = useState(false)


  return (
    <div className={styles.component}>
      <div className={styles.left}>
        <div>Pww's Portfolio</div>
      </div>
      <div className={styles.wide}>
        <span>About</span>
        <span>Skills</span>
        <span>Project</span>
        <span>Contact</span>
      </div>
      <div className={styles.thin}>
        <i class="ri-menu-line" onClick={()=>(setHandleMenu(!handleMenu))}></i>
      </div>
      
      <div className={handleMenu? styles.side : styles.side_close}>
        <div className={styles.side_icon} onClick={()=>(setHandleMenu(!handleMenu))}>
          <i className="ri-close-fill"></i>
        </div>
        <div className={styles.side_menu}>
          <div><p>About</p></div>
          <div><p>Skills</p></div>
          <div><p>Project</p></div>
          <div><p>Contact</p></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar