import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import "../src/sb-admin-2.min.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Incomelist from './Incomelist';
import Expenselist from './Expenselist';
import Addincome from './Addincome';
import Addexpense from './Addexpense';
import Dashboard from './Dashboard';
import Expenseedit from './Expenseedit';
import Incomeedit from './Incomeedit';
import Login from './Login';
import Register from './Register';
import Portal from './Portal';
import Forgetpassword from './Forgetpassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget_password" element={<Forgetpassword />} />

        <Route path="/portal" element={<Portal />} >
          <Route path="dashboard" element={<Dashboard />} />
          
          <Route path="incomelist" element={<Incomelist />} />
          <Route path="expenselist" element={<Expenselist />} />
          <Route path="expenselist/edit/:id" element={<Expenseedit />} />
          <Route path="incomelist/edit/:id" element={<Incomeedit />} />
          <Route path="addincome" element={<Addincome />} />
          <Route path="addexpense" element={<Addexpense />} />
        </Route>
      </Routes>












      {/* <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/incomelist" element={<Incomelist />} />
                <Route path="/expenselist" element={<Expenselist />} />
                <Route path="/expenselist/edit/:id" element={<Expenseedit />} />
                <Route path="/incomelist/edit/:id" element={<Incomeedit />} />
                <Route path="/addincome" element={<Addincome />} />
                <Route path="/addexpense" element={<Addexpense />} />
                
              </Routes>
              
            </div>
          </div>




        </div>
      </div>
      */}
    </BrowserRouter>
  );
}

export default App;
