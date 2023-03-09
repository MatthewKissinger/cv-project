import React from 'react';
import '../styles/generalInfo.css'

class GeneralInfo extends React.Component {
    
    render() {
        
        const { userName, userTitle, userPhone, userEmail, userStreet, userCity, toggleClick } = this.props;
        
        return (
            <div className='general--container'>
                <div className='general--left'>
                    <h1
                        className='general--name input'>
                        {userName.text}
                        <span 
                            className='material-icons edit--btn'
                            onClick={toggleClick}
                            id='name'
                            >
                            mode_edit
                        </span>
                    </h1>
                    <h3 
                        onClick={toggleClick}
                        className='general--title input'
                        id='title'
                        >{userTitle}
                    </h3>
                </div>
                <div className='general--right'>
                    <div className='general--phone'>
                        <i className='material-icons'>phone</i>
                        <p 
                            onClick={toggleClick}
                            id='phone'
                            className='input'>
                            {userPhone}
                        </p>
                    </div>
                    <div className='general--email'>
                        <i className='material-icons'>mail</i>
                        <p
                            onClick={toggleClick}
                            id='email'
                            className='input'>
                            {userEmail}
                        </p>
                    </div>
                    <div className='general--address'>
                        <i className='material-icons'>place</i>
                        <div>
                            <p
                                onClick={toggleClick}
                                id='addressStreet'
                                className='input'
                                >
                                {userStreet}
                            </p>
                            <p
                                onClick={toggleClick}
                                id='addressCity'
                                className='input'
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