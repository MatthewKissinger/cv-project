import '../styles/education.css'

export default function Education(props) {

    const { id, certification, school, dateRange, editMode, handleEducationChange, toggleEdit, toggleSubmit, toggleDelete} = props;

    return (
        <div>
            {editMode
            ?   <div className='education--inputs'>
                    <div className='input--container'>
                        <label htmlFor='certification'>
                            Certification
                        </label>
                        <input
                            data-name='certification'
                            id={id}
                            onChange={handleEducationChange}
                            value={certification}
                        >
                        </input>
                    </div>
                    <div className='input--container'>
                        <label htmlFor='school'>
                            School
                        </label>
                        <input
                            data-name='school'
                            id={id}
                            onChange={handleEducationChange}
                            value={school}
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
                            onChange={handleEducationChange}
                            value={dateRange}
                        >
                        </input>
                    </div>
                    <div className='input--btn--container'>
                        <span
                            data-name='education'
                            id={id}
                            className='material-icons submit--btn submit--education'
                            onClick={toggleSubmit}>
                            done
                        </span>
                        <span
                            data-name='education'
                            id={id}
                            className='material-icons delete--btn delete--education'
                            onClick={toggleDelete}>
                            delete
                        </span>
                    </div>
                </div>
            :   <div className='education--container info'>
                    <div className='education--certification'>
                        <h3>
                            {certification}
                        </h3>
                    </div>
                    <div className='education--school'>
                        <h4>
                            {school}
                        </h4>
                        <span className='verticalBreak'>|</span>
                    </div>
                    <div className='education--dateRange'>
                        <h4>
                            {dateRange}
                        </h4>
                    </div>
                    <span 
                        className='material-icons education--edit--btn'
                        onClick={toggleEdit}
                        id={id}
                        data-name='education'>
                        mode_edit
                    </span>
                </div>
            } 
        </div>    
    )
}

