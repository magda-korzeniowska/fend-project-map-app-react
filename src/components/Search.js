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

  render() {
    return (
      <div className="search-location">
        <div className="search-location-bar">
          <input
            className="search-location-input"
            type="text"
            placeholder="Search by location"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
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
