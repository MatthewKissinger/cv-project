import React from 'react'
import Header from './components/Header'
import GeneralInfo from './components/GeneralInfo'
import './styles/app.css'

// create a state object for all resume items

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Joe Schmoe',
      title: 'Web Developer',
      phone: '555.867.5309',
      email: 'joe.schmoe@gmail.com',
      addressStreet: '1234 Sesame St.',
      addressCity: 'New York City, NY 10001'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target)
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <div className='resume--container'>
          <GeneralInfo 
            toggleClick={this.handleClick}
            userName={this.state.name}
            userTitle={this.state.title}
            userPhone={this.state.phone}
            userEmail={this.state.email}
            userStreet={this.state.addressStreet}
            userCity={this.state.addressCity}
          />
        </div>
      </div>
    )
  }
}

export default App;
