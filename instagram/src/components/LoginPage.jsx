import React, { Component } from 'react'
import styled from 'styled-components'
import './Login.css';


const ContainerFluid = styled.div`
  height: 100vh;
  display:flex;
  text-align: center;
`;

const LoginSection = styled.div`
  width: 30%;
  align-self: center
`;

const ImageSection = styled.div`
  width: 70%;
  background-size: cover;
  background-position: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  background-image: url('https://source.unsplash.com/collection/4331376/');
`;

const LoginInput = styled.input`
  border-radius: 5px;
  border: 1px solid #EDF2F9;
  height: 30px;
  font-size: 15px;
  text-align: center;
  margin-bottom: 10px;

  &:focus{
    outline: none;
    border-color: #2C7BE5;
  }
`;

const LoginButton = styled.button`
  background-color: #2196F3;
  border: none;
  shadow: none;
  color: white;
  padding: 10px 20px;
  font-size: 15px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      logged: false,
    };
  }
  

  changeHandler = e => this.setState({[e.target.name]: e.target.value,})

  loginHandler = e => {
    e.preventDefault();
    localStorage.setItem('user',Date.now());
    localStorage.setItem('username',this.state.username);
    this.setState({
      username: '',
      password:'',
      logged: true,
    })
    this.props.reloadHandler();
  }


  render() {

    return(
      <ContainerFluid>
        <LoginSection>
          <h1>Login</h1>
          <form onSubmit={this.loginHandler} className="login-form">
            <LoginInput type="text" placeholder="Username" required="required"  value={this.state.username} onChange={this.changeHandler} name="username" /><br/>
            <LoginInput type="Password" placeholder="Password" required="required"  value={this.state.password} onChange={this.changeHandler} name="password" /><br/>
            <LoginButton type="submit">Login</LoginButton>
          </form>
        </LoginSection>
        <ImageSection />
      </ContainerFluid>
    );
  }
}

export default LoginPage;