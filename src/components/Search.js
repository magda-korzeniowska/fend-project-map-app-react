import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by'

class Search extends Component {

  state = {
    query: '',
    filteredLocations: this.props.locations
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })

    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      let filteredLocations = this.props.locations.filter((location) =>
        match.test(location.name)
      )
      if (query.length === 0) {
        this.setState({ filteredLocations: this.props.locations })
      } else {
        this.setState({ filteredLocations })
      }
    } else {
      this.setState({ filteredLocations: this.props.locations })
    }
  }

  render() {
    this.state.filteredLocations.sort(sortBy('name'))
    return (
      <div className="search-location">
        <div className="search-location-bar">
          <input
            className="search-location-input"
            id="search-input"
            type="text"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            aria-hidden={this.props.sideBar ? false : true}
          />
          <label htmlFor="search-input" className="search-location-label">
            Search by location
          </label>
        </div>

        <div className="search-location-results" aria-label="list of locations">
          <ul className="location-list">
            {this.state.filteredLocations.map(location => (
              <li
                className="location-list-item"
                key={location.id}
                tabIndex="0"
                role="button"
								aria-label={location.name}
                onClick={(event) => this.props.handleMarkerClick(event, location.latlng, location)}
                onKeyPress={(event) => this.props.handleMarkerClick(event, location.latlng, location)}
                >
                  <p>{location.name}</p>
                  <p>{`(eng. ${location.title})`}</p>

              </li>
            ))}

            {(this.state.filteredLocations.length === 0) &&
								<div className="no-location-found">Sorry, we didn't find any matching location</div>
							}

          </ul>
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  sideBar: PropTypes.bool.isRequired,
  handleMarkerClick: PropTypes.func.isRequired
}

export default Search;
