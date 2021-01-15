import React from 'react';
// import "../css/contact.css";
import LinksContacts from '../PagesConstructor/LinksContacts';
function setGender (gender) {
    switch (gender) {
        case "male": return "maleSign";
        case "female": return "femaleSign";
        default: return "otherSign";
    }
}

function Contact({firstName, lastName, gender, photo, phone, id}) {
    return (
        <details>
            <summary className = "contact-title">{lastName} {firstName}</summary>
            <div className = "contact">
                <div >
                    <p className = {setGender(gender)}>
                        <img src = {photo} />
                    </p>
                </div>
                <div className = "contact-info">
                    <p className = "contact-info-header">name: <span>{firstName}</span></p>
                    <p className = "contact-info-header">last name: <span>{lastName}</span></p>  
                    <a  className = "contact-info-header" href={phone}>tel.: <span>{phone}</span></a>
                    <p><LinksContacts props={id}/></p>
                </div>
            </div>
        </details>
    )
}

export default Contact;
