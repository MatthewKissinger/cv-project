import React from 'react'
import Header from './components/Header'
import GeneralInfo from './components/GeneralInfo'
import './styles/app.css'

class App extends React.Component {
  

  
  render() {
    return (
      <div className="App">
        <Header />
        <GeneralInfo />
      </div>
    )
  }
}

export default App
