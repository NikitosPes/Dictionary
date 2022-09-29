import React from 'react';

import AddWord from '../../components/forms/AddWord/AddWord';

import styles from './Edit.module.scss';


const Edit = () => {
  return (
    <div className={styles.editPage}>
      <AddWord />
    </div>
  )
}

export default Edit;