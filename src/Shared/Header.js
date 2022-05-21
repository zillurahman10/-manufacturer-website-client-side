import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex justify-content-around my-4'>
            <div>
                <h3 className='text-4xl'>LOGO</h3>
            </div>
            <div>
                <Link to='/'>HOME</Link>
                <Link to='/'>HOME</Link>
                <Link to='/'>HOME</Link>
                <Link to='/'>HOME</Link>
            </div>
            <div>
                <Link to="/">LOGIN</Link>
                <Link to='/'>REGISTER</Link>
            </div>
        </div>
    );
};

export default Header;