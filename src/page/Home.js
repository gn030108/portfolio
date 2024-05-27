import About from '../component/About'
import Navbar from '../component/Navbar'
import Project from '../component/Project'
import Skill from '../component/Skill'
import Top from '../component/Top'



import styles from '../styles/pageStyles/Home.module.scss'

const Home = () => {
  return (
    <div>
      <header><Navbar/></header>
      <main>
        <Top/>
        <About/>
        <Skill/>
        <Project/>
      </main>
    </div>
  )
}

export default Home