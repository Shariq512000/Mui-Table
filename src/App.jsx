import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import DashBoard from './Component/Dashboard/DashBoard';
import Profile from './Component/Profile/Profile';

function App() {

  return (
    <div className="App">

      {/* <DashBoard /> */}

      <Profile />
      
    </div>
  );
}

export default App;
