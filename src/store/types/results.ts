export interface QuizResult {
  date: string,
  resultInPercents: string
}

export interface ResultsState {
  results: QuizResult[]
}

export enum ResultsActionType {
  ADD_RESULT = 'ADD_RESULT'
}

interface AddResultAction {
  type: ResultsActionType.ADD_RESULT,
  payload: QuizResult
}

export type ResultsAction = AddResultAction;