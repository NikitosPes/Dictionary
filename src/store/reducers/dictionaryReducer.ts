import { DictionaryAction, DictionaryActionTypes, DictionaryState } from '../types/dictionary';


const initialState: DictionaryState = {
  words: []
}

export const dictionaryReducer = (state = initialState, action: DictionaryAction): DictionaryState => {
  switch(action.type) {
    case DictionaryActionTypes.ADD_WORD: 
      return { words: [...state.words, action.payload] }
    default:
      return state;
  }
}