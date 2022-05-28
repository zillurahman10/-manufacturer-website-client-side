import React from 'react';
import googleLogo from '../../assets/google logo.png'
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        cUser,
        cLoading,
        cError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/')
    }
    return (
        <div>
            <div className='mt-5 pt-5 bg-gray-200 mx-auto rounded-3' style={{ height: '500px', width: '500px' }}>
                <h3 className='text-center'>LOGIN</h3>
                <form onSubmit={handleSubmit} className='flex justify-center' >
                    <div className='mt-3'>
                        <input type='text' id="standard-basic" label="Name" variant="standard" name='name' required style={{ width: '300px' }} />
                        <br />
                        <input type='email' id="standard-basic" label="Email" variant="standard" name='email' required style={{ width: '300px' }} />
                        <br />
                        <input type='password' id="standard-basic" label="Password" name='password' variant="standard" required style={{ width: '300px' }} />
                        <br />
                        <label htmlFor="">
                            Image
                            <br />
                            <input type='file' id="standard-basic" label="image" variant="standard" />
                        </label>
                        <p className='text-danger'>{error?.message}</p>
                        <br />
                        <button className='mt-3 w-100' variant="contained">LOGIN</button>
                        <br />
                        {<button onClick={() => signInWithGoogle()} className='mt-3 w-100' variant="outlined"><img style={{ width: '30px', marginRight: '10px' }} src={googleLogo} alt="" /> Sign in with google</button>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;