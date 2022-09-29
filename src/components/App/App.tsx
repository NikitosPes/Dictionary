import { Routes, Route } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Home from '../../pages/Home/Home';
import Edit from '../../pages/Edit/Edit';
import Game from '../../pages/Game/Game';
import Results from '../../pages/Results/Results';

import styles from './App.module.scss';


const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/edit' element={<Edit/>} />
          <Route path='/game' element={<Game/>} />
          <Route path='/results' element={<Results/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
