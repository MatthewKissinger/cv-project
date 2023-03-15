import React from 'react'
import Header from './components/Header'
import GeneralInfo from './components/GeneralInfo'
import About from './components/About'
import WorkHistory from './components/WorkHistory'
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
      },
      about: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna duis convallis convallis tellus id interdum velit laoreet id. In massa tempor nec feugiat nisl. Faucibus in ornare quam viverra orci. Nibh praesent tristique magna sit amet. Fermentum odio eu feugiat pretium nibh. Et odio pellentesque diam volutpat commodo sed egestas egestas. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Orci nulla pellentesque dignissim enim sit. Massa tempor nec feugiat nisl. Molestie at elementum eu facilisis sed odio.',
        editMode: false
      },
      workHistory: [
        {
          title: 'Manager',
          company: '2nd Company',
          dateRange: '2023 - Present',
          details: 'Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud. Irure dolor incididunt sint et ullamco.',
          editMode: false
        }, 
        {
          title: 'Production Lead',
          company: 'First Company',
          dateRange: '2019 - 2023',
          details: 'Irure dolor incididunt sint et ullamco. Commodo laboris amet aliquip incididunt do ut est exercitation reprehenderit magna sit laboris est mollit.',
          editMode: false
        }
      ]
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

    // update editMode for workHistory object in an array
    if (name === 'workHistory') {
      
      console.log(this.state[name]);
      this.setState({
        ...this.state,
        [name] : [
          ...this.state,

        ]
      })
    }

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

    const { name, title, phone, email, addressStreet, addressCity, about, workHistory } = this.state;

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
          <About 
            about={about}
            handleChange={this.handleChange}
            toggleEdit={this.toggleEdit}
            toggleSubmit={this.toggleSubmit}
          />
          <h2 className='workHistory'>WORK HISTORY</h2>
          <div className='workHistory--list'> 
            <WorkHistory 
              workHistory={workHistory}
              handleChange={this.handleChange}
              toggleEdit={this.toggleEdit}
              toggleSubmit={this.toggleSubmit}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
