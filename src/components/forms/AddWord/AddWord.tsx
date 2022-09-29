import { useState } from 'react';

import { useDictionaryAction } from '../../../hooks/useAction';

import styles from './AddWord.module.scss';


const AddWord = () => {

  const [word, setWord] = useState<string>('');
  const [translation, setTranslation] = useState<string>('');

  const { addWord } = useDictionaryAction();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    addWord({ id: Date.now(), word: word, translation: translation });
  }

  return (
    <form className={styles.addWordForm} onSubmit={submitHandler}>

      <div className={styles.inputsContainer}>

        <div className={styles.inputWrapper}>
          <label className={styles.inputLabel}>Word</label>
          <input
            className={styles.input} 
            type="text"
            name="word" 
            onChange={e => setWord(e.target.value)}
            value={word}
          />
        </div>  
        
        
        <div className={styles.inputWrapper}>
          <label className={styles.inputLabel}>Translation</label>
          <input 
            className={styles.input} 
            type="text"
            name="translation"
            onChange={e => setTranslation(e.target.value)}
            value={translation} 
          />
        </div>

      </div>


      <input className={styles.submitButton} type="submit" value="Add word" />

    </form>
  )
}

export default AddWord;