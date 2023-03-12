import React from 'react'
import Header from './components/Header'
import GeneralInfo from './components/GeneralInfo'
import './styles/app.css'

// create a state object for all resume items
// hook up state objects with the right side of the generalInfo component

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: {
        text: 'Joe Schmoe',
        editMode: false
      },
      title: {
        text: 'Web Developer',
        editMode: false
      },
      phone: {
        text: '555.867.5309',
        editMode: false
      },
      email: {
        text: 'joe.schmoe@gmail.com',
        editMode: false
      },
      addressStreet: {
        text: '1234 Sesame St.',
        editMode: false
      },
      addressCity: {
        text: 'New York City, NY 10001',
        editMode: false
      }
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
    const name = e.target.dataset.name;

    this.setState({
      ...this.state,
      [name]: {
        ...this.state[name],
        editMode: !this.state[name].editMode
    }
    })
  }

  toggleSubmit(e) {
    const name = e.target.dataset.name;

    this.setState({
      ...this.state,
      [name]: {
        ...this.state[name],
        editMode: !this.state[name].editMode
      }
    })
    
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
