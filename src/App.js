import React, { Component } from 'react';
import NavHeader from './components/NavHeader'
import './App.css';
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavHeader />
        </div>
        <div className='messageSpace'>
          <h1 className='message'>Enter message here </h1>
        </div>

        <div className='ngp-form'
            data-template='oberon'
            data-id='-4467195972121261568'
            data-endpoint='https://api.myngp.com/'
            data-formdef-endpoint='//formdefs.s3.amazonaws.com/api.myngp.com'
            data-fastaction-endpoint='https://fastaction.ngpvan.com/'
            data-databag='everybody'
            data-resource-path='https://d1aqhv4sn5kxtx.cloudfront.net/'
            data-inline-errors='true'
            data-fastaction-nologin='true'
            data-embed='true'>
        </div>
        <Footer/>

      </div>
    );
  }
}

export default App;
