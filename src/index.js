import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SSL from './SSL';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/.well-known/acme-challenge/:content" component={SSL} />
    </div>
  </Router>
), document.getElementById('root'))
