import React from 'react';
import Cursor from './components/Cursor';
import CursorContextProvider from "./components/CursorContextProvider";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Resume from './pages/Resume';

function App() {
  return (
    <React.Fragment>
      <Router>
        <CursorContextProvider>
          <Switch>
            <Route exact path='/'>
              <Cursor />
              <Home/>
            </Route>
          <Route path='/resume'>
              <Cursor />
              <Resume/>
            </Route>
          </Switch>
        </CursorContextProvider>
      </Router>
    </React.Fragment>
  );

}

export default App;
