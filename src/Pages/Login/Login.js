import { Button, TextField } from '@mui/material';
import React from 'react';
import googleLogo from '../../assets/google logo.png'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    const [user, loading, error] = useAuthState(auth)
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    return (
        <div className='mt-5 pt-5 bg-gray-200 mx-auto rounded-3' style={{ height: '500px', width: '500px' }}>
            <h3 className='text-center'>LOGIN</h3>
            <div className='flex justify-center' >
                <div className='mt-3'>
                    <TextField type='email' id="standard-basic" label="Email" variant="standard" required style={{ width: '300px' }} />
                    <br />
                    <TextField type='password' id="standard-basic" label="Password" variant="standard" required style={{ width: '300px' }} />
                    <p className='text-danger'>{error?.message}</p>
                    <br />
                    <Button className='mt-3 w-100' variant="contained">LOGIN</Button>
                    <br />
                    {loading ? <button class="btn loading">loading</button>
                        : <Button onClick={() => signInWithGoogle()} className='mt-3 w-100' variant="outlined"><img style={{ width: '30px', marginRight: '10px' }} src={googleLogo} alt="" /> Sign in with google</Button>}
                </div>
            </div>
        </div>
    );
};

export default Login;