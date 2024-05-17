import About from '../component/About'
import Navbar from '../component/Navbar'
import Top from '../component/Top'



import styles from '../styles/pageStyles/Home.module.scss'

const Home = () => {
  return (
    <div>
      <headers><Navbar/></headers>
      <main>
        <Top/>
        <About/>
      </main>
    </div>
  )
}

export default Home