import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import './App.css';
import GetUserForm from './pages/GetUserForm.jsx'
import ShowUserdata from './pages/ShowUserdata.jsx'
import Input from './pages/Input.jsx'
import Input_v2 from './pages/Input_v2.jsx'
import Img360 from './pages/Img360.jsx'
import I_360 from './pages/I_360.jsx'
import Image360Viewer from './pages/ProductViewer .jsx'
import Form from './pages/Form .jsx';
import ProductViewer from './pages/ProductViewer .jsx';
import Shoes1 from './images/Shoes1.png'
import Shoes2 from './images/Shoes2.png'
import Shoes3 from './images/Shoes3.png'
import { store } from './app/store.js';
// import Shoes4 from './images/Shoes4.png'

function App() {

  const [basicActive, setBasicActive] = useState('1')


  const horizontalimage = [Shoes1, Shoes2, Shoes3]; //row
  const vrimages = [Shoes1, Shoes2, Shoes3]; //col

  return (
    <>
      <div>
        <Provider store={store} >
          <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<GetUserForm />}></Route>
            <Route path="/ShowUserdata" element={<ShowUserdata />}></Route> */}
              {/* <Route path="/" element={<Input />}></Route>
            <Route path="/Input_v2" element={<Input_v2 />}></Route> */}
              {/* <Route path="/Img360" element={<Img360 />}></Route> */}
              {/* <Route path="/I_360" element={<I_360 />}></Route>
            <Route path="/" element={<ProductViewer images={horizontalimage} vrimages={vrimages} />}></Route> */}
              <Route path="/" element={<Form />}></Route>
            </Routes>
          </BrowserRouter>
        </Provider >

        {/* {
          basicActive === "2" ? <ShowUserdata handleSetactive={handleSetactive} />
            : <GetUserForm handleSetactive={handleSetactive} />
        } */}

      </div>
    </>
  );
}

export default App;
