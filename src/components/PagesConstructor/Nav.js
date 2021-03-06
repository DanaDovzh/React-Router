import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <div className='nav-pages'>
            <NavLink to='/mainPage' className='nav-link' activeClassName="active">Main</NavLink>
            <NavLink to='/posts' className='nav-link' activeClassName="active">Posts</NavLink>
            <NavLink to='/contacts' className='nav-link' activeClassName="active">Contacts</NavLink>
            <NavLink to='/imagesPage' className='nav-link' activeClassName="active">Images</NavLink>
        </div>
    )
}