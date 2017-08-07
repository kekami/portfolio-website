import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, hashHistory } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './styles/normalize.css';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} />

          <Route render={({ location }) => (
            <CSSTransitionGroup
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              transitionName="slide"
            >
              <Switch key={location.key} location={location}>
                <Route path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                <Route path={`${process.env.PUBLIC_URL}/portfolio`} component={Portfolio}/>
                <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
              </Switch>
            </CSSTransitionGroup>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
