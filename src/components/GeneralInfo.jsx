import React from 'react';
import '../styles/generalInfo.css'

class GeneralInfo extends React.Component {
    
    render() {
        
        const { userName, userTitle, userPhone, userEmail, userStreet, userCity, handleChange, toggleEdit, toggleSubmit } = this.props;
        
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
                            className='input--name'
                            >
                            </input>
                            <span
                                data-name='name'
                                className='material-icons submit--btn'
                                onClick={toggleSubmit}>
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
                    {userTitle.editMode 
                        ? <div>
                            <input
                            data-name='title'
                            onChange={handleChange}
                            value={userTitle.text}
                            className='input--title'
                            >
                            </input>
                            <span
                                data-name='title'
                                className='material-icons submit--btn'
                                onClick={toggleSubmit}>
                                    done
                            </span>
                          </div>
                        : <div>
                            <h3 
                                onClick={toggleEdit}
                                className='general--title info'>   
                                {userTitle.text}
                                <span 
                                    className='material-icons edit--btn'
                                    onClick={toggleEdit}
                                    id='title'>
                                    mode_edit
                                </span>
                            </h3>
                        </div>
                    }     
                </div>
                <div className='general--right'>
                    <div className='general--phone info'>
                        <i className='material-icons'>phone</i>
                        <p 
                            onClick={toggleEdit}>
                            {userPhone} 
                        </p>
                        <span 
                            className='material-icons edit--btn'
                            onClick={toggleEdit}
                            id='phone'>
                            mode_edit
                        </span>
                    </div>
                    <div className='general--email info'>
                        <i className='material-icons'>mail</i>
                        <p
                            onClick={toggleEdit}
                            id='email'>
                            {userEmail}
                        </p>
                        <span 
                            className='material-icons edit--btn'
                            onClick={toggleEdit}
                            id='email'>
                            mode_edit
                        </span>
                    </div>
                    <div className='general--address'>
                        <i className='material-icons'>place</i>
                        <div>
                            <p
                                className='info'
                                onClick={toggleEdit}
                                id='addressStreet'>
                                {userStreet}
                                <span 
                                    className='material-icons edit--btn'
                                    onClick={toggleEdit}
                                    id='addressStreet'>
                                    mode_edit
                                </span>
                            </p>           
                            <p
                                className='info'
                                onClick={toggleEdit}
                                id='addressCity'>
                                {userCity}
                                <span 
                                    className='material-icons edit--btn'
                                    onClick={toggleEdit}
                                    id='addressCity'>
                                    mode_edit
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GeneralInfo;