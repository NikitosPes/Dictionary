import { ResultsState, ResultsAction, ResultsActionType} from '../types/results';


const initialState: ResultsState = {
  results: []
}

export const resultsReducer = (state = initialState, action: ResultsAction): ResultsState => {
  switch(action.type) {
    case ResultsActionType.ADD_RESULT:
      return { results: [...state.results, action.payload] }
    default:
      return state;
  }
}