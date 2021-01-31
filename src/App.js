import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import Order from './Components/Client/Order/Order';
import ServicesList from './Components/Client/ServicesList/ServicesList';
import Review from './Components/Client/Review/Review';
import User from './Components/AdminPanel/User/User';
import AddService from './Components/AdminPanel/AddService/AddService';
import MakeAdmin from './Components/AdminPanel/MakeAdmin/MakeAdmin';
import PrivateRoute from './Components/Login/PrivateRoute'
import NotMatch from './Components/NotMatch/NotMatch';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
    return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <PrivateRoute path="/order">
              <Order/>
            </PrivateRoute>
            <PrivateRoute path='/serviceOrder/:title'>
                  <Order />
            </PrivateRoute>
            <PrivateRoute path='/serviceList'>
                  <ServicesList/>
            </PrivateRoute> 
            <PrivateRoute path='/review'>
                  <Review/>
            </PrivateRoute>
            <PrivateRoute path='/admin'>
                  <User/>
            </PrivateRoute>
            <PrivateRoute path='/adminService'>
                  <User/>
            </PrivateRoute>
            <PrivateRoute path='/addService'>
                  <AddService/>
            </PrivateRoute>
            <PrivateRoute path='/makeAdmin'>
                  <MakeAdmin/>
              </PrivateRoute>
          </Switch>
          <Route paht="*">
            <NotMatch/>
          </Route>
        </Router>
      </UserContext.Provider>
  );
}

export default App;
