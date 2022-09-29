import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';


const Layout = () => {
  return (
    <>
      <header style={{'height': '10%'}}>
        <Header />
      </header>
      
      <main style={{'height': '90%'}}>
        <Outlet />
      </main>
    </>
  )
}

export default Layout;