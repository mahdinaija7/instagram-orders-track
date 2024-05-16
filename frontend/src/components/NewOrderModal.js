import React, { useState, useRef } from 'react';
import axios from 'axios';

const NewOrderModal = (props) => {

  const { fetchOrders, show, handleClose } = props;

  const clientFullNameRef = useRef(null);
  const numberRef = useRef(null);
  const adressRef = useRef(null);
  const cityRef = useRef(null);
  const statusRef = useRef(null);
  const dateRef = useRef(null);
  const clientInstgRef = useRef(null);
  const productsRef = useRef(null);
  const priceRef = useRef(null);







  const createNewOrder = async (event) => {
    event.preventDefault();
    const order_url = 'http://127.0.0.1:8000/orders/'
    const full_name = clientFullNameRef.current.value;
    const phoneNumber = numberRef.current.value;
    const date = dateRef.current.value;
    const city = cityRef.current.value;
    const address = adressRef.current.value;
    const istagramId = clientInstgRef.current.value;
    const productsNames = productsRef.current.value;
    const status = statusRef.current.value;
    const price = priceRef.current.value;

    const clientData = {
      "full_name": full_name,
      "address": adressRef.current.value,
      "phone_number": phoneNumber,
      "city": city,
      "instagram_profile_id": istagramId
    }


    const newOrderData = {

      client: {
        full_name: full_name,
        address: address,
        phone_number: phoneNumber,
        city: city,
        instagram_profile_id: istagramId
      },
      date: date,
      product_names: productsNames,
      status: status,
      price: price


    }

    try {
      const orderResponse = await axios.post(order_url, newOrderData);
      console.log("Order Created");
      console.log(orderResponse)
      fetchOrders();
    } catch (error) {
      console.log("Error creating Order");
    }



    handleClose();
  }

  return (
    <>
      {show && (
        <style>
          {`
            body {
              text-align: center;
              padding: 50px;
            }
            .modal.fade {
              opacity: 1;
            }
            .modal.fade .modal-dialog {
              transform: translate(0);
            }
          `}
        </style>
      )}
      {show && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" onClick={handleClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="myModalLabel">New Order</h4>
              </div>
              <div className="modal-body">
                {/* zaazeazezaeazeaze */}
                <form method='post' action=''>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="client_full_name">Client Full Name</label>
                      <input type="text" ref={clientFullNameRef} name="client_full_name" class="form-control" id="client_full_name" placeholder="Full Name" required />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="phone">Telephone Number</label>
                      <input type="number" ref={numberRef} name='phone' class="form-control" id="phone" placeholder="Phone Number" required />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-5">
                      <label for="adress">Adress</label>
                      <input type="text" ref={adressRef} class="form-control" name='adress' id="adress" placeholder="Adress" required />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="city">City</label>
                      <select ref={cityRef} name='city' id="city" class="form-control" required>
                        <option selected>Toute la tunisie</option>
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
                    </div>
                    <div class="form-group col-md-3">
                      <label for="status">Status</label>
                      <select ref={statusRef} name="status" id="status" class="form-control">
                        <option value="INFULFILED" selected>Unfulfilled</option>
                        <option value="FULFILED" >FULFILED</option>
                        <option value="DELIVERED" >DELIVERED</option>

                      </select>
                    </div>

                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-4">
                      <label for="exampleDate">Select Date:</label>
                      <input ref={dateRef} name="date" type="date" class="form-control" id="date" required />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="client_full_name">Client Instagram ID</label>
                      <input ref={clientInstgRef} type="text" name='instagram_id' class="form-control" id="instagram_id" placeholder="Client Instagram Id" required />
                    </div>
                    <div class="form-group col-md-3">
                      <label for="price">price</label>
                      <input ref={priceRef} type="text" name='price' class="form-control" id="price" placeholder="Price" required />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group">

                      <label for="products"></label>
                      <textarea ref={productsRef} style={{ resize: 'vertical' }} class="form-control" id="products" rows="10" required></textarea>

                      {/* <label class="form-label" for="customFile">Products Image</label>
                      <input type="file" class="form-control" id="customFile" /> */}
                    </div>

                  </div>


                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" onClick={handleClose}>Close</button>
                    <button type="submit" onClick={createNewOrder} className="btn btn-primary">Create Order</button>
                  </div>
                </form>
                {/* azedqsdsqdsqdqsdqs */}
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewOrderModal;
