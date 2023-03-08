import React from 'react';

class GeneralInfo extends React.Component {
    render() {
        return (
            <div className='general--container'>
                <div className='general--left'>
                    <h1 className='general--name'>John Doe</h1>
                    <h3 className='general--title'>Software Developer</h3>
                </div>
                <div className='general--right'>
                    <div className='general--phone'>555.641.2525</div>
                </div>
            </div>
        )
    }
}

export default GeneralInfo;