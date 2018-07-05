import React from 'react';
import { Menu, Button } from 'semantic-ui-react'
import logo from '../CALogo.png';


class NavHeader extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    return (
      <Menu>
        <Menu.Item className = "logoBox">
          <img className="logo" src={logo}/>
        </Menu.Item>

        <Menu.Menu position ='right'>
        <Menu.Item >
          <Button className="backButton" >Back to Homepage</Button>
        </Menu.Item>

        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavHeader;
