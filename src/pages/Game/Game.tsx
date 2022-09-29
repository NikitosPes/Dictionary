import React from 'react';
import Quiz from '../../components/Quiz/Quiz';

import styles from './Game.module.scss';

const Game = () => {
  return (
    <div className={styles.gamePage}>
      <Quiz />
    </div>
  )
}

export default Game;