import React, { Component }  from 'react';

class Search extends Component {

  render() {
    return (
      <div className="search-location-wrapper">
        <input
          className="search-location"
          type="text"
          placeholder="Search by location"
          value={this.props.query}
          onChange={(e) => this.props.updateQuery(e.target.value)}
        />
      </div>
    )
  }
}

export default Search;
