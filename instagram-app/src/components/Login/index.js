import React from 'react'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
    this.login = this.login.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login(e) {
    e.preventDefault()
    localStorage.setItem('auth', JSON.stringify({
      isLoggedIn: true,
      username: this.state.username
    }))
    window.location.reload()
  }

  render() {
    return (
      <form onSubmit={this.login} >
        <label>
          Username:
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Log In" />
      </form>
    )
  }
}

export default Login
