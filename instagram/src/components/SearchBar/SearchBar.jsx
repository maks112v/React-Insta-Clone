import React from 'react'
import './SearchBar.css';
import PropType from 'prop-types';

const SearchBar = props => {
  return(
  <div className="header">
    <header>
      <div><a href=""> <i className="fab fa-instagram fa-lg"></i>   |  Instagram</a></div>
      <div><input type="text" placeholder="Search" /></div>
      <div><i class="fas fa-compass icon fa-lg"></i><i class="far fa-heart icon fa-lg"></i><i class="fas fa-user-alt fa-lg"></i></div>
    </header>
  </div>
  );
}

SearchBar.propType = {

}

export default SearchBar;