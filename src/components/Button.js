import React, { Component }  from 'react';
import HamburgerMenu from '../images/hamburger_menu.svg';
import BackIcon from '../images/back-icon.svg';

class Button extends Component {

  render() {
    return (
      <button
        className="button"
        onClick={this.props.toggleSideBar}
      >
        {this.props.sideBar ?
        <img src={BackIcon} alt="" className="back-icon" /> :
        <img src={HamburgerMenu} alt="" className="hamburger-icon" />
        }
      </button>
    )
  }
}

export default Button;
