import { useState, useEffect } from 'react';
import { WordWithTranslation } from '../../store/types/dictionary';

import Card from './Card/Card';

import styles from './Cards.module.scss';


interface CardsProps {
  data: any[] | null,
  quizLength: number,
  endCardsHandler: (countOfCorrectAnswers: number) => void
}


const Cards = ({ data, quizLength, endCardsHandler }: CardsProps) => {

  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers ] = useState<number>(0);
  
  useEffect(() => {
    console.log(data ? data.length : 'empty')
    if (currentCardIndex == quizLength) endCardsHandler(correctAnswers);
    console.log(`currentCardIndex: ${currentCardIndex} correctAnsewrs: ${correctAnswers}`)

  }, [currentCardIndex])

  const handleAnswer = (translation: string, word: WordWithTranslation) => {
    if (translation == word.translation) {
      setCorrectAnswers(prev => prev + 1)
    }
    setCurrentCardIndex(prev => prev + 1);
  }

  return (
    <>
      {
        data
          ? data[currentCardIndex] ? <Card data={data[currentCardIndex]} answerClickHandler={handleAnswer}/> : null
          : <h1>Enter at least 10 words</h1>
      }
    </>
  )
}

export default Cards;