import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    console.log(user);
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])
    return (
        <div>
            <h5>My Orders : {orders.length}</h5>
            <div class="overflow-x-auto">
                <table class="table" style={{ width: '1000px' }}>
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Order ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {orders.map(order => <tr>
                            <th>1</th>
                            <td>{orders[0].tool.name}</td>
                            <td>{orders[0].tool.price}</td>
                            <td>{orders[0].tool._id}</td>
                            <td><button class="btn btn-xs">Pay</button>

                                <button class="btn btn-xs">Cancel</button>

                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;