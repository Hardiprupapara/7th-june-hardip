import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home.jsx'
import SignUppage from './component/SignUppage';
import LoginPage from './component/LoginPage';
import ApiWithLogin from './component/LoginWithApi/ApiWithLogin';
import RegisterPage from './component/LoginWithApi/RegisterPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/SignUppage' element={<SignUppage/>}></Route>
          <Route path='/LoginPage' element={<LoginPage/>}></Route>
          <Route path='/RegisterPage' element={<RegisterPage/>}></Route>
          <Route path='/ApiWithLogin' element={<ApiWithLogin/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
