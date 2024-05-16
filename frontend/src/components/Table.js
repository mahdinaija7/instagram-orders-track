import React, { useState, useEffect } from 'react';
import NewOrderModal from './NewOrderModal';
import EditOrderModal from './EditOrderModal';
import axios from 'axios';

function Table(props) {

    const [dataToEdit, setDataToEdit] = useState({
        "id": "",
        "client": "",
        "client_full_name": "",
        "client_order_city": "",
        "client_phone_number": "",
        "date": "",
        "product_names": "",
        "status": "",
        "price": ""
    });
    const { data, fetchOrders } = props;
    const [searchedVal, setSearchedVal] = useState("");


    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [editModalShow, setEditModalShow] = useState(false);
    const handleEditModalClose = () => setEditModalShow(false);
    const handleEditModalShow = () => setEditModalShow(true);

    const editOrder = async (event) => {
        event.preventDefault();
        const orderId = event.currentTarget.id;
        const order_url = `http://127.0.0.1:8000/orders/${orderId}`
        try {
            let response = await axios.get(order_url);
            console.log(response.data)
            setDataToEdit(response.data);
            console.log(dataToEdit)
            handleEditModalShow()
        } catch (error) {
            console.log(error)
        }


    }

    const deleteOrder = async (orderId) => {

        const order_url = `http://127.0.0.1:8000/orders/${orderId}`
        axios.delete(order_url)
            .then(response => {
                console.log(`Deleted post with ID ${orderId}`);
            })
            .catch(error => {
                console.error(error);
            });
        fetchOrders()
    }




    const TableRow = (props) => {
        const { rowData } = props;

        return (
            <>

                <tr className="row1">
                    <td align="left" width="120px">{data ? rowData.id : ""}</td>
                    <td align="left" width="140px">{data ? rowData.date : ""}</td>
                    <td align="left">{data ? rowData.client_full_name : ""}</td>
                    <td align="left">{data ? rowData.client_phone_number : ""}</td>
                    <td align="left">

                        <span style={{ cursor: 'help' }} data-toggle="tooltip" data-placement="top" title="" >{data ? rowData.client_order_city : ""}</span>
                    </td>
                    <td align="left">{data ? rowData.product_names : ""}</td>
                    <td align="right">{rowData.price}</td>
                    <td width="100" align="center">
                        <span className="badge badge-pill badge-danger" style={{ backgroundColor: rowData.status == 'DELIVERED' || rowData.status == 'PAID' ? 'green' : rowData.status == 'FULFILED' ? '#777777' : rowData.status == 'RETURNED' ? 'red' : 'orange' }}>{data ? rowData.status : ""}</span>
                    </td>
                    <td width="140">
                        <button id={rowData.id} onClick={editOrder} target="_blank" className="mb-xs mt-xs mr-xs btn btn-primary" style={{ padding: '3px 5px', fontSize: '13px' }}>
                            Edit
                        </button>
                        <a target="_blank" className="mb-xs mt-xs mr-xs btn " style={{ color: 'white', backgroundColor: 'orange', padding: '3px 5px', fontSize: '13px' }}>
                            Preview
                        </a>
                        <button onClick={() => deleteOrder(rowData.id)} target="_blank" className="mb-xs mt-xs mr-xs btn btn-primary" style={{ padding: '3px 5px', fontSize: '13px' }}>
                            Delete
                        </button>
                    </td>
                </tr>
            </>
        )
    }

    // useEffect(()=>{
    //     fetchOrders();
    // },[])
    return (
        <>
            <section className="panel">
                <header className="panel-heading">
                    <h2 className="panel-title">List of Orders</h2>
                    <span style={{ float: 'right', marginTop: '-27px', padding: '2px' }}>
                        <button onClick={handleShow} className="btn btn-default btn-primary">
                            Add Order
                        </button>
                    </span>
                </header>
                <div className="panel-body">
                    <div className="row">
                        <input type="hidden" id="serch" value="" className="form-control" style={{ float: 'right', width: '50%' }} placeholder="Recherche" />
                    </div>
                    <div id="responseBloc" className="dataTables_wrapper no-footer">
                        <div className="table-responsive">
                            <div id="vid"></div>
                            <table className="table table-bordered table-striped" id="example">
                                <thead>
                                    <tr>
                                        <th width="150px" className="sorting ordDESC"><a>Code</a></th>
                                        <th width="1px" className="sorting ord"><a>Date</a></th>
                                        <th width="*" className="sorting ord"><a>Client</a></th>
                                        <th width="110px" style={{ paddingRight: '18px !important' }} className="sorting ord"><a>Téléphone </a></th>
                                        <th width="160px" className="sorting ord"><a>City</a></th>
                                        <th width="*"> Products</th>
                                        <th width="130px" className="sorting ord"><a>Price</a></th>
                                        <th width="*" className="sorting ord"><a>Status </a></th>
                                        <th width="140px">Action </th>
                                    </tr>
                                    <tr style={{ background: '#efefef' }}>
                                        <th>
                                            <input type="text" value="" name="rechercheCode" id="rechercheCode" className="form-control inputRecherche" />
                                        </th>
                                        <th>
                                            <input type="date" name="rechercheDate" id="rechercheDate" value="" className="form-control inputRechercheDate" min="2021-01-01" max="2024-04-28" />
                                        </th>
                                        <th>
                                            <input type="text" value={searchedVal} name="rechercheClient" onChange={(e) => setSearchedVal(e.target.value)} id="rechercheClient" className="form-control inputRecherche" />
                                        </th>
                                        <th>
                                            <input type="text" value="" name="rechercheNumTel" id="rechercheNumTel" className="form-control inputRecherche" />
                                        </th>
                                        <th>
                                            <select className="form-control" name="rechercheAdresse" id="rechercheAdresse" style={{ height: '28px', padding: '0px 0px 0px 3px', fontWeight: 'normal' }}>
                                                <option value="">Toute la tunisie</option>
                                                <option value="Ariana">Ariana</option>
                                                <option value="Beja">Beja</option>
                                                <option value="Ben Arous">Ben Arous</option>
                                                <option value="Bizerte">Bizerte</option>
                                                <option value="Gabes">Gabes</option>
                                                <option value="Gafsa">Gafsa</option>
                                                <option value="Jendouba">Jendouba</option>
                                                <option value="Kairouan">Kairouan</option>
                                                <option value="Kasserine">Kasserine</option>
                                                <option value="Kebili">Kebili</option>
                                                <option value="Kef">Kef</option>
                                                <option value="Mahdia">Mahdia</option>
                                                <option value="Manouba">Manouba</option>
                                                <option value="Medenine">Medenine</option>
                                                <option value="Monastir">Monastir</option>
                                                <option value="Nabeul">Nabeul</option>
                                                <option value="Sfax">Sfax</option>
                                                <option value="Sidi Bouzid">Sidi Bouzid</option>
                                                <option value="Siliana">Siliana</option>
                                                <option value="Sousse">Sousse</option>
                                                <option value="Tataouine">Tataouine</option>
                                                <option value="Tozeur">Tozeur</option>
                                                <option value="Tunis">Tunis</option>
                                                <option value="Zaghouan">Zaghouan</option>
                                            </select>
                                        </th>
                                        <th>
                                            <input type="text" value="" name="rechercheProduit" id="rechercheProduit" className="form-control inputRecherche" />
                                        </th>
                                        <th>
                                            <div className="row">
                                                <div className="col-md-6" style={{ marginBottom: '0px' }}>
                                                    <input type="text" className="form-control inputRecherche" placeholder="Min." style={{ display: 'inline-block', width: '55px' }} value="" name="rechercheTotalMin" id="rechercheTotalMin" />
                                                </div>
                                                <div className="col-md-6" style={{ marginBottom: '0px' }}>
                                                    <input type="text" className="form-control inputRecherche" placeholder="Max." style={{ display: 'inline-block', width: '55px', marginLeft: '-12px' }} value="" name="rechercheTotalMax" id="rechercheTotalMax" />
                                                </div>
                                            </div>
                                        </th>
                                        <th>
                                            <select className="form-control inputRechercheList" name="rechercheEtat" id="rechercheEtat">
                                                <option value="">-</option>
                                                <option value="0">Unfulfilled</option>
                                                <option value="1">Fulfilled</option>
                                                <option value="2">Delivered</option>
                                                <option value="3">Returned</option>
                                            </select>
                                        </th>
                                        <th>
                                            <div style={{ float: 'right', width: '100%' }}>
                                                <button className="btn-sm btn btn-primary" type="button" title="Chercher" tabIndex="-1" style={{ width: '83px', padding: '3px 5px', fontSize: '13px' }} data-provider="bootstrap-markdown" data-handler="bootstrap-markdown-cmdPreview" data-toggle="button">
                                                    Search
                                                </button>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {data.filter(row => { return !searchedVal.length || row.client_full_name.toString().toLowerCase().includes(searchedVal.toString().toLowerCase())}).sort((a, b) => b.id - a.id)
                                        .map((object, i) => <TableRow rowData={object} key={i} />)}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <NewOrderModal fetchOrders={fetchOrders} show={show} handleShow={handleShow} handleClose={handleClose} />
            <EditOrderModal fetchOrders={fetchOrders} data={dataToEdit} show={editModalShow} handleShow={handleEditModalShow} handleClose={handleEditModalClose} />


        </>
    );
}

export default Table;
