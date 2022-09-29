import { Dispatch } from '@reduxjs/toolkit';

import { WordWithTranslation } from '../types/dictionary';
import { DictionaryAction, DictionaryActionTypes } from '../types/dictionary';


export const addWord = (word: WordWithTranslation) => {
  return (dispatch: Dispatch<DictionaryAction>) => {
    dispatch({ type: DictionaryActionTypes.ADD_WORD, payload: word });
  }
}