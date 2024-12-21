import React from 'react'

export default function Index() {
  return (
    <div>
        <>
  {/* Spinner Start */}
  {/* <div
    id="spinner"
    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div
      className="spinner-grow text-primary"
      style={{ width: "3rem", height: "3rem" }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div> */}
  {/* Spinner End */}
  {/* Topbar Start */}
  <div className="container-fluid bg-light p-0">
    <div className="row gx-0 d-none d-lg-flex">
      <div className="col-lg-7 px-5 text-start">
        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
          <small className="fa fa-map-marker-alt text-primary me-2" />
          <small>123 Street, New York, USA</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center py-3">
          <small className="far fa-clock text-primary me-2" />
          <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
        </div>
      </div>
      <div className="col-lg-5 px-5 text-end">
        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
          <small className="fa fa-phone-alt text-primary me-2" />
          <small>+012 345 6789</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center">
          <a className="btn btn-sm-square bg-white text-primary me-1" href="">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="btn btn-sm-square bg-white text-primary me-1" href="">
            <i className="fab fa-twitter" />
          </a>
          <a className="btn btn-sm-square bg-white text-primary me-1" href="">
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="btn btn-sm-square bg-white text-primary me-0" href="">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
    <a
      href="index.html"
      className="navbar-brand d-flex align-items-center px-4 px-lg-5"
    >
      <h2 className="m-0 text-primary">HAWAII</h2>
      <h5 className="m-0 text-primary"> LED SCREEN</h5>
    </a>
    <button
      type="button"
      className="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
        <a href="index.html" className="nav-item nav-link active">
          Home
        </a>
        <a href="about.html" className="nav-item nav-link">
          Products
        </a>
        <a href="service.html" className="nav-item nav-link">
          Projects
        </a>
        <a href="project.html" className="nav-item nav-link">
          Applications
        </a>
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Softwares
          </a>
          <div className="dropdown-menu fade-up m-0">
            <a href="feature.html" className="dropdown-item">
              Feature
            </a>
            <a href="quote.html" className="dropdown-item">
              Free Quote
            </a>
            <a href="team.html" className="dropdown-item">
              Our Team
            </a>
            <a href="testimonial.html" className="dropdown-item">
              Testimonial
            </a>
            <a href="404.html" className="dropdown-item">
              404 Page
            </a>
          </div>
        </div>
        <a href="contact.html" className="nav-item nav-link">
          About Us
        </a>
        <a href="contact.html" className="nav-item nav-link">
          Article and Events
        </a>
        <a href="contact.html" className="nav-item nav-link">
          Contact Us
        </a>
      </div>
      <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
        Get A Quote
        <i className="fa fa-arrow-right ms-3" />
      </a>
    </div>
  </nav>
  {/* Navbar End */}

{/* Carousel Start */}
<div className="container-fluid p-0 pb-5">
  <div
    id="carouselExampleIndicators"
    className="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="10000"
    style={{ maxHeight: "500px" }} // Adjust the height here
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="assets/img/caro1.webp"
          className="d-block w-100"
          alt="Slide 1"
          style={{ objectFit: "cover", maxHeight: "500px" }}
        />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <h5 className="text-white text-uppercase mb-3">HAWAII</h5>
          <h1 className="display-3 text-white mb-4">BEST LED &amp; WEBSITE</h1>
          <p className="fs-5 fw-medium text-white mb-4 pb-2">
            INSPIRED BY INNOVATION HIGH-QUALITY LED SCREEN
          </p>
          <a href="" className="btn btn-primary py-md-3 px-md-5 me-3">
            Read More
          </a>
          <a href="" className="btn btn-light py-md-3 px-md-5">
            Free Quote
          </a>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="assets/img/caro2.webp"
          className="d-block w-100"
          alt="Slide 2"
          style={{ objectFit: "cover", maxHeight: "500px" }}
        />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <h5 className="text-white text-uppercase mb-3">HAWAII</h5>
          <h1 className="display-3 text-white mb-4">BEST LED &amp; WEBSITE</h1>
          <p className="fs-5 fw-medium text-white mb-4 pb-2">
            INSPIRED BY INNOVATION HIGH-QUALITY LED SCREEN
          </p>
          <a href="" className="btn btn-primary py-md-3 px-md-5 me-3">
            Read More
          </a>
          <a href="" className="btn btn-light py-md-3 px-md-5">
            Free Quote
          </a>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="assets/img/caro3.webp"
          className="d-block w-100"
          alt="Slide 3"
          style={{ objectFit: "cover", maxHeight: "500px" }}
        />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <h5 className="text-white text-uppercase mb-3">HAWAII</h5>
          <h1 className="display-3 text-white mb-4">BEST LED &amp; WEBSITE</h1>
          <p className="fs-5 fw-medium text-white mb-4 pb-2">
            INSPIRED BY INNOVATION HIGH-QUALITY LED SCREEN
          </p>
          <a href="" className="btn btn-primary py-md-3 px-md-5 me-3">
            Read More
          </a>
          <a href="" className="btn btn-light py-md-3 px-md-5">
            Free Quote
          </a>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
{/* Carousel End */}



  {/* Feature Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div
              className="d-flex align-items-center justify-content-center bg-light"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-user-check fa-2x text-primary" />
            </div>
            <h1 className="display-1 text-light mb-0">01</h1>
          </div>
          <h5>Creative Designers</h5>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div
              className="d-flex align-items-center justify-content-center bg-light"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-check fa-2x text-primary" />
            </div>
            <h1 className="display-1 text-light mb-0">02</h1>
          </div>
          <h5>Quality Products</h5>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div
              className="d-flex align-items-center justify-content-center bg-light"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-drafting-compass fa-2x text-primary" />
            </div>
            <h1 className="display-1 text-light mb-0">03</h1>
          </div>
          <h5>Free Consultation</h5>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div
              className="d-flex align-items-center justify-content-center bg-light"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-headphones fa-2x text-primary" />
            </div>
            <h1 className="display-1 text-light mb-0">04</h1>
          </div>
          <h5>Customer Support</h5>
        </div>
      </div>
    </div>
  </div>
  {/* Feature Start */}
  {/* About Start */}
  <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
    <div className="container about px-lg-0">
      <div className="row g-0 mx-lg-0">
        <div className="col-lg-6 ps-lg-0" style={{ minHeight: 400 }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute img-fluid w-100 h-100"
              src="assets/img/aboutus.webp"
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
        </div>
        <div
          className="col-lg-6 about-text py-5 wow fadeIn"
          data-wow-delay="0.5s"
        >
          <div className="p-lg-5 pe-lg-0">
            <div className="section-title text-start">
              <h1 className="display-5 mb-4">About Us</h1>
            </div>
            <p className="mb-4 pb-2">
            Hawaii LED, is an integrated solution provider in the LED display industry, offering turnkey solutions to customers on LED display applications. Hawaii is the leading LED manufacturing company.With operations in qatar ,UAE, Saudi Arabia and india. We follows gloabal standard system.Hawaii led is one of the leading manufacturer in led display industry.
            </p>
            <div className="row g-4 mb-4 pb-2">
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-users fa-2x text-primary" />
                  </div>
                  <div className="ms-3">
                    <h2 className="text-primary mb-1" data-toggle="counter-up">
                      1234
                    </h2>
                    <p className="fw-medium mb-0">Happy Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-check fa-2x text-primary" />
                  </div>
                  <div className="ms-3">
                    <h2 className="text-primary mb-1" data-toggle="counter-up">
                      1234
                    </h2>
                    <p className="fw-medium mb-0">Projects Done</p>
                  </div>
                </div>
              </div>
            </div>
            <a href="" className="btn btn-primary py-3 px-5">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}

  {/* Service Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="section-title text-center">
        <h1 className="display-5 mb-5">Our Solutions</h1>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="assets/img/service-1.webp" alt="" />
            </div>
            <div className="p-4 text-center border border-5 border-light border-top-0">
              <h4 className="mb-3">Wedding Event</h4>
              <p>
              LED display screens in wedding events like custom wedding videos, retrospectives of the couple's relationship, well-wishes from friends and family who couldn't attend...
              </p>
              <a className="fw-medium" href="">
                Read More
                <i className="fa fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="assets/img/service-2.webp" alt="" />
            </div>
            <div className="p-4 text-center border border-5 border-light border-top-0">
              <h4 className="mb-3">Conferences</h4>
              <p>
              In conference halls and meeting rooms . indoor LED video walls can create a spectacular backdrop with high picture quality and edge-to-edge display that can cover the entire length of the stage.
              </p>
              <a className="fw-medium" href="">
                Read More
                <i className="fa fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="assets/img/service-3.webp" alt="" />
            </div>
            <div className="p-4 text-center border border-5 border-light border-top-0">
              <h4 className="mb-3">Exhibitions</h4>
              <p>
              The LED display can play dynamic videos and show the exhibition. Promotional films . LED displays at exhibitions to make your event and exhibition booths come to life and play product features ...
              </p>
              <a className="fw-medium" href="">
                Read More
                <i className="fa fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="assets/img/service-4.webp" alt="" />
            </div>
            <div className="p-4 text-center border border-5 border-light border-top-0">
              <h4 className="mb-3">Studio Floor</h4>
              <p>
              LED panels prove to be the ideal solution and canvas to portray sets and backgrounds created in virtual reality. Thereby creating maximum flexibility for the production teams to make ...
              </p>
              <a className="fw-medium" href="">
                Read More
                <i className="fa fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="assets/img/service-5.webp" alt="" />
            </div>
            <div className="p-4 text-center border border-5 border-light border-top-0">
              <h4 className="mb-3">Meeting Rooms</h4>
              <p>
              The conference LED display has proven to be ideal for meeting rooms. An indoor LED screen is made to be slim, thin and lightweight. This means it does not need big space to fit in.
              </p>
              <a className="fw-medium" href="">
                Read More
                <i className="fa fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="assets/img/service-6.webp" alt="" />
            </div>
            <div className="p-4 text-center border border-5 border-light border-top-0">
              <h4 className="mb-3">Sports</h4>
              <p>
              Sports Display solutions for professional football stadiums, basketball courts, and other sports arenas. Dynamically transforming fan engagement and viewing ..
              </p>
              <a className="fw-medium" href="">
                Read More
                <i className="fa fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="assets/img/service-7.webp" alt="" />
            </div>
            <div className="p-4 text-center border border-5 border-light border-top-0">
              <h4 className="mb-3">Education</h4>
              <p>
              At education centers, large digital displays and video walls are placed in classrooms with LED and LCD touch screens for the hightech classroom and also enchance student learning with technology .
              </p>
              <a className="fw-medium" href="">
                Read More
                <i className="fa fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="assets/img/service-8.webp" alt="" />
            </div>
            <div className="p-4 text-center border border-5 border-light border-top-0">
              <h4 className="mb-3">Healtcare</h4>
              <p>
              To improve the patient experience, hospitals and healthcare clinics depend on clear, accessible communication which also promotes more positive health outcomes,..
              </p>
              <a className="fw-medium" href="">
                Read More
                <i className="fa fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="assets/img/service-9.webp" alt="" />
            </div>
            <div className="p-4 text-center border border-5 border-light border-top-0">
              <h4 className="mb-3">Outdoor Advertisement</h4>
              <p>
              Outdoor LED Advertising Display Screen is used to display different types of advertisements, ads and other information in a smart way.Outdoor LED screens work like large billboards.
              </p>
              <a className="fw-medium" href="">
                Read More
                <i className="fa fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="assets/img/service-10.webp" alt="" />
            </div>
            <div className="p-4 text-center border border-5 border-light border-top-0">
              <h4 className="mb-3">3D LED Wall</h4>
              <p>
              A 3D LED screen is a display that allows the display of 3D effects that can be seen with the naked eye without the need for professional glasses. This screen offers extremely realistic 3D effects, ..
              </p>
              <a className="fw-medium" href="">
                Read More
                <i className="fa fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="assets/img/service-11.webp" alt="" />
            </div>
            <div className="p-4 text-center border border-5 border-light border-top-0">
              <h4 className="mb-3">Control Room</h4>
              <p>
              Command and Control Centers serve as key decision-making hubs for directing high-priority missions—from military operations to space flight control...
              </p>
              <a className="fw-medium" href="">
                Read More
                <i className="fa fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="assets/img/service-12.webp" alt="" />
            </div>
            <div className="p-4 text-center border border-5 border-light border-top-0">
              <h4 className="mb-3">Creative Display</h4>
              <p>
              Display technology of any size and shape, integrated with furniture and lighting, indoor and outdoor for stunning visual impact. Each and every date the collaborations ...
              </p>
              <a className="fw-medium" href="">
                Read More
                <i className="fa fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="assets/img/service-13.jpg" alt="" />
            </div>
            <div className="p-4 text-center border border-5 border-light border-top-0">
              <h4 className="mb-3">Indoor Advertisement</h4>
              <p>
              Our indoor LED screens feature advanced technology that ensures clear, sharp images and videos with vivid colors. These LED screens are perfect for creating mesmerizing
              </p>
              <a className="fw-medium" href="">
                Read More
                <i className="fa fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="assets/img/service-14.webp" alt="" />
            </div>
            <div className="p-4 text-center border border-5 border-light border-top-0">
              <h4 className="mb-3">Worship Center</h4>
              <p>
              Hawaii LED provides a solution for churches, temples, mosques, and other worship centers looking for an immersive experience ...
              </p>
              <a className="fw-medium" href="">
                Read More
                <i className="fa fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="assets/img/service-15.webp" alt="" />
            </div>
            <div className="p-4 text-center border border-5 border-light border-top-0">
              <h4 className="mb-3">Retail</h4>
              <p>
              Make a lasting impression on your customers with Retail led displays! Our digital display solutions will help your retail store stand out and create a better brand image by captivating more attention from the visitors. ..
              </p>
              <a className="fw-medium" href="">
                Read More
                <i className="fa fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* Feature Start */}
  <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
    <div className="container feature px-lg-0">
      <div className="row g-0 mx-lg-0">
        <div
          className="col-lg-6 feature-text py-5 wow fadeIn"
          data-wow-delay="0.5s"
        >
          <div className="p-lg-5 ps-lg-0">
            <div className="section-title text-start">
              <h1 className="display-5 mb-4">WHY HAWAII LED SCREEN</h1>
            </div>
            <p className="mb-4 pb-2">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo erat amet
            </p>
            <div className="row g-4">
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-check fa-2x text-primary" />
                  </div>
                  <div className="ms-4">
                    {/* <p className="mb-2">Quality</p> */}
                    <h5 className="mb-0">Latest LED Screen Technology</h5>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-user-check fa-2x text-primary" />
                  </div>
                  <div className="ms-4">
                    {/* <p className="mb-2">Creative</p> */}
                    <h5 className="mb-0">Stylish LED Screen Products</h5>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-drafting-compass fa-2x text-primary" />
                  </div>
                  <div className="ms-4">
                    {/* <p className="mb-2">Free</p> */}
                    <h5 className="mb-0">All time spare availability and service support in LED screen</h5>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-headphones fa-2x text-primary" />
                  </div>
                  <div className="ms-4">
                    {/* <p className="mb-2">Customer</p> */}
                    <h5 className="mb-0">Reliability and satisfaction guaranteed.</h5>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-drafting-compass fa-2x text-primary" />
                  </div>
                  <div className="ms-4">
                    {/* <p className="mb-2">Free</p> */}
                    <h5 className="mb-0">Operational training and Onsite support for LED screen</h5>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-drafting-compass fa-2x text-primary" />
                  </div>
                  <div className="ms-4">
                    {/* <p className="mb-2">Free</p> */}
                    <h5 className="mb-0">Well Trained and Experienced Staffs in LED Screens and Video wall</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 pe-lg-0" style={{ minHeight: 400 }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute img-fluid w-100 h-100"
              src="assets/img/cs5.webp"
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Feature End */}
  {/* Projects Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="section-title text-center">
        <h1 className="display-5 mb-5">Case Study</h1>
      </div>
      <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
        <div className="col-12 text-center">
          <ul className="list-inline mb-5" id="portfolio-flters">
            <li className="mx-2 active" data-filter="*">
              All
            </li>
            <li className="mx-2" data-filter=".first">
              General Carpentry
            </li>
            <li className="mx-2" data-filter=".second">
              Custom Carpentry
            </li>
          </ul>
        </div>
      </div>
      <div className="row g-4 portfolio-container">
        <div
          className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <img
                className="img-fluid w-100"
                src="assets/img/cs1.webp"
                alt=""
              />
              <div className="portfolio-overlay">
                <a
                  className="btn btn-square btn-outline-light mx-1"
                  href="assets/img/portfolio-1.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
                <a className="btn btn-square btn-outline-light mx-1" href="">
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
            <div className="border border-5 border-light border-top-0 p-4">
              <p className="text-primary fw-medium mb-2">Qatar University</p>
              <h5 className="lh-base mb-0">
              Rental LED Screen P2.6
              </h5>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <img
                className="img-fluid w-100"
                src="assets/img/cs2.webp"
                alt=""
              />
              <div className="portfolio-overlay">
                <a
                  className="btn btn-square btn-outline-light mx-1"
                  href="assets/img/portfolio-2.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
                <a className="btn btn-square btn-outline-light mx-1" href="">
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
            <div className="border border-5 border-light border-top-0 p-4">
              <p className="text-primary fw-medium mb-2">Qatar Expo</p>
              <h5 className="lh-base mb-0">
              Rental LED Screen P2.6
              </h5>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <img
                className="img-fluid w-100"
                src="assets/img/cs3.webp"
                alt=""
              />
              <div className="portfolio-overlay">
                <a
                  className="btn btn-square btn-outline-light mx-1"
                  href="assets/img/portfolio-3.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
                <a className="btn btn-square btn-outline-light mx-1" href="">
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
            <div className="border border-5 border-light border-top-0 p-4">
              <p className="text-primary fw-medium mb-2">Hamad Airport</p>
              <h5 className="lh-base mb-0">
              Arab Cup promotion
              </h5>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <img
                className="img-fluid w-100"
                src="assets/img/cs4.webp"
                alt=""
              />
              <div className="portfolio-overlay">
                <a
                  className="btn btn-square btn-outline-light mx-1"
                  href="assets/img/portfolio-4.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
                <a className="btn btn-square btn-outline-light mx-1" href="">
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
            <div className="border border-5 border-light border-top-0 p-4">
              <p className="text-primary fw-medium mb-2">VIP Hotel</p>
              <h5 className="lh-base mb-0">
              Fixd Instalation P2.5
              </h5>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <img
                className="img-fluid w-100"
                src="assets/img/cs5.webp"
                alt=""
              />
              <div className="portfolio-overlay">
                <a
                  className="btn btn-square btn-outline-light mx-1"
                  href="assets/img/portfolio-5.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
                <a className="btn btn-square btn-outline-light mx-1" href="">
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
            <div className="border border-5 border-light border-top-0 p-4">
              <p className="text-primary fw-medium mb-2">Defacto Ezdan Mall</p>
              <h5 className="lh-base mb-0">
              Fixed Insalation
              </h5>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <img
                className="img-fluid w-100"
                src="assets/img/cs6.webp"
                alt=""
              />
              <div className="portfolio-overlay">
                <a
                  className="btn btn-square btn-outline-light mx-1"
                  href="assets/img/portfolio-6.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
                <a className="btn btn-square btn-outline-light mx-1" href="">
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
            <div className="border border-5 border-light border-top-0 p-4">
              <p className="text-primary fw-medium mb-2">Hilton Hotel</p>
              <h5 className="lh-base mb-0">
              Curve Fixed Instalation
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Projects End */}
  {/* Quote Start */}
  <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
    <div className="container quote px-lg-0">
      <div className="row g-0 mx-lg-0">
        <div className="col-lg-6 ps-lg-0" style={{ minHeight: 400 }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute img-fluid w-100 h-100"
              src="assets/img/quote.webp"
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
        </div>
        <div
          className="col-lg-6 quote-text py-5 wow fadeIn"
          data-wow-delay="0.5s"
        >
          <div className="p-lg-5 pe-lg-0">
            <div className="section-title text-start">
              <h1 className="display-5 mb-4">Free Quote</h1>
              <h4 className="display-8 mb-4">LED Signage with
              Innovative Technology</h4>
            </div>
            <p className="mb-4 pb-2">
            Compact LED displays of Smart LED Indoor Signage enhance your indoor advertising and our Smart LED Outdoor Signage G-Pro Series is your businesses go to digital signage for indoor usage. Learn more below.
            </p>
            <form>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Your Name"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="email"
                    className="form-control border-0"
                    placeholder="Your Email"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Your Mobile"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <select
                    className="form-select border-0"
                    style={{ height: 55 }}
                  >
                    <option selected="">Select A Service</option>
                    <option value={1}>Service 1</option>
                    <option value={2}>Service 2</option>
                    <option value={3}>Service 3</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control border-0"
                    placeholder="Special Note"
                    defaultValue={""}
                  />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Quote End */}
  {/* Team Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="section-title text-center">
        <h1 className="display-5 mb-5">Team Members</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item">
            <div className="overflow-hidden position-relative">
              <img className="img-fluid" src="assets/img/team-1.jpg" alt="" />
              <div className="team-social">
                <a className="btn btn-square" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="text-center border border-5 border-light border-top-0 p-4">
              <h5 className="mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item">
            <div className="overflow-hidden position-relative">
              <img className="img-fluid" src="assets/img/team-2.jpg" alt="" />
              <div className="team-social">
                <a className="btn btn-square" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="text-center border border-5 border-light border-top-0 p-4">
              <h5 className="mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item">
            <div className="overflow-hidden position-relative">
              <img className="img-fluid" src="assets/img/team-3.jpg" alt="" />
              <div className="team-social">
                <a className="btn btn-square" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="text-center border border-5 border-light border-top-0 p-4">
              <h5 className="mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="team-item">
            <div className="overflow-hidden position-relative">
              <img className="img-fluid" src="assets/img/team-4.jpg" alt="" />
              <div className="team-social">
                <a className="btn btn-square" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="text-center border border-5 border-light border-top-0 p-4">
              <h5 className="mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
  {/* Testimonial Start */}
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="section-title text-center">
        <h1 className="display-5 mb-5">Testimonial</h1>
      </div>
      <div className="owl-carousel testimonial-carousel">
        <div className="testimonial-item text-center">
          <img
            className="img-fluid bg-light p-2 mx-auto mb-3"
            src="assets/img/testimonial-1.jpg"
            style={{ width: 90, height: 90 }}
          />
          <div className="testimonial-text text-center p-4">
            <p>
              Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
              duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
              erat magna elitr erat sit sit erat at rebum justo sea clita.
            </p>
            <h5 className="mb-1">Client Name</h5>
            <span className="fst-italic">Profession</span>
          </div>
        </div>
        <div className="testimonial-item text-center">
          <img
            className="img-fluid bg-light p-2 mx-auto mb-3"
            src="assets/img/testimonial-2.jpg"
            style={{ width: 90, height: 90 }}
          />
          <div className="testimonial-text text-center p-4">
            <p>
              Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
              duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
              erat magna elitr erat sit sit erat at rebum justo sea clita.
            </p>
            <h5 className="mb-1">Client Name</h5>
            <span className="fst-italic">Profession</span>
          </div>
        </div>
        <div className="testimonial-item text-center">
          <img
            className="img-fluid bg-light p-2 mx-auto mb-3"
            src="assets/img/testimonial-3.jpg"
            style={{ width: 90, height: 90 }}
          />
          <div className="testimonial-text text-center p-4">
            <p>
              Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
              duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
              erat magna elitr erat sit sit erat at rebum justo sea clita.
            </p>
            <h5 className="mb-1">Client Name</h5>
            <span className="fst-italic">Profession</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}

</>

    </div>
  )
}
