import React from 'react'
import '../styles/workHistory.css'

// style a placeholder WorkHistory Card with state

class WorkHistory extends React.Component {

    render() {
        const { workHistory, handleChange, toggleEdit, toggleSubmit} = this.props;

        return (
            <div className='workHistory--container info'>
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
                    data-name='workHistory'>
                    mode_edit
                </span>
                <div className='workHistory--details'>
                    <p>
                        {workHistory[0].details}
                    </p>
                </div>
                
            </div>
        )
    }
}

export default WorkHistory;