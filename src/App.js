import logo from './images/logo.svg';
// import Sitelogo from '../public/logo192.png';
import './App.css';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
// import { globalStyles } from './Components/constants';
import {HomePage} from './Pages/HomePage';
import {Apple} from './Pages/Login';
import {Login} from './Pages/Login';
import {NotFound} from './Pages/NotFound';
import {ThemeProvider} from '@emotion/react';
import {theme} from './styles';
const App = () => {
    return ( 
    <> 
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <div className='nav'>
                <Link to='/' style={{
                    marginLeft: 5,
                    textDecoration:'none',
                    fontSize:20
                }}>
                    Home</Link>
                <Link
                    to='/Login'
                    style={{
                    marginLeft: 10,
                    textDecoration:'none',
                    fontSize:20
                }}>
                    Login</Link>
                <Link
                    to='/applet'
                    style={{
                    marginLeft: 15,
                    textDecoration:'none',
                    fontSize:20
                }}>
                    Applet</Link>
            </div>
            <Routes >
                <Route path='/' element={< HomePage />}></Route>
                <Route path='/Login' element={< Login />}></Route>
                <Route path='*' element={< NotFound />}></Route>
            </Routes>
        </BrowserRouter>

    </ThemeProvider> 
    </>
  );
};
export default App;