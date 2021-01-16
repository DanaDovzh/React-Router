import React from 'react';
import Chat from './Chat';

function ContactInfo({ firstName, lastName, phone, photo, describe, gender }) {
    return (
        <>
            <div className='contact__block'>
                <div className='contact__main'>
                    <div>
                        <img className='contact__avatar' src={photo} />
                    </div>
                    <div className='contact__info'>
                        <p className="contact-info-header">First name: <span>{firstName}</span></p>
                        <p className="contact-info-header">Last name: <span>{lastName}</span></p>
                        <p className="contact-info-header">gender: <span>{gender}</span></p>
                        <a className="contact-info-header" href={phone}>tel.: <span>{phone}</span></a>
                    </div>
                </div>
                <div className='contact__describe'>
                    {describe}
                </div>
            </div>
            <Chat
                firstName={firstName}
                photo={photo} />
        </>
    )
}

export default ContactInfo;