import React from 'react';
import Dictionary from '../../components/Dictionary/Dictionary';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import styles from './Home.module.scss';

const Home = () => {

  const { words } = useTypedSelector(state => state.dictionary);

  return(
    <div className={styles.homePage}>
      <Dictionary words={words}/>
    </div>
  )
}

export default Home;
