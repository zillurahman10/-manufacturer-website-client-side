import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-content-around my-4'>
            <div>
                <h3 className='text-4xl'>LOGO</h3>
            </div>
            <div>
                <Link className='mx-3 text-decoration-none text-black font-bold' to='/'>HOME</Link>
                <Link className='mx-3 text-decoration-none text-black font-bold' to='/'>HOME</Link>
                <Link className='mx-3 text-decoration-none text-black font-bold' to='/'>HOME</Link>
                <Link className='mx-3 text-decoration-none text-black font-bold' to='/'>HOME</Link>
            </div>
            <div>
                <Link style={{ borderRight: '2px solid black' }} className='pr-4 text-decoration-none text-black font-bold' to="/">LOGIN</Link>
                <Link className='ml-4 text-decoration-none text-black font-bold' to='/'>REGISTER</Link>
            </div>
        </div>
    );
};

export default Header;