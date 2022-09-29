import styles from './ResultTableItem.module.scss';
import { QuizResult } from '../../../store/types/results';


interface ResultTableItemProps {
  index: number,
  result: QuizResult
}

const ResultTableItem = ({ index, result }: ResultTableItemProps) => {

  const resultValue  = parseInt(result.resultInPercents);
  console.log()
  return (
    <tr className={`${styles.container} ${resultValue > 60 ? styles.goodResult : styles.badResult}`}>
      <th>{index}</th>
      <th>{result.resultInPercents}</th>
      <th>{result.date}</th>
    </tr>
  )
}

export default ResultTableItem;