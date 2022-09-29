import ResultTable from '../../components/ResultsTable/ResultTable';

import { useTypedSelector } from '../../hooks/useTypedSelector';

import styles from './Results.module.scss';


const Results = () => {

  const { results } = useTypedSelector(state => state.results);

  return (
    <div>
      {
        results.length > 0 ? <ResultTable results={results}/> : <h1>No results yet</h1>
      }
    </div>
  )
}

export default Results;