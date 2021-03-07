import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"
import styles from "../styles/components/Profile.module.css"

const Profile = () => {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img src='https://github.com/leandroluz97.png' alt='Leandro da luz' />
      <div>
        <strong>Leandro Luz</strong>
        <p>
          <img src='icons/level.svg' alt='level'></img>
          Level {level}
        </p>
      </div>
    </div>
  )
}

export default Profile
