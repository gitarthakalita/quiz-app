import React from 'react'
import { Link } from 'react-router-dom'
import styles from './landing.module.scss'

const LandingPage = () => {
  return (
    <section className={styles.container}>

      <div className={styles.wrapper}>
        <h1>React Quiz App</h1>


        <Link to="/quiz_old">
          <button>Start Quiz</button>
        </Link>
      </div>

    </section>
  )
}

export default LandingPage