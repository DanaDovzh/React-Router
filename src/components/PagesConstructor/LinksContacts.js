import React from 'react';
import {NavLink} from 'react-router-dom';

function LinksContacts ({props}) {
    return (
            <NavLink to={`/contacts/${props}`} key={props}>More...</NavLink>
    )
}

export default LinksContacts;