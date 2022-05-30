import React from 'react';
import myPic from '../../assets/real.png'

const MyPortfolio = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={myPic} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">MD. Zillur Rahman</h1>
                        <p class="py-6">Email : zillur.hero40@gmail.com</p>
                        <p>Educational Background : I am studying in class 6 at Ideal School and College. Motijheel, Dhaka-1000</p>
                        <p>Skills : 1. I am good in javascript.
                            <br />
                            2. I am also good in ReactJS.
                            3. I am experienced in React Native.
                            4. I am also experienced in Typescript.
                        </p>
                        <p>Project : 1. <a href="zillur-rahman.netlify.app">My Portfolio website</a>
                            <br />
                            2. <a href="https://cardotcom-30121.web.app/">A full stack website</a>
                            <br />
                            3. <a href="https://doc-fine.web.app/">A simple authentication</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;