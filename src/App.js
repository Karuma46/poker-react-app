import React, {useEffect} from 'react';
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
          {/* <Spinner/> */}
          {/* <Welcome/> */}
          <Dash />
      </div>
    </div>
  );
}


export default App;
