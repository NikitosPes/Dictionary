import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import * as ResultActionCreatores from '../store/action-creators/results';
import * as DictionaryActionCreators from '../store/action-creators/dictionary';


export const useDictionaryAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(DictionaryActionCreators, dispatch);
}

export const useResultsAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ResultActionCreatores, dispatch);
}