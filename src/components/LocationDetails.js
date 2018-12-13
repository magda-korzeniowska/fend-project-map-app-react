import React, { Component } from 'react';

class LocationDetails extends Component {

  render() {
    return (

      <div className={`modal ${this.props.modal ? "modal_open" : "modal_closed"}`}>
        <div className="modal-content">
            <span className="close"
              onClick={(event) => this.props.closeModal()}
              >&times;</span>
           <h2 className="name">Hello</h2>
        </div>
      </div>
    )
  }
}
export default LocationDetails;
