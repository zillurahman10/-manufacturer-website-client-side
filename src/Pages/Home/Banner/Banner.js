import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className='banner'>
                <div className='text-centent text-light align-items-center'>
                    <h3 className='text-3xl' data-aos="fade-up" data-aos-duration="3000">NEW TECHNOLOGY AND BUILD</h3>
                    <h1 className='text-6xl'>WHEELS AND TIRES</h1>
                    <h1 className='text-6xl'>COLLECTIONS</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;