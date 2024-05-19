import styles from '../styles/componentStyles/Top.module.scss'
import TypingText from './TypingText'

const Top = () => {
  return (
    <div className={styles.container}>
      <TypingText
        text=' 안녕하세요? Frontend 개발자 박원우입니다.'
        speed={200}
        reverseSpeed={100}
        fontSize='1.6rem'
      />
      <div className={styles.box}>
        <p>전자기기가 좋아 들어간 정보전자공학과에서 코딩이라는걸 처음알고,</p>
        <p> 웹개발을 시작하며 프론트엔드 개발자를 꿈꾸게 되었습니다.</p>
        <p>계속해서 발전해 나가는 개발자가 되고싶습니다</p>
      </div>
      <div></div>
    </div>
  )
}

export default Top