import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
            <div class="drawer drawer-mobile">
                <div class="drawer-content flex flex-col items-center justify-center mx-auto">

                    <h1 className='text-red-600'>Dashboard</h1>

                    <Outlet></Outlet>


                </div>
                <div class="drawer-side bg-gray-500 pt-12" style={{ width: '300px', height: '400px' }}>
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 mx-12">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link className='text-decoration-none text-black font-bold' to='/dashboard'>Dashboard</Link></li>
                        <li><Link className='text-decoration-none text-black font-bold' to='/dashboard/myprofile'>My Profile</Link></li>
                        <li><Link className='text-decoration-none text-black font-bold' to='/dashboard/addareview'>Add A Review</Link></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;