import { WordWithTranslation } from '../../../store/types/dictionary';

export type cardData = {
  targetWord: WordWithTranslation,
  translations: [string, string, string, string] 
}