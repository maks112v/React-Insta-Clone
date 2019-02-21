import React from 'react'
import './SearchBar.css';

const SearchBar = props => {
  return(
  <div className="header">
    <header>
      <div><i className="fab fa-instagram fa-lg"></i> Instagram</div>
      <div><input type="text" placeholder="Search" value={props.searchValue} onChange={props.searchHandler} /></div>
      <div><i className="fas fa-compass icon fa-lg"></i><i className="far fa-heart icon fa-lg"></i><i onClick={props.logOutHandler} className="fas fa-user-alt fa-lg"></i></div>
    </header>
  </div>
  );
}

export default SearchBar;