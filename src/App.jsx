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

    this.handleChange = this.handleChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleSubmit = this.toggleSubmit.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    const name = e.target.dataset.name;

    this.setState({
      ...this.state,
      [name]: {
        ...this.state[name],
        text: value
      }
    })
  }

  toggleEdit(e) {
    
    const { id } = e.target;

    this.setState({
      ...this.state,
      [id]: {
        ...this.state[id],
        editMode: !this.state[id].editMode
    }
    })
  }

  toggleSubmit(e) {

  }  
  
  render() {

    const { name, title, phone, email, addressStreet, addressCity } = this.state;

    return (
      <div className="App">
        <Header />
        <div className='resume--container'>
          <GeneralInfo 
            handleChange={this.handleChange}
            toggleEdit={this.toggleEdit}
            toggleSubmit={this.toggleSubmit}
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
