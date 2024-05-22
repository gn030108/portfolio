import About from '../component/About'
import Navbar from '../component/Navbar'
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
      </main>
    </div>
  )
}

export default Home