import React, { Component } from 'react';

class ListFavorites extends Component {
  render(){
    
    console.log('Props', this.props)
    const users = this.props.users
    const profiles = this.props.profiles
    const movies = this.props.movies
    
    return (
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {users[profile.userID].name}'s favorite movie is {movies[profile.favoriteMovieID].name}
          </li>
        ))}
      </ul>
    )
  }
}

export default ListFavorites