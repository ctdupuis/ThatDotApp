// import third party library
import React, { useState } from 'react';
import {Redirect, Route} from 'react-router-dom';

// import Chip from '@material-ui/core/Chip';
import Chip from '@material-ui/core/Chip';

// import user defined js file
import './App.css';
import Home from './Home';
import Add from './Add';
import TestUserData from './dataset/TestUserData';
import getStartDate from './CoreAlgorithm';
import Login from './Login';
import MyHome from './MyHome';
import Nav from './Nav';

function App() {
  const [currentUser, setCurrentUser] = useState(false);

  return(
    <>
      <Route path={"/"}>
        <Nav />
      </Route>

      <Route exact path={"/"}
       render={(props) => 
         currentUser ? 
         <Home currentUser={currentUser} />
         :
         <Login setCurrentUser={setCurrentUser} {...props} />
        }
       />
    </>
   
  )
}


export default App;
