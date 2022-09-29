import { combineReducers } from 'redux';
import { dictionaryReducer } from './dictionaryReducer';
import { resultsReducer } from './resultsReducer';

export const rootReducer = combineReducers({
  dictionary: dictionaryReducer,
  results: resultsReducer
});

export type RootState = ReturnType<typeof rootReducer>;