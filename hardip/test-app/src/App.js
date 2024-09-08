import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux'
import { AuthProvider } from './layout/AuthProvider.jsx';
import PrivateRoute from './layout/PrivateRoute.jsx';
import DefaultLayout from './layout/DefaultLayout.jsx';
import Create from './component/CRUD/CRUDwithApi/Create.jsx'
import FormWithValidation from './component/forms/FormWithValidation.jsx'
import Read from './component/CRUD/CRUDwithApi/Read.jsx'
import Update from './component/CRUD/CRUDwithApi/Update.jsx'
import ApiCalling from './component/apicallingtask/ApiCalling.jsx'
import UseRefHook from './component/hooks/UseRefHook.jsx'
import UseMemoHook from './component/hooks/UseMemoHook.jsx'
import UseContextHook from './component/hooks/UseContextHook.jsx'
import CrudWithLocal from './component/CRUD/crud with local/CrudWithLocal.jsx';
import ImageCursol from './component/projects/image-cursol/ImageCursol.jsx';
import FormWithYup from './component/forms/FormWithYup.jsx';
import ProSideBar from './component/sidbar/ProSideBar.jsx';
import Dashbord from './component/home/index.jsx';
import Cart from './component/e-commarce/cart/Cart.jsx';
import Products from './component/e-commarce/Products/Products.jsx';
import Timer from './component/practice/Timer.jsx';
import ProductDetailPage from './component/e-commarce/Products/ProductDetailPage.jsx';
import Login from './user-login-logout/Login.jsx';
import './App.css';
import { store } from './app/store.js';

function App() {
  return (
    <div>
      <AuthProvider>
        <Provider store={store} >
          <BrowserRouter>
            <Routes>
              <Route path="/Login" element={<Login />} />
              <Route element={<PrivateRoute />}>
                <Route element={<DefaultLayout />}>
                  <Route path="/" element={<Dashbord />} />
                  <Route path="/Products" element={<Products />} />
                  <Route path="/products/:id" element={<ProductDetailPage />} />
                  <Route path="/Cart" element={<Cart />} />
                  <Route path="/Create" element={<Create />} />
                  <Route path="/Read" element={<Read />} />
                  <Route path="/Update" element={<Update />} />
                  <Route path="/ApiCalling" element={<ApiCalling />} />
                  <Route path="/UseRefHook" element={<UseRefHook />} />
                  <Route path="/UseMemoHook" element={<UseMemoHook />} />
                  <Route path="/UseContextHook" element={<UseContextHook />} />
                  <Route path="/CrudWithLocal" element={<CrudWithLocal />} />
                  <Route path="/ImageCursol" element={<ImageCursol />} />
                  <Route path="/FormWithYup" element={<FormWithYup />} />
                  <Route path="/ProSideBar" element={<ProSideBar />} />
                  <Route path="/FormWithValidation" element={<FormWithValidation />} />
                  <Route path="/Timer" element={<Timer />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </AuthProvider>


    </div>
  );
}

export default App;
