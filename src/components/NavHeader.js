import React from 'react';
import { Menu, Button } from 'semantic-ui-react'
import logo from '../CALogo.png';


class NavHeader extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    return (
      <div className="innerHeader">
      <Menu>
        <Menu.Item className = "logoBox">
          <img className="logo" src={logo}/>
        </Menu.Item>

        <Menu.Menu position ='right'>
          <Menu.Item >
            <div>
              <Button className="backButton" size="small" href="https://secure.actblue.com/donate/websitewx?refcode=jointeamcolin" >Make a contribution</Button>
              <Button className="backButton" size="small" style={{display: "block"}}href="https://www.colinallred.com" >Back to Home</Button>
            </div>
          </Menu.Item>

        </Menu.Menu>
      </Menu>
      </div>
    )
  }
}

export default NavHeader;
