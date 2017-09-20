import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home.js'
import About from './About.js'
import Secret from './Secret.js'
import Odor from './Odor.js'
import BadHair from './BadHair.js'
import SecretsLanding from './SecretsLanding.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/secret'>Secret</Link>
            <Route exact path='/' component={ Home }  />
            <Route path='/about' component={ About } />
            <Route path='/secret' render={()=>(
              <Secret>
                <Link to='/secret/odor'>Secret #1</Link>
                <Link to='/secret/badhair'>Secret #2</Link>
                <Route path='/secret/odor' component={Odor} />
                <Route path='/secret/badhair' component={BadHair} />
                <Route component={SecretsLanding} />
              </Secret>)} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
