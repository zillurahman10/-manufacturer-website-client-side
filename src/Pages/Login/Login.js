import React from 'react';
import googleLogo from '../../assets/google logo.png'
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        Suser,
        Sloading,
        Serror,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/')
    }
    return (
        <div className='mt-5 pt-5 bg-gray-200 mx-auto rounded-3' style={{ height: '500px', width: '500px' }}>
            <h3 className='text-2xl font-bold text-center'>LOGIN</h3>
            <form onSubmit={handleSubmit} className='flex justify-center' >
                <div className='mt-3'>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
                    <br />
                    <label htmlFor="password" className='mt-5'>Your Password</label>
                    <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" />
                    <p className='text-danger'>{error?.message}</p>
                    <br />
                    <p className='text-center'>New in CarBD? <Link className='text-secondary' to='/signup'>Sign Up</Link></p>
                    {/* <input type='submit' className='btn btn-accent w-full mt-3 w-100'>LOGIN</input> */}
                    <br />
                    <button onClick={() => signInWithGoogle()} className='btn btn-accent mt-3 w-full ' ><img style={{ width: '30px', marginRight: '10px' }} className='align-center' src={googleLogo} alt="" /> Sign in with google</button>
                </div>
            </form>
        </div>
    );
};

export default Login;