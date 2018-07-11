import React from 'react';
import { Segment, Button, Divider, Icon } from 'semantic-ui-react'


class Footer extends React.Component {

  render() {
    return (
      <div className='footer'>
      <Segment padded className='footer content'>
        <Button className="backButton footer" href="https://www.colinallred.com">Back to Homepage</Button>
        <Button className="backButton footer" href=" https://secure.actblue.com/contribute/page/colinallred/?utm_medium=referral&utm_campaign=donate&utm_content=homepage_donate&refcode=referral__donate_joinpage_donate">Make a contribution</Button>
        <Divider className='footerdiv' section></Divider>
        <div className='paidFor'>
          <a>Paid for by Colin Allred for Congress</a>
        </div>
        <div className='social'>
          <a href='https://www.facebook.com/ColinAllredTX/'>
            <Icon inverted name='facebook' size='huge' link />
          </a>
          <a href='https://twitter.com/ColinAllredTX'>
            <Icon inverted name='twitter' size='huge' link/>
          </a>
          <a href='https://www.instagram.com/colinallred/'>
            <Icon inverted name='instagram' size='huge' link/>
          </a>
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
