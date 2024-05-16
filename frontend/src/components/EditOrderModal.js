import React, { useRef } from 'react';
import axios from 'axios';

const EditOrderModal = (props) => {

  const { show, handleClose, data,fetchOrders } = props;
  const clientFullNameRef = useRef(null);
  const numberRef = useRef(null);
  const adressRef = useRef(null);
  const cityRef = useRef(null);
  const statusRef = useRef(null);
  const dateRef = useRef(null);
  const clientInstgRef = useRef(null);
  const productsRef = useRef(null);
  const priceRef = useRef(null);


  const submitEditedOrder = async (event) =>{
    event.preventDefault();
    const order_id = data ? data.id:"";
    const client_id = data.client.id
    const edit_url = `http://127.0.0.1:8000/orders/${client_id}`
    const full_name = clientFullNameRef.current.value;
    const phoneNumber = numberRef.current.value;
    const date = dateRef.current.value;
    const city = cityRef.current.value;
    const address = adressRef.current.value;
    const istagramId = clientInstgRef.current.value;
    const productsNames = productsRef.current.value;
    const status = statusRef.current.value;
    const price = priceRef.current.value;


    const newOrderData = {
      id:order_id,
      client: {
          id: client_id, 
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


  

    console.log(newOrderData)


    try {
      const orderResponse = await axios.put(edit_url, newOrderData);
      console.log("Order Changed" );
      console.log(orderResponse.data)
      fetchOrders();
      handleClose()
    } catch (error) {
      console.log("Error Editing Order");
    }



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
                <h4 className="modal-title" id="myModalLabel">Edit Order</h4>
              </div>
              <div className="modal-body">
                <form method='post' action=''>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="client_full_name">Client Full Name</label>
                      <input type="text" defaultValue={data ? data.client_full_name : ""} ref={clientFullNameRef} name="client_full_name" class="form-control" id="client_full_name" placeholder="Full Name" required />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="phone">Telephone Number</label>
                      <input type="number" defaultValue={data ? data.client_phone_number : ""} ref={numberRef} name='phone' class="form-control" id="phone" placeholder="Phone Number" required />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-5">
                      <label for="adress">Adress</label>
                      <input type="text" defaultValue={data ? data.client_adress : ""} ref={adressRef} class="form-control" name='adress' id="adress" placeholder="Adress" required />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="city">City</label>
                      <select ref={cityRef} name='city' id="city" class="form-control" required>
                        <option >Toute la tunisie</option>
                        <option selected={data && data.client_order_city === "Ariana"} value="Ariana">Ariana</option>
                        <option selected={data && data.client_order_city === "Beja"} value="Beja">Beja</option>
                        <option selected={data && data.client_order_city === "Ben Arous"} value="Ben Arous">Ben Arous</option>
                        <option selected={data && data.client_order_city === "Bizerte"} value="Bizerte">Bizerte</option>
                        <option selected={data && data.client_order_city === "Gabes"} value="Gabes">Gabes</option>
                        <option selected={data && data.client_order_city === "Gafsa"} value="Gafsa">Gafsa</option>
                        <option selected={data && data.client_order_city === "Jendouba"} value="Jendouba">Jendouba</option>
                        <option selected={data && data.client_order_city === "Kairouan"} value="Kairouan">Kairouan</option>
                        <option selected={data && data.client_order_city === "Kasserine"} value="Kasserine">Kasserine</option>
                        <option selected={data && data.client_order_city === "Kebili"} value="Kebili">Kebili</option>
                        <option selected={data && data.client_order_city === "Kef"} value="Kef">Kef</option>
                        <option selected={data && data.client_order_city === "Mahdia"} value="Mahdia">Mahdia</option>
                        <option selected={data && data.client_order_city === "Manouba"} value="Manouba">Manouba</option>
                        <option selected={data && data.client_order_city === "Medenine"} value="Medenine">Medenine</option>
                        <option selected={data && data.client_order_city === "Monastir"} value="Monastir">Monastir</option>
                        <option selected={data && data.client_order_city === "Nabeul"} value="Nabeul">Nabeul</option>
                        <option selected={data && data.client_order_city === "Sfax"} value="Sfax">Sfax</option>
                        <option selected={data && data.client_order_city === "Sidi Bouzid"} value="Sidi Bouzid">Sidi Bouzid</option>
                        <option selected={data && data.client_order_city === "Siliana"} value="Siliana">Siliana</option>
                        <option selected={data && data.client_order_city === "Sousse"} value="Sousse">Sousse</option>
                        <option selected={data && data.client_order_city === "Tataouine"} value="Tataouine">Tataouine</option>
                        <option selected={data && data.client_order_city === "Tozeur"} value="Tozeur">Tozeur</option>
                        <option selected={data && data.client_order_city === "Tunis"} value="Tunis">Tunis</option>
                        <option selected={data && data.client_order_city === "Zaghouan"} value="Zaghouan">Zaghouan</option>


                      </select>
                    </div>
                    <div class="form-group col-md-3">
                      <label for="status">Status</label>
                      <select ref={statusRef} name="status" id="status" class="form-control">
                        <option value="INFULFILED" selected={data && data.status == "INFULFILED"}>Unfulfilled</option>
                        <option value="FULFILED" selected={data && data.status == "FULFILED"}>FULFILED</option>
                        <option value="DELIVERED" selected={data &&data.status == "DELIVERED"}>DELIVERED</option>

                      </select>
                    </div>

                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-4">
                      <label for="exampleDate">Select Date:</label>
                      <input ref={dateRef} name="date" type="date" class="form-control" id="date" required/>
                    </div>
                    <div class="form-group col-md-4">
                      <label for="client_full_name">Client Instagram ID</label>
                      <input defaultValue={data ? data.client_instagram :""} ref={clientInstgRef} type="text" name='instagram_id' class="form-control" id="instagram_id" placeholder="Client Instagram Id" required />
                    </div>
                    <div class="form-group col-md-3">
                      <label for="price">price</label>
                      <input defaultValue={data ? data.price :"" } ref={priceRef} type="text" name='price' class="form-control" id="price" placeholder="Price" required />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group">

                      <label for="products"></label>
                      <textarea defaultValue={data ? data.product_names :"" } ref={productsRef} style={{ resize: 'vertical' }} class="form-control" id="products" rows="10" required></textarea>

                      {/* <label class="form-label" for="customFile">Products Image</label>
                      <input type="file" class="form-control" id="customFile" /> */}
                    </div>

                  </div>


                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" onClick={handleClose}>Close</button>
                    <button  onClick={submitEditedOrder} type="submit" className="btn btn-primary">Save changes</button>
                  </div>
                </form>

              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditOrderModal;
