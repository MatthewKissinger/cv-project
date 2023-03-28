import { useState } from 'react'
import uniqid from 'uniqid'
import Header from './components/Header'
import GeneralInfo from './components/GeneralInfo'
import About from './components/About'
import WorkHistory from './components/WorkHistory'
import Education from './components/Education'
import './styles/app.css'

export default function App() {

  const [state, setState] = useState(
    {
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
          id: uniqid(),
          jobTitle: 'Manager',
          company: '2nd Company',
          dateRange: '2023 - Present',
          details: 'Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud. Irure dolor incididunt sint et ullamco.',
          editMode: false
        }, 
        {
          id: uniqid(),
          jobTitle: 'Production Lead',
          company: 'First Company',
          dateRange: '2019 - 2023',
          details: 'Irure dolor incididunt sint et ullamco. Commodo laboris amet aliquip incididunt do ut est exercitation reprehenderit magna sit laboris est mollit.',
          editMode: false
        }
      ],
      education: [
        {
          id: uniqid(),
          certification: 'Fullstack Javascript',
          school: 'The Odin Project',
          dateRange: '2020 - Present',
          editMode: false
        },
        {
          id: uniqid(),
          certification: 'Bachelors of Arts',
          school: 'Columbia Chicago',
          dateRange: '2011 - 2014',
          editMode: false
        }
      ]
    }
  )

  // componenet methods
  //-------------------

  function handleChange(e) {
    const { value } = e.target;
    const name = e.target.dataset.name;
    
    setState({
      ...state,
      [name]: {
        ...state[name],
        text: value
      }
    })
  }

  function handleWorkChange(e) {
    const { value } = e.target;
    const name = e.target.dataset.name;
    const { workHistory } = state;

    const newWorkHistory = workHistory.map(item => {
      if (item.id === e.target.id) {
        return {...item, [name]: value}
      } else {
        return item;
      }
    })

    setState({
      ...state,
      workHistory : newWorkHistory
    })

  }

  function handleEducationChange(e) {
    const { value } = e.target;
    const name = e.target.dataset.name;
    const { education } = state;

    const newEducation = education.map(item => {
      if (item.id === e.target.id) {
        return {...item, [name]: value}
      } else {
        return item;
      }
    })

    setState({
      ...state,
      education : newEducation
    })
  }

  function toggleEdit(e) {
    const name = e.target.dataset.name;

    if (name === 'workHistory') {

      const { workHistory } = state;

      const newWorkHistory = workHistory.map(item => {
        if (item.id === e.target.id) {
          return {...item, editMode: !item.editMode}
        } else {
          return item;
        }
      });
      
      setState({
        ...state,
        workHistory : newWorkHistory
      })
    } else if (name === 'education') {

      const { education } = state;

      const newEducation = education.map(item => {
        if (item.id === e.target.id) {
          return {...item, editMode: !item.editMode}
        } else {
          return item;
        }
      });
      
      setState({
        ...state,
        education : newEducation
      })
    } else {
      setState({
        ...state,
        [name]: {
          ...state[name],
          editMode: !state[name].editMode
      }
      })
    }
  }

  function toggleSubmit(e) {
    const name = e.target.dataset.name;

    if (name === 'workHistory') {

      const { workHistory } = state;

      const newWorkHistory = workHistory.map(item => {
        if (item.id === e.target.id) {
          return {...item, editMode: !item.editMode}
        } else {
          return item;
        }
      });
      
      setState({
        ...state,
        workHistory : newWorkHistory
      })
    } else if (name === 'education') {
      const { education } = state;

      const newEducation = education.map(item => {
        if (item.id === e.target.id) {
          return {...item, editMode: !item.editMode}
        } else {
          return item;
        }
      });
      
      setState({
        ...state,
        education : newEducation
      })
    } else {
      setState({
        ...state,
        [name]: {
          ...state[name],
          editMode: !state[name].editMode
      }
      })
    }
  }  

  function toggleDelete(e) {
    const name = e.target.dataset.name;
    const id = e.target.id;

    const newArray = state[name].filter(item => {
      if (id !== item.id) {
        return item;
      }
    })
    
    setState({
      ...state,
      [name]: newArray
    })
  }

  function addWorkHistory() {
    const newWorkHistoryArr = [
      ...state.workHistory,
      {
        id: uniqid(),
        jobTitle: 'Worker',
        company: 'Company Name',
        dateRange: '2023 - Present',
        details: 'Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud. Irure dolor incididunt sint et ullamco.',
        editMode: false
      }
    ];

    setState({
      ...state,
      workHistory: newWorkHistoryArr
    })
  }

  function addEducation() {
    const newEducationArr = [
      ...state.education,
      {
        id: uniqid(),
        certification: 'Bachelors Degree',
        school: 'Sky Academy',
        dateRange: '2020 - Present',
        editMode: false
      }
    ];

    setState({
      ...state,
      education: newEducationArr
    })
  }

  
  const { name, title, phone, email, addressStreet, addressCity, about } = state;

  const workHistoryCards = state.workHistory.map(item => {
    return (
      <WorkHistory
        key={item.id}
        {...item}
        handleWorkChange={handleWorkChange}
        toggleEdit={toggleEdit}
        toggleSubmit={toggleSubmit}
        toggleDelete={toggleDelete}
      />
    )
  })

  const educationCards = state.education.map(item => {
    return (
      <Education 
        key={item.id}
        {...item}
        handleEducationChange={handleEducationChange}
        toggleEdit={toggleEdit}
        toggleSubmit={toggleSubmit}
        toggleDelete={toggleDelete}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <div className='resume--container'>
        <GeneralInfo 
          handleChange={handleChange}
          toggleEdit={toggleEdit}
          toggleSubmit={toggleSubmit}
          userName={name}
          userTitle={title}
          userPhone={phone}
          userEmail={email}
          userStreet={addressStreet}
          userCity={addressCity}
        />
        <About 
          about={about}
          handleChange={handleChange}
          toggleEdit={toggleEdit}
          toggleSubmit={toggleSubmit}
        />
        <div className='section--workHistory--wrapper'>  
          <h2 className='workHistory--title'>WORK HISTORY</h2>
          <span
              data-name='add-workHistory'
              className='material-icons add--btn workHistory--add--btn'
              onClick={addWorkHistory}
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
              onClick={addEducation}
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

