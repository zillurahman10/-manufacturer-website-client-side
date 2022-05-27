import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Shared/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addareview' element={<MyOrders></MyOrders>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path="/purchase/:id" element={<Purchase></Purchase>}></Route>
      </Routes>
    </div>
  );
}

export default App;
