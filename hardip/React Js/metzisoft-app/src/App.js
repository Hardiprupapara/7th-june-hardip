import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/Layout/AuthContext.js';
// import PrivateRoute from './components/Layout/PrivateRoute.jsx';
import './App.css';
const PrivateRoute = lazy(() => import("./components/Layout/PrivateRoute.jsx"));
const DefaultLayout = lazy(() => import("./components/Layout/DefaultLayout"));
const UserList = lazy(() => import("./components/user/UserList.jsx"));
const AddUser = lazy(() => import("./components/user/AddUser.jsx"));
const Login = lazy(() => import("./components/login/Login.jsx"));


function App() {


  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Suspense
            fallback={
              <div className="d-flex justify-content-center align-items-center " style={{ height: "100vh" }}>
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            }
          >
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route element={<DefaultLayout />}>
                <Route path="/" element={<UserList />} />
                <Route path="AddUser" element={<AddUser />} />
              </Route>
            </Route>
            <Route path="*" element={<>404</>} />
          </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
