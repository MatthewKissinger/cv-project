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

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  

  toggleEdit(e) {
    
    const elementID = e.target.id;
    
    // setup the handle click to trigger on an edit button 

    this.setState({
      ...this.state,
      [elementID]: {
        ...this.state[elementID],
        editMode: !this.state[elementID].editMode
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
            toggleEdit={this.toggleEdit}
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
