import React from 'react';
import './App.css';

import withAuthenticate from './authentication'
import LoginPage from './components/Login'
import PostsPage from './components/PostContainer/PostsPage'

const ComponentWithAuthenticate = withAuthenticate(PostsPage)(LoginPage)

const App = () => {
  return <ComponentWithAuthenticate />
}

export default App
