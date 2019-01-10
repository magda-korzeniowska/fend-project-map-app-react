import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LocationDetails extends Component {

  render() {
    return (
      <div className={`modal ${this.props.modal ? "modal_open" : "modal_closed"}`}>
        {this.props.activeMarker ? (
          <div className="modal-content"
            // tabIndex="0"
            // role="dialog"
            // aria-modal="true"
            aria-label="location details">

            <button type="button"
              className="close"
              aria-label="Close"
              onClick={(event) => this.props.closeModal()}>
              <span>&times;</span>
            </button>

            <h2 className="location-name">{`${this.props.activeMarker.name}`}<span>{` (eng. ${this.props.activeMarker.title})`}</span></h2>

            <div className="pictures">
              <ul className="photogallery">
                {this.props.activeMarker.photos ? this.props.activeMarker.photos.map(photo => (
                  <li key={photo}>
                    <a href={photo} target="_blank" rel="noopener noreferrer" aria-label={`Image of ${this.props.activeMarker.name}`}>
                      <div className="photo"
                        style={{ backgroundImage: `url(${ photo })` }}
                        role="img">
                      </div>
                    </a>
                  </li>
                )) : undefined }
              </ul>

              <div className="flickr">
                <span>Powered by Flickr</span>
                <a href={`https://www.flickr.com/search/?text=${this.props.activeMarker.name}`} target="_blank" rel="noopener noreferrer">More photos...</a>
              </div>
            </div>

            {this.props.activeMarker.wikiData && this.props.activeMarker.wikiData.length ? (
              <div className="location-info">

                <div className="wiki-data"
                  dangerouslySetInnerHTML={{ __html: this.props.activeMarker.wikiData }}>
                </div>

                <div className="wikipedia">
                  <span className="powered-by">Powered by Wikipedia</span>
                  <a href={`https://en.wikipedia.org/wiki/${this.props.activeMarker.name}`} target="_blank" rel="noopener noreferrer">More information...</a>
                </div>

              </div>

            ) : (
              <div className="location-info">

                <div className="wikipedia">
                  <span className="no-wiki-data">No information available on <span>Wikipedia</span></span>
                  <a href={`https://en.wikipedia.org/wiki/${this.props.activeMarker.name}`} target="_blank" rel="noopener noreferrer">Details...</a>
                </div>

              </div>
            )}
          </div>
        ) : undefined }
      </div>
    )
  }
}

LocationDetails.propTypes = {
  modal: PropTypes.bool.isRequired,
  activeMarker: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default LocationDetails;
