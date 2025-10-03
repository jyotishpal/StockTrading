import { useState,useEffect } from "react";
import axios from 'axios';
function Orders() {
   const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    // Define an async function
    const fetchOrders = async () => {
      try {
        const res = await axios.get("https://stocktrading-backend.onrender.com");
        console.log(res.data);
        setAllOrders(res.data);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      }
    };

    // Call the function
    fetchOrders();
  }, []);
  if(allOrders.length==0){
  return (

    <div className="container px-5">
      <div className="row">
        <div>
          <div>
            <p className="openBook">
              <i class="fa-solid fa-book-open"></i>
            </p>
            <p className="text-center">You have't placed any orders today</p>
            <button className="btn btn-primary p-2 " id="orederBtn">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
    
  }
  return (
    <div className="container px-5 mt-3">
      <div className="row">
        {allOrders.map((order, index) => (
          <div key={index} className="col-12 mb-3">
            <div className="card p-3">
              <p>Order Name: {order.name}</p>
              <p>Quantity: {order.qty}</p>
              <p>Price: {order.price}</p>
              <p>Mode: {order.mode}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Orders;
