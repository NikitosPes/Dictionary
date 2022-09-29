import { Link } from 'react-router-dom';

import styles from './Header.module.scss';


const Header = () => {
  return (
    <>
      <div className={styles.linksContainer}>
        <Link className={styles.link} to="/">Home</Link>
        <Link className={styles.link} to="/edit">Edit</Link>
        <Link className={styles.link} to="/game">Game</Link>
        <Link className={styles.link} to="/results">Results</Link>
      </div>
    </>
  )
}

export default Header;