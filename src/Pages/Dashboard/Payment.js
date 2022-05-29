import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
// import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loader from '../../Shared/Loader';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe
    ('pk_test_51L4nTCGzjXOYSMj4UoJQ1lGClynolnDGkdYMHcS5levys949cXX70LTTDMSCHXHWdszKrtIkjH2IRWONgqXxtpax00f6MwJZ1T');

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/orders/${id}`
    const [order, setOrder] = useState({})
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    console.log(order);

    return (
        <div className='flex justify-center'>
            <div>
                <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                    <div class="card-body">
                        <p className="text-success font-bold">Hello, {order.name}</p>
                        <h2 class="card-title">Pay for : {order.tool.name}</h2>
                        <p>Please pay : ${order.tool.price} </p>
                        <p>{order.tool.description}</p>
                    </div>
                </div>
                <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                    <div class="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;