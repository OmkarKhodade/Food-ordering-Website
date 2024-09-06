import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"
import {assets} from "../../assets/assets"

const MyOrders = () => {

    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
        setData(response.data.data);


    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token])

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className="container">
                {data.map((order, index) => {
                    return (
                        <div key={index} className="my-orders-order">
                            <img src={assets.parcel_icon} alt="" />
                            <p>{order.items.map((item, index) => {
                                if (index === order.items.length - 1) {
                                    return item.name + " X " + item.quantity
                                }
                                else {
                                    return item.name + " X " + item.quantity + ", "
                                }
                            })}</p>
                            <p>${order.amount}.00</p>
                            <p>Items: {order.items.length}</p>
                            <p><span>&#x25cf;</span><b>{order.status}</b></p>
                            <button onClick={fetchOrders}>Track Order</button>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default MyOrders





// import React, { useContext, useEffect, useState } from 'react';
// import './MyOrders.css';
// import { StoreContext } from '../../context/StoreContext';
// import axios from 'axios';
// import assets from "../../assets/assets"; // Uncomment this if you need to use `assets.parcel_icon`

// const MyOrders = () => {
//     const { url, token } = useContext(StoreContext);
//     const [data, setData] = useState([]);

//     const fetchOrders = async () => {
//         try {
//             const response = await axios.post(url + "/api/order/userorders", {}, { headers: { Authorization: `Bearer ${token}` } });
//             setData(response.data.data);
//         } catch (error) {
//             console.error("Error fetching orders:", error);
//             // You can add some user feedback here, like setting an error state and displaying a message.
//         }
//     };

//     useEffect(() => {
//         if (token) {
//             fetchOrders();
//         }
//     }, [token]);

//     return (
//         <div className='my-orders'>
//             <h2>My Orders</h2>
//             <div className="container">
//                 {data.length > 0 ? (
//                     data.map((order, index) => (
//                         <div key={index} className="my-orders-order">
//                             <img src={assets.parcel_icon} alt="Parcel Icon" />
//                             <p>
//                                 {order.items.map((item, index) => {
//                                     return index === order.items.length - 1
//                                         ? `${item.name} X ${item.quantity}`
//                                         : `${item.name} X ${item.quantity}, `;
//                                 })}
//                             </p>
//                             <p>${order.amount}.00</p>
//                             <p>Items: {order.items.length}</p>
//                             <p><span>&#x25cf;</span><b>{order.status}</b></p>
//                             <button>Track Order</button>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No orders found.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default MyOrders;
