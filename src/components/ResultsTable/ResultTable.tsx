import ResultTableItem from './ResultTableItem/ResultTableItem';

import styles from './ResultTable.module.scss';
import { QuizResult } from '../../store/types/results';


interface ResultsTableProps {
  results: QuizResult[]
}

const ResultTable = ({ results }: ResultsTableProps) => {
  return (
    <table className={styles.resultTable} align="center">
      
      <thead>
        <tr>
          <th>№</th>
          <th>Result</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
        {
          results.map((result, index) => {
            return <ResultTableItem index={index + 1} result={result} key={Date.now() + index}/>
          })
        }
      </tbody>
      
    </table>
  )
}

export default ResultTable;