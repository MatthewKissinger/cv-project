import React from 'react';
import '../styles/generalInfo.css'

class GeneralInfo extends React.Component {
    
    render() {
        
        const { userName, userTitle, userPhone, userEmail, userStreet, userCity, toggleClick } = this.props;
        
        return (
            <div className='general--container'>
                <div className='general--left'>
                    <h1 
                        onClick={toggleClick}
                        className='general--name input'>
                        {userName}
                    </h1>
                    <h3 className='general--title input'>{userTitle}</h3>
                </div>
                <div className='general--right'>
                    <div className='general--phone input'>
                        <i className='material-icons'>phone</i>
                        <p>{userPhone}</p>
                    </div>
                    <div className='general--email input'>
                        <i className='material-icons'>mail</i>
                        <p>{userEmail}</p>
                    </div>
                    <div className='general--address input'>
                        <i className='material-icons'>place</i>
                        <div>
                            <p>{userStreet}</p>
                            <p>{userCity}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GeneralInfo;