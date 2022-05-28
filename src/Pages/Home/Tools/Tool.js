import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const navigate = useNavigate()

    const { name, price, img, description, _id } = tool

    const changePage = () => {
        navigate(`purchase/${_id}`)
    }
    return (
        <div className='m-5'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>${price} (per unit)</p>
                    <div className="card-actions">
                        <button onClick={changePage} className='btn btn-accent'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;