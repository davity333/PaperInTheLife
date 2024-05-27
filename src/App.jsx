import React from 'react';
import './App.css'

import Header from './Components/organismos/Header';
import Introduction from './Components/organismos/Introduction';
import FotosPersonal from './Components/organismos/FotosPersonal';
import Friends from './Components/organismos/Friends';
import FotosTexas from './Components/organismos/FotosTexas';
import Shope from './Components/organismos/Shope';
import Ig from './Components/organismos/Ig';


function App() {
  return (
    <>
    <Header></Header>
    <Introduction></Introduction>
    <FotosPersonal></FotosPersonal>
    <Friends></Friends>
    <FotosTexas></FotosTexas>
    <Shope></Shope>
    <Ig></Ig>
    </>
  )
  
}
export default App;
