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
                                data-name='name'>
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
                                    data-name='title'>
                                    mode_edit
                                </span>
                            </h3>
                        </div>
                    }     
                </div>
                <div className='general--right'>
                    <div className='general--phone'>
                        <i className='material-icons'>phone</i>
                        {userPhone.editMode 
                            ? <div>
                                <input
                                    data-name='phone'
                                    onChange={handleChange}
                                    value={userPhone.text}
                                    >
                                </input>
                                <span
                                    data-name='phone'
                                    className='material-icons submit--btn'
                                    onClick={toggleSubmit}>
                                        done
                                </span>
                            </div>
                            : <div className='info'>
                                <p>
                                {userPhone.text} 
                                </p>
                                <span 
                                    className='material-icons edit--btn'
                                    onClick={toggleEdit}
                                    data-name='phone'>
                                    mode_edit
                                </span>
                            </div>   
                        }  
                    </div>
                    <div className='general--email info'>
                        <i className='material-icons'>mail</i>
                        {userEmail.editMode 
                            ? <div>
                                <input
                                    data-name='email'
                                    onChange={handleChange}
                                    value={userEmail.text}
                                    >
                                </input>
                                <span
                                    data-name='email'
                                    className='material-icons submit--btn'
                                    onClick={toggleSubmit}>
                                        done
                                </span>
                            </div>
                            : <div className='info'>
                                <p>
                                {userEmail.text} 
                                </p>
                                <span 
                                    className='material-icons edit--btn'
                                    onClick={toggleEdit}
                                    data-name='email'>
                                    mode_edit
                                </span>
                            </div>
                        }
                    </div>
                    <div className='general--address'>
                        <i className='material-icons'>place</i>
                        <div>
                            {userStreet.editMode
                                ? <div>
                                    <input
                                        data-name='addressStreet'
                                        onChange={handleChange}
                                        value={userStreet.text}
                                        >
                                    </input>
                                    <span
                                        data-name='addressStreet'
                                        className='material-icons submit--btn'
                                        onClick={toggleSubmit}>
                                            done
                                    </span>
                                </div>
                                : <div>
                                    <p
                                        className='info'
                                        onClick={toggleEdit}
                                        data-name='addressStreet'>
                                        {userStreet.text}
                                        <span 
                                        className='material-icons edit--btn'
                                        onClick={toggleEdit}
                                        data-name='addressStreet'>
                                        mode_edit
                                    </span>
                                    </p>  
                                </div>

                            }     
                            {userCity.editMode
                                ? <div>
                                    <input
                                        data-name='addressCity'
                                        onChange={handleChange}
                                        value={userCity.text}
                                        >
                                    </input>
                                    <span
                                        data-name='addressCity'
                                        className='material-icons submit--btn'
                                        onClick={toggleSubmit}>
                                            done
                                    </span>
                                </div>
                                : <div>
                                    <p
                                        className='info'
                                        onClick={toggleEdit}
                                        data-name='addressCity'>
                                        {userCity.text}
                                        <span 
                                        className='material-icons edit--btn'
                                        onClick={toggleEdit}
                                        data-name='addressCity'>
                                        mode_edit
                                    </span>
                                    </p>  
                                </div>
                            }     
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GeneralInfo;