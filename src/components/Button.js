import React, { Component }  from 'react';
import HamburgerMenu from '../images/hamburger_menu.svg';

class Button extends Component {

  render() {
    return (
      <button
        className="button"
        onClick={this.props.toggleSideBar}
      >
        <img src={HamburgerMenu} alt="" className="hamburger-icon" />
      </button>
    )
  }
}

export default Button;
