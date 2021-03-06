import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    console.log(user);
    const [orders, setOrders] = useState([])
    // const [singleOrder, setSingleOrder] = useState({})

    useEffect(() => {
        fetch(`https://aqueous-beyond-46423.herokuapp.com/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    // orders.map(order => setSingleOrder(order))

    // console.log(singleOrder);

    const deleteOrder = () => {
        // fetch(`https://aqueous-beyond-46423.herokuapp.com/orders/${orders?._id}`, {
        //     method: "DELETE"
        // })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        console.log('clicked');
    }
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
                            <td>{orders[0]?.tool?.name}</td>
                            <td>${orders[0]?.tool?.price}</td>
                            <td>{orders[0]?.tool?._id}</td>
                            <td>{(orders[0]?.tool?.price && !orders[0]?.tool?.paid) && <Link to={`/dashboard/payment/${orders[0].tool._id}`}><button class="btn btn-xs btn-success mr-2">Pay</button></Link>
                                // (orders[0].tool.price && !orders[0].tool.paid) && <button class="btn btn-xs btn-success mr-2">Pay</button>
                            }
                                <button onClick={deleteOrder} class="btn btn-xs btn-error">Cancel</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;