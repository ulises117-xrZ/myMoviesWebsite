import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/index.store'
import './styles/app.scss';
import { Layout } from './components/Layout';
import { Login } from './views/Login';
import RouterWrapper from './router/index.router';

function App() {
  return (
    <Provider store={store}>
      <RouterWrapper />
    </Provider>
  )
}

export default App
