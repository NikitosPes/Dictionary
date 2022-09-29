import { Dispatch } from '@reduxjs/toolkit';

import { QuizResult } from '../types/results';
import { ResultsAction, ResultsActionType } from '../types/results';


export const addResult = (resultInPercent: QuizResult) => {
  return (dispatch: Dispatch<ResultsAction>) => {
    dispatch({ type: ResultsActionType.ADD_RESULT, payload: resultInPercent });
  }
}