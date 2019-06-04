import React from 'react'

const withAuthenticate = WrappedComponent => LoginPage => {
  return class extends React.Component {
    constructor() {
      super()
      this.state = {
        loggedIn: false,
      }
    }

    componentDidMount() {
      const auth = JSON.parse(localStorage.getItem('auth'))
      this.setState({
        loggedIn: (auth !== null) ? auth.isLoggedIn : false
      })
    }

    render() {
      return (
        this.state.loggedIn 
          ? <WrappedComponent />
          : <LoginPage />
      )
    }
  }
}

export default withAuthenticate
