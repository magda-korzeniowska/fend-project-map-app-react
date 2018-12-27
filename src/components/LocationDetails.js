import React, { Component } from 'react';

class LocationDetails extends Component {

  render() {
    return (
      <div className={`modal ${this.props.modal ? "modal_open" : "modal_closed"}`}>
        {this.props.activeMarker ? (
          <div className="modal-content">
            <span className="close"
              onClick={(event) => this.props.closeModal()}
              >&times;</span>
            <h2 className="location-name">{`${this.props.activeMarker.name} (${this.props.activeMarker.title})`}</h2>

            <div className="pictures">
              <ul className="photogallery">
                {this.props.activeMarker.photos ? this.props.activeMarker.photos.map(photo => (
                  <li key={photo}>
                    <a href={photo} target="_blank">
                      <div className="photo"
                        style={{ backgroundImage: `url(${ photo})` }}>
                      </div>
                    </a>
                  </li>
                )) : undefined }
              </ul>

              <div className="flickr">
                <span>Powered by Flickr</span>
                <a href={`https://www.flickr.com/search/?text=${this.props.activeMarker.name}`} target="_blank">More photos...</a>
              </div>
            </div>


             <h2 className="name">Hello</h2>
          </div>
        ) : undefined}
      </div>
    )
  }
}
export default LocationDetails;
