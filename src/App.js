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
          <h3 className='message'>Colin Allred is the Democratic candidate for Texas' 32nd District. Colin is a civil rights attorney running to represent the people of North Texas who deserve a representative that will fight for them. <a href="https://www.colinallred.com/about" > Read more about Colin. </a></h3>
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
