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
                    <a href={photo} target="_blank" rel="noopener noreferrer">
                      <div className="photo"
                        style={{ backgroundImage: `url(${ photo})` }}>
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
export default LocationDetails;
