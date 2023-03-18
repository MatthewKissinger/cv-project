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
                            <label htmlFor='jobTitle'>
                                Job Title
                            </label>
                            <input
                                data-name='jobTitle'
                                id={workHistory[0].id}
                                // make a separate handleChange function for workHistory
                                onChange={handleChange}
                                value={workHistory[0].jobTitle}
                            >
                            </input>
                        </div>
                        <div className='input--container'>
                            <label htmlFor='company'>
                                Company Name
                            </label>
                            <input
                                data-name='company'
                                id={workHistory[0].id}
                                // make a separate handleChange function for workHistory
                                onChange={handleChange}
                                value={workHistory[0].company}
                            >
                            </input>
                        </div>
                        <div className='input--container'>
                            <label htmlFor='dateRange'>
                                Date Range
                            </label>
                            <input
                                data-name='dateRange'
                                id={workHistory[0].id}
                                // make a separate handleChange function for workHistory
                                onChange={handleChange}
                                value={workHistory[0].dateRange}
                            >
                            </input>
                        </div>
                        <div className='input--container input--workHistory-details'>
                            <label htmlFor='details'>
                                Job Details
                            </label>
                            <textarea
                                data-name='details'
                                id={workHistory[0].id}
                                onChange={handleChange}
                                value={workHistory[0].details}
                            />
                        </div>
                        <span
                            data-name='workHistory'
                            id={workHistory[0].id}
                            className='material-icons submit--btn submit--workHistory'
                            onClick={toggleSubmit}>
                            done
                        </span>
                    </div>
                :   <div className='workHistory--container info'>
                        <div className='workHistory--title'>
                            <h3>
                                {workHistory[0].jobTitle}
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