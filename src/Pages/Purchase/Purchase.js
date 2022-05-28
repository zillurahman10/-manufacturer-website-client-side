import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom'
import auth from '../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams()
    const [tool, setTool] = useState([])
    useEffect(() => {
        const url = `https://nameless-sands-54366.herokuapp.com/tools/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])
    const formSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const phoneNumber = e.target.phoneNumber.value
        const address = e.target.address.value

        const order = { name, email, phoneNumber, address, tool }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200 mt-12">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <div className='bg-gray-200 p-12 flex justify-between w-50 mx-auto'>
                        <img style={{ width: '200px' }} src={tool.img} alt="" />
                        <div>
                            <h1 className="text-2xl font-bold">{tool.name}</h1>
                            <p>Minimum Order Quantity : {tool.minimumOrderQuantity}</p>
                            <p>Available Quantity : {tool.availableQuantity}</p>
                            <p>{tool.description}</p>
                            <button variant="contained" style={{ width: '50px' }}>+</button>
                            <input className='mx-2 pl-2 rounded-3 border' style={{ width: '100px', height: '50px' }} placeholder='Quantity' type="number" />
                            <button variant="contained" style={{ width: '50px' }}>-</button>
                        </div>
                    </div>
                    <form onSubmit={formSubmit} className='my-12  flex justify-center '>
                        <div>
                            <h4 className='text-center'>Place Your Order</h4>
                            <input name='name' style={{ width: '300px', margin: '7px 0' }} id="outlined-basic" value={user?.displayName} label="User Name" variant="outlined" />
                            <br />
                            <input name='email' style={{ width: '300px', margin: '7px 0' }} id="outlined-basic" value={user?.email} label="Email" variant="outlined" />
                            <br />
                            <input name='phoneNumber' style={{ width: '300px', margin: '7px 0' }} id="outlined-basic" label="Phone Number" variant="outlined" />
                            <br />
                            <input name='address' style={{ width: '300px', margin: '7px 0' }} id="outlined-basic" label="Address" variant="outlined" />
                            <br />
                            <input type="submit" value="Place Order" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;