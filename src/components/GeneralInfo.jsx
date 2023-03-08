import React from 'react';
import '../styles/generalInfo.css'

class GeneralInfo extends React.Component {
    render() {
        return (
            <div className='general--container'>
                <div className='general--left'>
                    <h1 className='general--name input'>Matt Kissinger</h1>
                    <h3 className='general--title input'>Software Developer</h3>
                </div>
                <div className='general--right'>
                    <div className='general--phone input'>
                        <i className='material-icons'>phone</i>
                        <p>773.698.4956</p>
                    </div>
                    <div className='general--email input'>
                        <i className='material-icons'>mail</i>
                        <p>matthew.t.kissinger@gmail.com</p>
                    </div>
                    <div className='general--address input'>
                        <i className='material-icons'>place</i>
                        <div>
                            <p>10506 Riverside Dr.</p>
                            <p>Toluca Lake, CA 91602</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GeneralInfo;