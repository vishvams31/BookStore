// import logo from './images/logo.svg';
// import Sitelogo from '../public/logo192.png';
import './App.css';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
// import { globalStyles } from './Components/constants';
import {HomePage} from './Pages/HomePage';
import {Apple} from './Pages/OlRegistration';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import {NotFound} from './Pages/NotFound';
import {ThemeProvider} from '@emotion/react';
import {theme} from './styles';
import HomeIcon from '@mui/icons-material/Home';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
// import LoginProvider from './Components/Header/LoginProvider';
import LoginProvider from './Components/Header/LoginProvider';
import BookList from './Pages/BookList';
import EditBook from './Pages/Editbook';

const App = () => { 
    return ( 
    <> 
    {/* <ThemeProvider theme={theme}> */}
    <LoginProvider>
        <ToastContainer/>
        <BrowserRouter>
        <Navbar/>
            {/* <div className='nav' style={{
                display:'flex',
                alignItems: 'center'
            }}>
                <Link to='/' style={{
                    marginLeft: 5,
                    textDecoration:'none',
                    fontSize:20,
                    color:'#E76161',
                    display:'flex',
                    alignItems: 'center'
                }}>
                    <HomeIcon/>
                    Home</Link>
                <Link
                    to='/Registration'
                    style={{
                    marginLeft: 10,
                    textDecoration:'none',
                    fontSize:20,
                    color:'#E76161',
                    display:'flex',
                    alignItems: 'center'
                }}>
                    <HowToRegIcon/>
                    Registration</Link>
                <Link
                    to='/Login'
                    style={{
                    marginLeft: 10,
                    textDecoration:'none',
                    fontSize:20,
                    color:'#E76161',
                    display:'flex',
                    alignItems: 'center'
                }}>
                    <LoginIcon/>
                    Login</Link>
                <Link
                    to='/applet'
                    style={{
                    marginLeft: 12,
                    textDecoration:'none',
                    fontSize:20,
                    color:'#E76161'
                }}>
                    Applet</Link>
            </div> */}
            <Routes >
                <Route path='/' element={< HomePage />}></Route>
                <Route path='/Registration' element={< Registration />}></Route>
                <Route path='/Login' element={< Login />}></Route>
                <Route path='*' element={< NotFound />}></Route>
                <Route path='/BookList' element={<BookList/>}></Route>
                <Route path='/EditBook' element={ <EditBook />}></Route>
             

            </Routes>
            <Footer/>
          
        </BrowserRouter>
        </LoginProvider>

    {/* </ThemeProvider>  */}
    </>
  );
};
export default App;