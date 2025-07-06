/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import PromocionesBar from './components/PromocionesBar';


function App() {

  return (
    <>
      <BrowserRouter>
        <PromocionesBar />
        <NavBar />
      </BrowserRouter>
    </>
  )
}

export default App
