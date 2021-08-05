import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import { Home } from "./Pages/Home/Home";
import { Login } from './Pages/Login/Login';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">

      </header> */}
      <body>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route path = '/home/:userName'>
            <Home />
          </Route>
        </Switch>
      </Router>
      </body>
    </div>
  );
}

export default App;
