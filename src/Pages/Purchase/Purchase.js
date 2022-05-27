import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom'
import auth from '../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams()
    console.log(id.id);
    const [tool, setTool] = useState([])
    useEffect(() => {
        const url = `https://nameless-sands-54366.herokuapp.com/tools/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div class="hero min-h-screen bg-base-200 mt-12">
            <div class="hero-content flex-col lg:flex-row">
                <div>
                    <div className='bg-gray-200 p-12 flex justify-between w-50 mx-auto'>
                        <img style={{ width: '200px' }} src={tool.img} alt="" />
                        <div>
                            <h1 class="text-2xl font-bold">{tool.name}</h1>
                            <p>Minimum Order Quantity : {tool.minimumOrderQuantity}</p>
                            <p>Available Quantity : {tool.availableQuantity}</p>
                            <p>{tool.description}</p>
                            <Button variant="contained" style={{ width: '50px' }}>+</Button>
                            <input className='mx-2 pl-2 rounded-3 border' style={{ width: '100px', height: '50px' }} placeholder='Quantity' type="number" />
                            <Button variant="contained" style={{ width: '50px' }}>-</Button>
                        </div>
                    </div>
                    <form className='my-12  flex justify-center '>
                        <div>
                            <h4 class='text-center'>Place Your Order</h4>
                            <TextField style={{ width: '300px', margin: '7px 0' }} id="outlined-basic" value={user?.displayName} label="User Name" variant="outlined" />
                            <br />
                            <TextField style={{ width: '300px', margin: '7px 0' }} id="outlined-basic" value={user?.email} label="Email" variant="outlined" />
                            <br />
                            <TextField style={{ width: '300px', margin: '7px 0' }} id="outlined-basic" label="Phone Number" variant="outlined" />
                            <br />
                            <TextField style={{ width: '300px', margin: '7px 0' }} id="outlined-basic" label="Address" variant="outlined" />
                            <br />
                            <Button variant="contained">Place Order</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;