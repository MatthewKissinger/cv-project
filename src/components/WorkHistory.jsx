import '../styles/workHistory.css'

export default function WorkHistory(props) {

    const { id, jobTitle, company, dateRange, details, editMode, handleWorkChange, toggleEdit, toggleSubmit, toggleDelete} = props;

    return (
        <div>
            {editMode
            ?   <div className='workHistory--inputs'>
                    <div className='input--container'>
                        <label htmlFor='jobTitle'>
                            Job Title
                        </label>
                        <input
                            data-name='jobTitle'
                            id={id}
                            onChange={handleWorkChange}
                            value={jobTitle}
                        >
                        </input>
                    </div>
                    <div className='input--container'>
                        <label htmlFor='company'>
                            Company Name
                        </label>
                        <input
                            data-name='company'
                            id={id}
                            onChange={handleWorkChange}
                            value={company}
                        >
                        </input>
                    </div>
                    <div className='input--container'>
                        <label htmlFor='dateRange'>
                            Date Range
                        </label>
                        <input
                            data-name='dateRange'
                            id={id}
                            onChange={handleWorkChange}
                            value={dateRange}
                        >
                        </input>
                    </div>
                    <div className='input--container input--workHistory-details'>
                        <label htmlFor='details'>
                            Job Details
                        </label>
                        <textarea
                            data-name='details'
                            id={id}
                            onChange={handleWorkChange}
                            value={details}
                        />
                    </div>
                    <div className='workHistory--btn--container'>
                        <span
                            data-name='workHistory'
                            id={id}
                            className='material-icons submit--btn submit--workHistory'
                            onClick={toggleSubmit}>
                            done
                        </span>
                        <span
                            data-name='workHistory'
                            id={id}
                            className='material-icons delete--btn delete--workHistory'
                            onClick={toggleDelete}>
                            delete
                        </span>
                    </div>
                    
                </div>
            :   <div className='workHistory--container info'>
                    <div className='workHistory--title'>
                        <h3>
                            {jobTitle}
                        </h3>
                    </div>
                    <div className='workHistory--company'>
                        <h4>
                            {company}
                        </h4>
                        <span className='verticalBreak'>|</span>
                    </div>
                    <div className='workHistory--dateRange'>
                        <h4>
                            {dateRange}
                        </h4>
                    </div>
                    <span 
                        className='material-icons workHistory--edit--btn'
                        onClick={toggleEdit}
                        id={id}
                        data-name='workHistory'>
                        mode_edit
                    </span>
                    <div className='workHistory--details'>
                        <p>
                            {details}
                        </p>
                    </div>
                </div>
            } 
        </div>    
    )

}
