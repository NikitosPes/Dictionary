import DictionaryItem from './DictionaryItem/DictionaryItem';

import styles from './Dictionary.module.scss';
import { WordWithTranslation } from '../../store/types/dictionary';


interface DictionaryProps {
  words: WordWithTranslation[]
}

const Dictionary = ({ words }: DictionaryProps) => {
  return (
    <table className={styles.dictionary} align="center">

      <thead className={styles.lableRow}>
        <tr>
          <th>№</th>
          <th>Word</th>
          <th>Translation</th>
        </tr>
      </thead>
      

      <tbody>
        {
          words.map((word, index) => {
            return <DictionaryItem index={index + 1} word={word} key={word.id}/>
          })
        }
      </tbody>
    
    </table>
  )
}

export default Dictionary;