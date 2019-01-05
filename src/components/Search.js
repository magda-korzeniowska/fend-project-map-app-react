import React, { Component }  from 'react';
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

  // przed ostatnim else (athens)
    // if (showingPlaces.length === 1) {
    //           this.toggleLocationsActive(
    //             this.state.showingPlaces[0].location.lat,
    //             this.state.showingPlaces[0].location.lng
    //           );


  render() {
    return (
      <div className="search-location">
        <div className="search-location-bar">
          <input
            className="search-location-input"
            type="text"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          <label htmlFor="input" className="search-location-label">
            Search by location
          </label>
        </div>

        <div className="search-location-results">
          <ul className="location-list">
            {this.state.filteredLocations.map(location => (
              <li
                className="location-list-item"
                key={location.id}
                // onClick={(event) => this.props.handleMarkerClick(event, this.props.position, this.props.location)}
                // onKeyPress={}
                >
                  <p>{location.name}</p>
                  <p>{`(eng. ${location.title})`}</p>

              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Search;
