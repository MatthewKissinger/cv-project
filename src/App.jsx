import React from 'react'
import Header from './components/Header'
import GeneralInfo from './components/GeneralInfo'
import About from './components/About'
import WorkHistory from './components/WorkHistory'
import Education from './components/Education'
import './styles/app.css'

// add buttons to add or delete workHistory array items
// on hover over .section--workHistory & --education ->
//  display an add button that pushes an empty object (with filler text) to the 
//  appropriate array
// display delete button when in edit mode for each array item

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
          id: '0',
          jobTitle: 'Manager',
          company: '2nd Company',
          dateRange: '2023 - Present',
          details: 'Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud. Irure dolor incididunt sint et ullamco.',
          editMode: false
        }, 
        {
          id: '1',
          jobTitle: 'Production Lead',
          company: 'First Company',
          dateRange: '2019 - 2023',
          details: 'Irure dolor incididunt sint et ullamco. Commodo laboris amet aliquip incididunt do ut est exercitation reprehenderit magna sit laboris est mollit.',
          editMode: false
        }
      ],
      education: [
        {
          id: '0',
          certification: 'Fullstack Javascript',
          school: 'The Odin Project',
          dateRange: '2020 - Present',
          editMode: false
        },
        {
          id: '1',
          certification: 'Bachelors of Arts',
          school: 'Columbia Chicago',
          dateRange: '2011 - 2014',
          editMode: false
        }
      ]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleSubmit = this.toggleSubmit.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addWorkHistory = this.addWorkHistory.bind(this);
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

  handleWorkChange(e) {
    const { value } = e.target;
    const name = e.target.dataset.name;
    const { workHistory } = this.state;

    const newWorkHistory = workHistory.map(item => {
      if (item.id === e.target.id) {
        return {...item, [name]: value}
      } else {
        return item;
      }
    })

    this.setState({
      ...this.state,
      workHistory : newWorkHistory
    })

  }

  handleEducationChange(e) {
    const { value } = e.target;
    const name = e.target.dataset.name;
    const { education } = this.state;

    const newEducation = education.map(item => {
      if (item.id === e.target.id) {
        return {...item, [name]: value}
      } else {
        return item;
      }
    })

    this.setState({
      ...this.state,
      education : newEducation
    })
  }

  toggleEdit(e) {
    const name = e.target.dataset.name;

    if (name === 'workHistory') {

      const { workHistory } = this.state;

      const newWorkHistory = workHistory.map(item => {
        if (item.id === e.target.id) {
          return {...item, editMode: !item.editMode}
        } else {
          return item;
        }
      });
      
      this.setState({
        ...this.state,
        workHistory : newWorkHistory
      })
    } else if (name === 'education') {

      const { education } = this.state;

      const newEducation = education.map(item => {
        if (item.id === e.target.id) {
          return {...item, editMode: !item.editMode}
        } else {
          return item;
        }
      });
      
      this.setState({
        ...this.state,
        education : newEducation
      })
    } else {
      this.setState({
        ...this.state,
        [name]: {
          ...this.state[name],
          editMode: !this.state[name].editMode
      }
      })
    }
  }

  toggleSubmit(e) {
    const name = e.target.dataset.name;

    if (name === 'workHistory') {

      const { workHistory } = this.state;

      const newWorkHistory = workHistory.map(item => {
        if (item.id === e.target.id) {
          return {...item, editMode: !item.editMode}
        } else {
          return item;
        }
      });
      
      this.setState({
        ...this.state,
        workHistory : newWorkHistory
      })
    } else if (name === 'education') {
      const { education } = this.state;

      const newEducation = education.map(item => {
        if (item.id === e.target.id) {
          return {...item, editMode: !item.editMode}
        } else {
          return item;
        }
      });
      
      this.setState({
        ...this.state,
        education : newEducation
      })
    } else {
      this.setState({
        ...this.state,
        [name]: {
          ...this.state[name],
          editMode: !this.state[name].editMode
      }
      })
    }
  }  

  addWorkHistory(e) {
    console.log('add some work history');

    // map a new array from the previous workHistory and add in an empty object by adjusting state
  }

  addEducation(e) {
    console.log('add some education!');
  }

  render() {

    const { name, title, phone, email, addressStreet, addressCity, about } = this.state;

    const workHistoryCards = this.state.workHistory.map(item => {
      return (
        <WorkHistory
          key={item.id}
          {...item}
          handleWorkChange={this.handleWorkChange}
          toggleEdit={this.toggleEdit}
          toggleSubmit={this.toggleSubmit}
        />
      )
    })

    // mapping over education array
    const educationCards = this.state.education.map(item => {
      return (
        <Education 
          key={item.id}
          {...item}
          handleEducationChange={this.handleEducationChange}
          toggleEdit={this.toggleEdit}
          toggleSubmit={this.toggleSubmit}
        />
      )
    })

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
          <div className='section--workHistory--wrapper'>  
            <h2 className='workHistory--title'>WORK HISTORY</h2>
            <span
                data-name='add-workHistory'
                className='material-icons add--btn workHistory--add--btn'
                onClick={this.addWorkHistory}
            >
              add
            </span>
          </div>
          <div className='workHistory--list'> 
            {workHistoryCards}
          </div>
          <div className='section--education--wrapper'>
            <h2 className='education--title'>EDUCATION</h2>
            <span
                data-name='add-education'
                className='material-icons add--btn education--add--btn'
                onClick={this.addEducation}
            >
              add
            </span>
          </div>
          <div className='education--list'>
            {educationCards}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
