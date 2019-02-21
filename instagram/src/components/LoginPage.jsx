import React, { Component } from 'react'
import './Login.css';

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
      <div className="container-full-width">
        <div className="login-section">
          <h1>Login</h1>
          <form onSubmit={this.loginHandler} className="login-form">
            <input type="text" className='mb-10' placeholder="Username" required="required"  value={this.state.username} onChange={this.changeHandler} name="username" /><br/>
            <input type="Password"  className='mb-10' placeholder="Password" required="required"  value={this.state.password} onChange={this.changeHandler} name="password" /><br/>
            <button className="login-button" type="submit">Login</button>
          </form>
        </div>
        <div className="side-image">
        </div>
      </div>
    );
  }
}

export default LoginPage;