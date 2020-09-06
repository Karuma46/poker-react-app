import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Welcome from 'welcome/index'
import Dash from 'dash/index'
import {showbg} from 'welcome/helpers'

import Spinner from 'components/spinner' 

function App() {
  useEffect(() =>{
    showbg()
  }, [])


  return (
    <div className="App">
      <div id="wrapper">
        <Router>
          <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route path="/dash" component={Dash}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}


export default App;
