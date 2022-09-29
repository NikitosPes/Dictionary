export interface WordWithTranslation {
  id: number,
  word: string,
  translation: string
}

export interface DictionaryState {
  words: WordWithTranslation[]
}

export enum DictionaryActionTypes {
  ADD_WORD = 'ADD_WORD'
}

interface AddWordAction {
  type: DictionaryActionTypes.ADD_WORD,
  payload: WordWithTranslation
}

export type DictionaryAction = AddWordAction;