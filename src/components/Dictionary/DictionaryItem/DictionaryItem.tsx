import styles from './DictionaryItem.module.scss';
import { WordWithTranslation } from '../../../store/types/dictionary';


interface DictionaryProps {
  index: number,
  word: WordWithTranslation
}

const DictionaryItem = ({ index, word }: DictionaryProps) => {
  return (
    <tr className={styles.dictionaryItem}>
      <th>{index}.</th>
      <th>{word.word}</th>
      <th> {word.translation} </th>
    </tr>
  )
}

export default DictionaryItem;