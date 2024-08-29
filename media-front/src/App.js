
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css';
import Landing from './Pages/Landing';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Watchhistory from './Pages/Watchhistory';


function App() {
  return (
    <>
       <Header/> 

          <div className='container m-5'>

            <Routes>
                <Route path='/' element={<Landing/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/watchhistory' element={<Watchhistory/>} />


            </Routes>

            

          </div>

       <Footer/> 
    </>
  );
}


export default App;
