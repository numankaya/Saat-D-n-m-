import React from 'react';

import Home from './src/components/Home.js';
import Chat from './src/components/Chat.js';

import {Router, Scene} from 'react-native-router-flux';

class navigate extends React.Component {
  render() {
    return(
      <Router>
        <Scene key='root'>
          <Scene key='home' component={Home} title='Home'/>
          <Scene key='Chat' component={Chat} title='Chat'/>
        </Scene>
      </Router>
    );
  }
}

export default navigate;
