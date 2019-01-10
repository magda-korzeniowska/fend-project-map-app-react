import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import HamburgerMenu from '../images/hamburger_menu.svg';
import BackIcon from '../images/back-icon.svg';

class Button extends Component {

  render() {
    return (
      <button
        className="button"
        aria-label="toggle menu - click to open or close list of locations"
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

Button.propTypes = {
  sideBar: PropTypes.bool.isRequired,
  toggleSideBar: PropTypes.func.isRequired
}

export default Button;
