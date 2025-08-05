import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./home.css";
import ProductCards from "../components/ProductCards";
import Footer from "../components/Footer";

const Home = () => (
  <div className="position-relative">

    {/* ======= Carousel Section ======= */}
    <div id="carouselExampleAutoplay" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

        <div className="carousel-item active position-relative">
          <img
            src="https://www.dewateringpumpsindia.net/images/slide6.jpg"
            className="d-block w-100"
            alt="Pump 1"
          />
          <div className="text-overlay text-center w-100">
            <h1 className="main-heading">Welcome to KPR's Pumps</h1><br />
            <p className="sub-text">Delivering Trust with Every Drop</p>
          </div>
        </div>

        <div className="carousel-item position-relative">
          <img
            src="https://www.dewateringpumpsindia.net/images/slide4.jpg"
            className="d-block w-100"
            alt="Pump 2"
          />
          <div className="text-overlay text-center w-100">
            <h1 className="main-heading">Welcome to KPR's Pumps</h1><br />
            <p className="sub-text">Performance That Flows</p>
          </div>
        </div>

        <div className="carousel-item position-relative">
          <img
            src="https://www.dewateringpumpsindia.net/images/slide1.jpg"
            className="d-block w-100"
            alt="Pump 3"
          />
          <div className="text-overlay text-center w-100">
            <h1 className="main-heading">Welcome to KPR's Pumps</h1><br />
            <p className="sub-text">Engineered for Excellence</p>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplay" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplay" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    {/* ======= Animated Heading Section ======= */}
    <div className="container text-center py-5 animate-fade-in">
      <h2 className="text-warning fw-bold mb-2">
        Electric Submersible Dewatering Pumps Manufacturer, Exporter, Supplier
      </h2>
      <h5 className="text-dark mb-3">Welcome to KPR'S PUMPS</h5>

      <div className="d-flex align-items-center justify-content-center mb-4">
        <hr className="flex-grow-1 mx-3 border-warning" />
        <span className="text-warning fs-3">🎀</span>
        <hr className="flex-grow-1 mx-3 border-warning" />
      </div>

      <p className="text-muted px-3 px-md-5">
        We are Manufacturer, Supplier, Exporter of Electric Submersible Dewatering Pumps, Non Clog Pumps,
        Electric Submersible Non Clog Pumps and our setup is situated at Pune, Maharashtra, India.
      </p>
    </div>

    {/* ======= Info Cards Section ======= */}
    <div className="container my-5">
      <div className="row g-4 text-center">
        {/* INTRODUCTION */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Introduction"
                className="mb-3"
                style={{ width: "60px" }}
              />
              <h5 className="card-title text-uppercase fw-bold text-warning">Introduction</h5>
              <p className="card-text">
                <strong>KPR'S PUMPS</strong> has over 10 years of experience in submersible technology.
                During this time, we have developed a number of patented innovations to improve equipment
                performance and efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* ABOUT MANAGEMENT */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <img
                src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                alt="Management"
                className="mb-3"
                style={{ width: "60px" }}
              />
              <h5 className="card-title text-uppercase fw-bold text-warning">About Management</h5>
              <p className="card-text">
                <strong>Mr. Ashwin R. Kolhe</strong>, proprietor and founder of KPR'S PUMPS, is an energetic
                entrepreneur. Born on 2nd October 1973, he completed Production Engineering in 1996.
              </p>
            </div>
          </div>
        </div>

        {/* COMPANY PROFILE */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2303/2303980.png"
                alt="Company"
                className="mb-3"
                style={{ width: "60px" }}
              />
              <h5 className="card-title text-uppercase fw-bold text-warning">Company Profile</h5>
              <p className="card-text">
                We aim to be a leading global supplier of submersible dewatering pump systems,
                partnering with customers to consistently deliver low-cost, high-performance solutions
                across the product lifecycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
   
   <ProductCards />
   <Footer />
  </div>
);

export default Home;
