import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Stats from './components/Stats';
import './components/bootstrap.css';
import './components/font-awesome.css';
import './components/orders.css';
import axios from 'axios';

function App() {




    const [data, setData] = useState({
        infulfilled: 100,
        fulfilled: 50,
        delivered: 60,
        returned: 74
    });




    const [ordersList, setOrdersList] = useState([]);



    const [total_orders, setTotalOrders] = useState(0);

    const fetchOrders = async () => {
        try{
            let response = await axios.get("http://127.0.0.1:8000/orders/");
            const orders = response.data.orders; 
            setOrdersList(orders);
        }catch(error){
            console.log(error)
        }
        
    }

    useEffect(() => {

       
        const RequestData = async () => {
            try {
                let response = await axios.get("http://127.0.0.1:8000/orders/");
                let infulfiled_count = 0;
                let fulfiled_count = 0;
                let returned_count = 0;
                let delivered_count = 0;
                
                const orders = response.data.orders;

                for (let i = 0; i < orders.length; i++) {
                    const element = orders[i];
                    if (element.status === "INFULFILED") {
                        infulfiled_count++;
                    } else if (element.status === "FULFILED") {
                        fulfiled_count++;
                    } else if (element.status === "RETURNED") {
                        returned_count++;
                    }else if (element.status === "DELIVERED") {
                        delivered_count++;
                }}

                setData({
                    infulfilled: infulfiled_count,
                    fulfilled: fulfiled_count,
                    delivered: delivered_count,
                    returned: returned_count
                })

                setTotalOrders(orders.length);
                console.log(orders);
                setOrdersList(orders);



            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };

        RequestData();
    }, []);

    // const addOrder = (newOrder) => {
    //     setOrdersList([...ordersList, newOrder]);
    // }




    return (
        <html className="fixed sidebar-left-collapsed inner-menu-opened js flexbox flexboxlegacy no-touch csstransforms csstransforms3d no-overflowscrolling no-mobile-device custom-scroll">
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <title>Expéditeur</title>
                <style type="text/css" id="operaUserStyle"></style>
                
                <style>
                    {`.panel-heading .btn-default {
                        border-color: #d4313c !important;
                        background-color: #d4313c;
                        color: #fff;
                    }`}
                </style>
                <style>
                    {`
                   
                    #LoadingOverlayApi {
                        background-color: rgb(255, 255, 255);
                        border-radius: 80px;
                        height: 80px;
                        line-height: 80px;
                        margin: 0 auto;
                        text-align: center;
                        width: 80px;
                        position: absolute;
                        z-index: 99999;
                        top: 360px;
                        left: 0;
                        right: 0;
                        box-shadow: 0px 0px 13px 0px #04040414;
                        display: none !important;
                    }

                    .loader {
                        border: 10px solid #f3f3f3; /* Light grey */
                        border-top: 10px solid #3498db; /* Blue */
                        border-radius: 50%;
                        width: 50px;
                        height: 50px;
                        animation: spin 2s linear infinite;
                    }

                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }

                    .table-responsive {
                        overflow: hidden;
                    }

                    .ord a, .ordDESC a {
                        color: #777;
                    }

                    .dataTables_wrapper table thead th {
                        padding-right: 8px !important;
                    }

                    .hrefHover:hover .panel {
                        box-shadow: 0 1px 6px 5px rgba(0, 0, 0, 0.05);
                        transition: all 0.3s;
                    }

                    .panel {
                        border: 1px solid #f7f7f7;
                    }
                    `}
                </style>
            </head>
            <body>
                <section className="body">
                    <div className="inner-wrapper">
                        <section role="main" className="content-body">
                            <header className="page-header">
                                <h2>List of Orders</h2>
                                <div id="LoadingOverlayApi" className="loading-overlay-showing">
                                    <div className="loading-overlay">
                                        <div className="loader black"></div>
                                    </div>
                                </div>
                            </header>
                            {<Stats  data={data} total_orders={total_orders} />}
                            {ordersList && ordersList.length > 0 && <Table data={ordersList} fetchOrders={fetchOrders} />}
                        </section>
                    </div>
                </section>

            </body>
        </html>
    );
}

export default App;
