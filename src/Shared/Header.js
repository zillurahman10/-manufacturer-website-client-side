import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import logo from '../assets/logo.jpg'

const Header = () => {
    const [user] = useAuthState(auth)
    const logOut = () => {
        signOut(auth)
    }

    return (
        <div className='flex justify-content-between my-4'>
            <div>
                <img style={{ width: '100px' }} src={logo} alt="" />
            </div>
            <div>
                <Link className='mx-3 text-decoration-none text-black font-bold' to='/'>Home</Link>
                {user && <>
                    <Link className='mx-3 text-decoration-none text-black font-bold' to='/dashboard'>Dashboard</Link>
                </>}
                <Link className='mx-3 text-decoration-none text-black font-bold' to='/'>Blogs</Link>
                <Link to='/myportfolio'></Link>
            </div>
            <div>
                {user ? <button onClick={logOut} className='mx-3 font-bold border-none bg-white'>Sign Out</button> : <>
                    <Link style={{ borderRight: '2px solid black' }} className='pr-4 text-decoration-none text-black font-bold' to="/login">LOGIN</Link>
                    <Link className='ml-4 text-decoration-none text-black font-bold' to='/signup'>REGISTER</Link>
                </>
                }
            </div>
        </div>
    );
};

export default Header;