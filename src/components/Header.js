import React, { Component}  from 'react';
import flag from '../images/Flag_of_Madeira.svg';

class Header extends Component {

  render() {
    return(
      <header className="banner" role="banner">
        <img className="flag" alt="Madeira's flag" src={flag}/>
        <h1 className="page_title">MADEIRA - MUST SEE PLACES</h1>
      </header>
    )
  }
}

export default Header;
