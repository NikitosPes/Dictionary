import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Cards from '../Cards/Cards';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useResultsAction } from '../../hooks/useAction';
import { generateDataForCards } from '../../utils/generateDataForCards';
import { getCurrentDate } from '../../utils/getCurrentDate';

import styles from './Quiz.module.scss';
import { cardData } from '../../ts/interfaces/types/CardData';


const Quiz = () => {

  const QUIZ_LENGTH = 10;

  const [cardsData, setCardsData] = useState<cardData[] | null>(null);

  const { words } = useTypedSelector(state => state.dictionary);

  const { addResult } = useResultsAction();
  const navigate = useNavigate();


  useEffect(() => {
    if (words.length < QUIZ_LENGTH) return;
    setCardsData(generateDataForCards(words, QUIZ_LENGTH));
  }, [])


  const correctAnswersToPercetn = (countOfCorrectAnswers: number): number => {
    return countOfCorrectAnswers / QUIZ_LENGTH;
  }

  
  const endQuizHandler = (countOfCorrectAnswers: number) => {
    const currentDate = getCurrentDate();
    const resultInPercents = `${correctAnswersToPercetn(countOfCorrectAnswers) * 100}%`;
    addResult({ date: currentDate, resultInPercents: resultInPercents });
    navigate('/results');
  }

  return (
    <>
      <Cards 
        data={cardsData} 
        quizLength={QUIZ_LENGTH} 
        endCardsHandler={endQuizHandler}
      />
    </>
  )
}

export default Quiz;