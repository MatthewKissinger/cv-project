import React from 'react'
import '../styles/workHistory.css'

// style a placeholder WorkHistory Card with state

class WorkHistory extends React.Component {

    render() {
        const { workHistory, handleChange, toggleEdit, toggleSubmit} = this.props;

        return (
            <div>
                {workHistory[0].editMode 
                ?   <div className='workHistory--inputs'>
                        <div className='input--container'>
                            <label htmlFor='title'>
                                Job Title
                            </label>
                            <input
                                id='title'
                                // make a separate handleChange function for workHistory
                                // onChange={handleChange}
                                // value={userName.text}
                            >
                            </input>
                        </div>
                        <div className='input--container'>
                            <label htmlFor='company'>
                                Company Name
                            </label>
                            <input
                                id='company'
                                // make a separate handleChange function for workHistory
                                // onChange={handleChange}
                                // value={userName.text}
                            >
                            </input>
                        </div>
                        
                        <label htmlFor='dateRange'>
                            Date Range
                        </label>
                        <input
                            id='dateRange'
                            // make a separate handleChange function for workHistory
                            // onChange={handleChange}
                            // value={userName.text}
                        >
                        </input>
                        <label htmlFor='details'>
                            Job Details
                        </label>
                        <textarea
                            id='details'
                        />
                        <span
                            // data-name='title'
                            className='material-icons submit--btn'
                            onClick={toggleSubmit}>
                            done
                        </span>
                    </div>
                :   <div className='workHistory--container info'>
                        <div className='workHistory--title'>
                            <h3>
                                {workHistory[0].title}
                            </h3>
                        </div>
                        <div className='workHistory--company'>
                            <h4>
                                {workHistory[0].company}
                            </h4>
                            <span className='verticalBreak'>|</span>
                        </div>
                        <div className='workHistory--dateRange'>
                            <h4>
                                {workHistory[0].dateRange}
                            </h4>
                        </div>
                        <span 
                            className='material-icons workHistory--edit--btn'
                            onClick={toggleEdit}
                            id={workHistory[0].id}
                            data-name='workHistory'>
                            mode_edit
                        </span>
                        <div className='workHistory--details'>
                            <p>
                                {workHistory[0].details}
                            </p>
                        </div>
                    </div>
                } 
            </div>
              
        )
    }
}

export default WorkHistory;