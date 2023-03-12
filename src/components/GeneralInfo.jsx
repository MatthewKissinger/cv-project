import React from 'react';
import '../styles/generalInfo.css'

class GeneralInfo extends React.Component {
    
    render() {
        
        const { userName, userTitle, userPhone, userEmail, userStreet, userCity, handleChange, toggleEdit } = this.props;
        
        return (
            <div className='general--container'>
                <div className='general--left'>
                    {userName.editMode 
                        ? <div
                            className='general--name info'
                            >
                            <input
                            data-name='name'
                            onChange={handleChange}
                            value={userName.text}
                            // add onChange handler 
                            className='input--name'
                            >
                            </input>
                            <span
                                data-name='name'
                                className='material-icons submit--btn'>
                                    done
                            </span>
                        </div>     
                        : <div
                            className='general--name info'>
                            <h1>{userName.text}</h1>
                            <span 
                                className='material-icons edit--btn'
                                onClick={toggleEdit}
                                id='name'>
                                mode_edit
                            </span>
                          </div>    
                    } 
                    <h3 
                        onClick={toggleEdit}
                        className='general--title info'
                    >   
                        {userTitle}
                         <span 
                            className='material-icons edit--btn'
                            onClick={toggleEdit}
                            id='title'>
                            mode_edit
                        </span>
                    </h3>
                </div>
                <div className='general--right'>
                    <div className='general--phone info'>
                        <i className='material-icons'>phone</i>
                        <p 
                            onClick={toggleEdit}
                        >
                            {userPhone}
                            
                        </p>
                        <span 
                            className='material-icons edit--btn'
                            onClick={toggleEdit}
                            id='phone'>
                            mode_edit
                        </span>
                    </div>
                    <div className='general--email'>
                        <i className='material-icons'>mail</i>
                        <p
                            onClick={toggleEdit}
                            id='email'
                        >
                            {userEmail}
                        </p>
                    </div>
                    <div className='general--address'>
                        <i className='material-icons'>place</i>
                        <div>
                            <p
                                onClick={toggleEdit}
                                id='addressStreet'
                            >
                                {userStreet}
                            </p>
                            <p
                                onClick={toggleEdit}
                                id='addressCity'                    
                            >
                                {userCity}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GeneralInfo;