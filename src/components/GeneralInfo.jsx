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
                        <p>555.641.2525</p>
                    </div>
                    <div className='general--email input'>
                        <p>jdoe@gmail.com</p>
                    </div>
                    <div className='general--address input'>
                        <p>123 Sesame St.</p>
                        <p>New York, Ny 10001</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default GeneralInfo;