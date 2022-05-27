import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const navigate = useNavigate()

    const { name, price, img, description, _id } = tool

    const changePage = () => {
        navigate(`purchase/${_id}`)
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>${price} (per unit)</p>
                    <div class="card-actions">
                        <Button onClick={changePage} variant="contained">Buy Now</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;