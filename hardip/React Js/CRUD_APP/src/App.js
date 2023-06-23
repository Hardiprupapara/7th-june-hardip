import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from "./component/Create.jsx"
import Read from "./component/Read.jsx"
import Update from "./component/Update.jsx"
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Create/>}></Route>
          <Route path='/Read' element={<Read/>}></Route>
          <Route path='/Update' element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
