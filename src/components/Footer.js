import React from 'react';
import { Segment, Button, Divider, Grid } from 'semantic-ui-react'


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
        <Button/>
      </Segment>
      </div>
    )
  }


}

export default Footer;
