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
            <Button className="backButton" size="massive" href="https://www.colinallred.com" >Make a contribution</Button>
          </Menu.Item>
          <Menu.Item >
            <Button className="backButton" size="massive" href="https://www.colinallred.com" >Back to Home</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      </div>
    )
  }
}

export default NavHeader;
