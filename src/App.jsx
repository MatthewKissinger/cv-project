import React from 'react'
import Header from './components/Header'
import GeneralInfo from './components/GeneralInfo'
import './styles/app.css'

// create a state object for all resume items

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: {
        text: 'Joe Schmoe',
        editMode: false
      },
      title: 'Web Developer',
      phone: '555.867.5309',
      email: 'joe.schmoe@gmail.com',
      addressStreet: '1234 Sesame St.',
      addressCity: 'New York City, NY 10001'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target.id)
    console.log(this.state[e.target.id].editMode)
    // setup the handle click to trigger on an edit button 
  }

  
  
  render() {

    const { name, title, phone, email, addressStreet, addressCity } = this.state;

    return (
      <div className="App">
        <Header />
        <div className='resume--container'>
          <GeneralInfo 
            toggleClick={this.handleClick}
            userName={name}
            userTitle={title}
            userPhone={phone}
            userEmail={email}
            userStreet={addressStreet}
            userCity={addressCity}
          />
        </div>
      </div>
    )
  }
}

export default App;
