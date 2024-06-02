import { useState } from 'react'
import styles from '../styles/Navbar.module.scss'

const Navbar = ({refs}) => {

  const [handleMenu, setHandleMenu] = useState(false)

  const scrollToSection = (sectionRef) => {
    const navbarHeight = refs.navbarRef.current.offsetHeight; // 네비게이션 바의 높이
    const sectionTop = sectionRef.current.offsetTop; // 섹션의 상단 위치
    window.scrollTo({ top: sectionTop - navbarHeight, behavior: 'smooth' });
    setHandleMenu(false)
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setHandleMenu(false)
  };

  return (
    <div className={styles.component}>
      <div className={styles.left}>
        <div>Pww's Portfolio</div>
      </div>
      <div className={styles.wide}>
        <span onClick={()=>(scrollToTop())}>Top</span>
        <span onClick={()=>(scrollToSection(refs.aboutRef))}>About</span>
        <span onClick={()=>(scrollToSection(refs.skillRef))}>Skills</span>
        <span onClick={()=>(scrollToSection(refs.projectRef))}>Project</span>
        <span onClick={()=>(scrollToSection(refs.contactRef))}>Contact</span>
      </div>
      <div className={styles.thin}>
        <i className="ri-menu-line" onClick={()=>(setHandleMenu(!handleMenu))}></i>
      </div>
      
      <div className={handleMenu? styles.side : styles.side_close}>
        <div className={styles.side_icon} onClick={()=>(setHandleMenu(!handleMenu))}>
          <i className="ri-close-fill"></i>
        </div>
        <div className={styles.side_menu}>
          <div><p onClick={()=>(scrollToTop())}>Top</p></div>
          <div><p onClick={()=>(scrollToSection(refs.aboutRef))}>About</p></div>
          <div><p onClick={()=>(scrollToSection(refs.skillRef))}>Skills</p></div>
          <div><p onClick={()=>(scrollToSection(refs.projectRef))}>Project</p></div>
          <div><p onClick={()=>(scrollToSection(refs.contactRef))}>Contact</p></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar