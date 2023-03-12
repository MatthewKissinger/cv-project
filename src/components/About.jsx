import React from 'react'
import '../styles/about.css'

class About extends React.Component {

    render() {
        const { about, handleChange, toggleEdit, toggleSubmit} = this.props;

        return (
            <div className='about--container'>
                {about.editMode 
                        ? <div
                            className='info'
                            >
                            <textarea
                            className='about--textarea'
                            data-name='about'
                            onChange={handleChange}
                            value={about.text}
                            />
                            <span
                                data-name='about'
                                className='material-icons submit--btn'
                                onClick={toggleSubmit}>
                                    done
                            </span>
                        </div>     
                        : <div
                            className='info'>
                            <p className='about--para'>
                                {about.text}
                            </p>
                            <span 
                                className='material-icons edit--btn'
                                onClick={toggleEdit}
                                data-name='about'>
                                mode_edit
                            </span>
                          </div>    
                } 
            </div>
        )
    }
}

export default About;