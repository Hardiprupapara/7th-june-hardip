import './App.css';
import EmpList from './EmpList';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>React js crud operation</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpList></EmpList>}></Route>
          <Route path='/EmpCreate' element={<EmpCreate />}></Route>
          <Route path='/EmpEdit/:empid' element={<EmpEdit />}></Route>
          <Route path='/EmpDetail/:empid' element={<EmpDetail />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <EmpList></EmpList> */}

    </div>
  );
}

export default App;


// npm install -g json-server
// json-server --watch debugger.json --port 8000