import React from 'react'
import './SearchBar.css';
import styled from 'styled-components'

const HeaderDiv = styled.div`
  background-color: white;
  border-bottom: 1px solid #EDF2F9;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10000;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  width: 80%;
  margin: auto;
  justify-content: space-between; 
`;

const SearchInput = styled.input`
  border-radius: 5px;
  border: 1px solid #EDF2F9;
  height: 30px;
  font-size: 15px;
  text-align: center;

  &:focus{
    outline: none;
    border-color: #2C7BE5;
  }
`;


const SearchBar = props => {
  return(
  <HeaderDiv>
    <Header>
      <div><i className="fab fa-instagram fa-lg"></i> Instagram</div>
      <div><SearchInput type="text" placeholder="Search" value={props.searchValue} onChange={props.searchHandler} /></div>
      <div><i className="fas fa-compass icon fa-lg"></i><i className="far fa-heart icon fa-lg"></i><i onClick={props.logOutHandler} className="fas fa-user-alt fa-lg"></i></div>
    </Header>
  </HeaderDiv>
  );
}

export default SearchBar;