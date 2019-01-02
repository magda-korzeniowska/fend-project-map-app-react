import React, { Component }  from 'react';
import Button from './Button.js';
import flag from '../images/Flag_of_Madeira.svg';

class Header extends Component {

  render() {
    return (
      <header className="banner" role="banner">
        <img className="flag" alt="Madeira's flag" src={flag}/>
        <h1 className="page_title">MADEIRA - MUST SEE PLACES</h1>
        <Button toggleSideBar={this.props.toggleSideBar} />
      </header>
    )
  }
}

export default Header;
