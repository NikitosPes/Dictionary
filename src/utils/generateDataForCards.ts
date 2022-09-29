import { cardData } from '../ts/interfaces/types/CardData';
import { WordWithTranslation } from '../store/types/dictionary';


function getRandomArrayIndex(indexes: number[]): number {
  const randomNumber = Math.floor(Math.random() * indexes.length);
  return indexes[randomNumber];
}


function getRandomArrayIndexes(count: number, exception: number, rightBound: number): number[] {

  let indexes = Array.from(Array(rightBound).keys()).filter(el => el != exception);
  const result: number[] = [];

  while (count > 0) {
    const randomIndex = getRandomArrayIndex(indexes);
    result.push(randomIndex);
    indexes = indexes.filter(el => el != randomIndex);
    count--;
  }

  return result;
}


const shuffleArray = (arr: any[]): any[] => arr.sort(() => Math.random() - 0.5);


function generateDataForCard(words: WordWithTranslation[], word: WordWithTranslation): cardData {

  const wordIndex = words.indexOf(word);
  let translations = getRandomArrayIndexes(3, wordIndex, words.length).map(index => words[index].translation);
  translations.push(word.translation);

  translations = shuffleArray(translations);

  return { targetWord: word, translations: translations as cardData['translations']};
}


function getRandomElementsFromArray(arr: WordWithTranslation[], count: number): WordWithTranslation[] {

  const result = [];

  for(let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    result.push(arr[randomIndex]);
  } 

  return result;
}


export function generateDataForCards(words: WordWithTranslation[], count: number): cardData[] {
  return getRandomElementsFromArray(words, count)
          .map(word => generateDataForCard(words, word));
} 
