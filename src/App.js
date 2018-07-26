import React, { Component } from 'react';
import NavHeader from './components/NavHeader'
import './App.css';
import Footer from './components/Footer'
import { Button } from 'semantic-ui-react'


class App extends Component {
  render() {
    const mobilizeStyle = {
      borderRadius: "25px",
      border: "none",
      padding: "0px"
    }
    return (
      <div className="App">
        <div className="headerContainer">
          <NavHeader/>
        </div>
        <h1 className="joinHeader" size="huge" textAlign="center" >Join Team Colin</h1>
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
        <div>
          <div className="middleRow">
            <Button className="middleButton" size="huge" href="https://www.colinallred.com">Back to Home</Button>
            <Button className="middleButton" size="huge" href="https://secure.actblue.com/contribute/page/colinallred/?utm_medium=referral&utm_campaign=donate&utm_content=homepage_donate&refcode=referral__donate_joinpage_donate">Make a contribution</Button>
          </div>
        </div>
        <div className="mobilizeIFrame" >
          <iframe title="mobilize" src="https://events.mobilizeamerica.io/embed/allredforcongress/feed/"
          	style={mobilizeStyle}
          	height="600px"
          	width="100%">
          </iframe>
        </div>
        <Footer/>

      </div>
    );
  }
}

export default App;
