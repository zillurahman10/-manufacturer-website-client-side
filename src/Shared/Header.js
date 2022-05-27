import { SingleBedOutlined } from '@mui/icons-material';
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
        <div className='flex justify-content-around my-4'>
            <div>
                <img style={{ width: '100px' }} src={logo} alt="" />
            </div>
            <div>
                <Link className='mx-3 text-decoration-none text-black font-bold' to='/'>Home</Link>
                {user && <>
                    <Link className='mx-3 text-decoration-none text-black font-bold' to='/dashboard'>Dashboard</Link>
                    <Link className='mx-3 text-decoration-none text-black font-bold' to='/'>My Orders</Link>
                    <Link className='mx-3 text-decoration-none text-black font-bold' to='/'>Add A Review</Link>
                    <Link className='mx-3 text-decoration-none text-black font-bold' to='/'>My Profile</Link>
                </>}
                <Link className='mx-3 text-decoration-none text-black font-bold' to='/'>Blogs</Link>
            </div>
            <div>
                {user ? <button onClick={logOut} className='text-bold'>Sign Out</button> : <>
                    <Link style={{ borderRight: '2px solid black' }} className='pr-4 text-decoration-none text-black font-bold' to="/login">LOGIN</Link>
                    <Link className='ml-4 text-decoration-none text-black font-bold' to='/signup'>REGISTER</Link>
                </>
                }
            </div>
            {/* {user ? <div class="avatar d-inline" >
                <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} alt='' />
                </div>
            </div>
                :
                <div class="avatar placeholder">
                    <div class=" text-neutral-content rounded-full w-12">
                        <span>A</span>
                    </div>
                </div>} */}
        </div>
    );
};

export default Header;