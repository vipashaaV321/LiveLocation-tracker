import React, { useState } from "react";
import "./style.css";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
function App(props) {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [add, setAdd] = useState(null);
  const mapStyles = {
    width: "100%",
    height: "100%"
  };

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  function showPosition(position) {
    // console.log(position.coords);

    setLat(position.coords.latitude.toFixed(5));
    setLong(position.coords.longitude.toFixed(5));
  }
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }
  function userAdd() {
    fetch;
  }
  // var latlon = position.coords.latitude + "," + position.coords.longitude;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark deep-purple">
        <div className="container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                LocationTracker
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container my-5 py-5">
        <section className="text-center px-md-5 mx-md-5 dark-grey-text">
          <div className="row mb-5">
            <div className="col-md-4 mx-auto">
              <div className="view mb-4 pb-2">
                <img
                  src="https://mdbootstrap.com/img/illustrations/undraw_connected_world_wuay.svg"
                  className="img-fluid"
                  alt="smaple image"
                />
              </div>
            </div>
          </div>

          <h3 className="font-weight-bold mb-4 pb-2">
            Track Your Realtime Location
          </h3>

          <button
            type="button"
            className="btn btn-deep-purple btn-rounded"
            style={{ borderRadius: "30px" }}
            onClick={getLocation}
            data-toggle="collapse"
            data-target="#demo"
          >
            Get Current location
          </button>
          <div id="demo" class="collapse">
            <div class="card pt-5">
              <h3>Latitude:: {lat}</h3>
              <br />
              <h3>Longitude:: {long}</h3>
              <div class="row my-md-5 py-md-4 p-3">
                <div class="col-md-10 mx-auto">
                  <div
                    id="map-within-card"
                    class="map-container"
                    style={{ height: "400px" }}
                  >
                    {lat && long ? (
                      <Map
                        google={props.google}
                        zoom={14}
                        initialCenter={{
                          lat: lat,
                          lng: long
                        }}
                      >
                        <Marker name={"This is test name"} />
                      </Map>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default GoogleApiWrapper({
  apiKey: process.env.API
})(App);
