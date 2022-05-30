import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const [cardError, setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements()
    const handleSubmit = async e => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })

        setCardError(error?.message || setCardError(''))
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {
                    cardError && <p className='text-error'>{cardError}</p>
                }
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </>
    );
};

export default CheckoutForm;