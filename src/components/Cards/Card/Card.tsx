import styles from './Card.module.scss';
import { cardData } from '../../../ts/interfaces/types/CardData';
import { WordWithTranslation } from '../../../store/types/dictionary';


interface CardPorps {
  data: cardData,
  answerClickHandler: (translation: string, word: WordWithTranslation) => void
}

const Card = ({ data, answerClickHandler }: CardPorps) => {
  return (
    <div className={styles.container}>

      <div className={styles.wordWrapper}>
        {data.targetWord.word}
      </div>


      <div className={styles.translationsContainer}>
        {
          data.translations.map((translation, index) => {
            return(
              
              <button 
                className={styles.translationContainer} 
                value={translation}
                onClick={e => answerClickHandler(e.currentTarget.value, data.targetWord)}
                key={index}
              >
                {translation}
              </button>
              
            )
          })
        }
      </div>

    </div>
    
  )
}

export default Card;