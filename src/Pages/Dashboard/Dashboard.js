import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile ">
            <div className="drawer-content">
                <div className='flex justify-between'>
                    <h1 className='text-purple-600'>Welcome to Dashboard</h1>
                </div>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-gray-500" >
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 mx-12">
                    <li><Link className='text-decoration-none text-black font-bold' to='/dashboard'>My Orders</Link></li>
                    <li><Link className='text-decoration-none text-black font-bold' to='/dashboard/myprofile'>My Profile</Link></li>
                    <li><Link className='text-decoration-none text-black font-bold' to='/dashboard/addareview'>Add A Review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;