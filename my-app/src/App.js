import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import axios from "axios";

import "./App.css";

function App() {
  const [allData, setAllData] = useState(null);
  const [service, setService] = useState('Specialized Packages');
  const [item, setItem] = useState(null);
  const [price, setPrice] = useState(null);
  const [day, setDay] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/SecretEscapes")
      .then(function (response) {
        // handle success
        const { data } = response && response;

        setAllData(data.SecretEscapes);
        // console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const saveData = () => {
 

    axios
      .post("http://localhost:5000/api/SecretEscapes/insert", {
        service: service,
        item: item,
        price: price,
        day: day,
      })
      .then(function (response) {
        const { data } = response && response;

        setAllData(data.SecretEscapes);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const updateRecord = () => {
    axios
      .post(`http://localhost:5000/api/SecretEscapes/update/${id}`, {
        service: service,
        item: item,
        price: price,
      })
      .then(function (response) {
        const { data } = response && response;

        setAllData(data.SecretEscapes);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const deleteItem = () => {
    axios
      .post("http://localhost:5000/api/SecretEscapes/delete", {
        SecretEscapesId: id,
      })
      .then(function (response) {
        const { data } = response && response;

        setAllData(data.SecretEscapes);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleChange = (item) => {
    console.log("ff");
    setId(item._id);
    const filteredData =
      allData &&
      allData.length > 0 &&
      allData.filter((item) => item._id === id);
    if (filteredData && filteredData.length > 0) {
      setService(filteredData.service);
      setItem(filteredData.item);
      setPrice(filteredData.price);
      setDay(filteredData.day);
    }
  };

  return (
    <div className="App">
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
          <div className="container">
            <a className="navbar-brand" href="#">
               SecretEscapes
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home<span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Page Content */}
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-12 text-left">
              <h1>Welcome to SECRET ESCAPES!</h1>
             <h2 class="mt-5">Ours is a world unlike any other,
              <p class="lead">Explore fantastics secret destinations in Europe!</p>
             <p class="lead">OUR COLLECTION:</p>
             </h2>

            </div>
            <div className="col-lg-4 text-center">
              <form>
                <div className="form-group">
                  <select
                    className="form-control"
                    name="sec_n"
                    id="option"
                    value={service}
                    onChange={(event) => setService(event.target.value)}
                  >
                    <option
                      value="Specialized Packages"
                      name="Specialized Packages"
                    >
                      Specialized Packages
                    </option>
                    <option value="ADVENTURE" name="ADVENTURE">
                      ADVENTURE
                    </option>
                    <option value="BEACH HOLIDAYS" name="BEACH HOLIDAYS">
                      BEACH HOLIDAYS
                    </option>
                    <option value="FAMILY" name="FAMILY">
                      FAMILY
                    </option>
                    <option value="ROMANTIC" name="ROMANTIC">
                      ROMANTIC
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="item"
                    placeholder="Destination"
                    value={item}
                    id="itemV"
                    onChange={(event) => setItem(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="price"
                    placeholder="Price"
                    value={price}
                    id="priceV"
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </div>

                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="day"
                    placeholder="Day"
                    value={day}
                    id="priceV"
                    onChange={(event) => setDay(event.target.value)}
                  />
                </div>
                <button
                  id="submit"
                  className="btn btn-primary btn-block"
                  onClick={(e) => saveData(e)}
                >
                  Submit
                </button>
                <button
                  id="update"
                  className="btn btn-block btn-secondary"
                  onClick={updateRecord}
                >
                  Update Record
                </button>
                <button
                  id="delete"
                  className="btn btn-block btn-danger"
                  onClick={deleteItem}
                >
                  Delete
                </button>
              </form>
              <p className="text-muted">
                To delete a item, click the required row first
              </p>
              <form>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">€</span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Total"
                    name="txtBillAmt"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <input
                        type="checkbox"
                        id="showVeg"
                        aria-label="Checkbox for following text input"
                      />
                    </div>
                  </div>
                  <input
                    className="btn btn-block btn-secondary mt-4"
                    type="button"
                    name="btnCalcBill"
                    defaultValue="Calculate Bill"
                    id="calcBill"
                  />
                </div>
              </form>
            </div>
            <div id="results" className="col-lg-8 text-center">
              <div id="Package1"></div>
              <div id="Package2"></div>
              <div id="Package3"></div>
              <div id="Package4"></div>
              <table id="menuTable" className="indent">
                <thead>
                  <tr className="heading">
                    <th colSpan={4}>Price List</th>
                    <th colSpan={4}>Type</th>
                  </tr>
                  <tr className="heading">
                    <th>Select</th>
                    <th>Destination</th>
                    <th>Day</th>
                    <th>Price</th>
                    <th>service</th>
                  </tr>
                </thead>
                <tbody>
                  {allData &&
                    allData.length > 0 &&
                    allData.map((item) => (
                      <>
                        <tr>
                          <td>
                            <input
                              name="item1"
                              type="checkbox"
                              defaultValue
                              onChange={(event) =>
                                handleChange(item, event.target.checked)
                              }
                            />
                          </td>
                          <td id="itemKey">{item.item}</td>
                          <td id="day">{item.day}</td>
                          <td id="price">{item.price}</td>
                          <td colSpan={3}>{item.service}</td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <span className="text-muted">© 2019</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;