import React, { useEffect, useState } from 'react';

const AddAReview = () => {
    const [review, setReview] = useState([])
    const [getReview, setGetReview] = useState([])
    const formSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value
        const review = e.target.review.value
        const fullReview = { name, review }
        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(fullReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    setReview(fullReview)
                }
            })
        console.log(name);
        console.log(review);
    }
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setGetReview(data))
    }, [])
    return (
        <div>
            <h1>Reviews</h1>
            <div className='grid grid-rows-3 grid-flow-col gap-3'>
                {
                    getReview.map(r => <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">{r?.name}</h2>
                            <p>Review : {r?.review}</p>
                        </div>
                    </div>)
                }
            </div>
            <form onSubmit={formSubmit} style={{ width: '400px' }} className='mx-auto bg-blue-100 p-12 mt-12'>
                <h3 className='text-center font-bold text-2xl mb-4'>Post Your Review</h3>
                <input type="text" placeholder="Your Name" name='name' class="input input-bordered w-full mx-auto mb-5" />
                <br />
                <textarea class="textarea textarea-bordered w-full" placeholder="Review" name='review'></textarea>
                <br />
                <input className='btn w-50 mx-auto' type="submit" value="Post" />
            </form>
        </div>
    );
};

export default AddAReview;