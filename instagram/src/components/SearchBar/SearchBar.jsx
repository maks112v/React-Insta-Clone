import React from 'react'
import './SearchBar.css';

const SearchBar = props => {
  return(
  <div className="header">
    <header>
      <div><a href="#"> <i className="fab fa-instagram fa-lg"></i>   |  Instagram</a></div>
      <div><input type="text" placeholder="Search" /></div>
      <div><i className="fas fa-compass icon fa-lg"></i><i className="far fa-heart icon fa-lg"></i><i className="fas fa-user-alt fa-lg"></i></div>
    </header>
  </div>
  );
}

export default SearchBar;