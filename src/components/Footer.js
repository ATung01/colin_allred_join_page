import React from 'react';
import { Segment, Button, Divider, Icon } from 'semantic-ui-react'


class Footer extends React.Component {

  render() {
    return (
      <div className='footer'>
      <Segment padded className='footer content'>
        <a> About </a>
        <a> | </a>
        <a> Join </a>
        <a> | </a>
        <a> Donate </a>
        <a> | </a>
        <a> Press </a>
        <a> | </a>
        <a> Jobs </a>
        <Divider className='footerdiv' section></Divider>
        <div className='paidFor'>
          <a>Paid for by Colin Allred for Congress</a>
        </div>
        <div className='social'>
          <Icon name='facebook' size='huge'/>
          <Icon name='twitter' size='huge'/>
          <Icon name='instagram' size='huge'/>
        </div>
        <div className='address'>
          <p>P.O. Box 601631<br/>Dallas, TX 75360</p>
        </div>
      </Segment>
      </div>
    )
  }
}

export default Footer;
