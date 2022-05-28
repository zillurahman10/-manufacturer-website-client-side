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
        <div className="hero min-h-screen mt-12">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <div className='bg-gray-200 p-12 flex justify-between w-50 mx-auto'>
                        <img style={{ width: '200px' }} src={tool.img} alt="" />
                        <div>
                            <h1 className="text-2xl font-bold">{tool.name}</h1>
                            <p>Minimum Order Quantity : {tool.minimumOrderQuantity}</p>
                            <p>Available Quantity : {tool.availableQuantity}</p>
                            <p>{tool.description}</p>
                            <button class="btn btn-active btn-primary">+</button>

                            <input className='mx-2 pl-2 rounded-3 border' style={{ width: '100px', height: '50px' }} placeholder='Quantity' type="number" />
                            <button class="btn btn-active btn-error">-</button>

                        </div>
                    </div>
                    <form onSubmit={formSubmit} className='my-12  flex justify-center '>
                        <div>
                            <h4 className='text-center'>Place Your Order</h4>
                            <input type="text" disabled placeholder="Name" value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                            <br />
                            <input type="email" disabled placeholder="Email" value={user.email} class="input input-bordered w-full max-w-xs" />
                            <br />
                            <input type="number" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                            <br />
                            <input type="text" placeholder="Address" class="input input-bordered w-full max-w-xs" />
                            <br />
                            <input className='btn btn-secondary w-50 mx-auto' type="submit" value="Place Order" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;