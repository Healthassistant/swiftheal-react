import React from 'react'

export default function Carousel(){
	return(
		<div className="carousel-sec container-fluid pl-0">
        <div className="row">
        <div className="col-lg-8">
        <section >
        <div>
        <div id="carousel1" className="carousel slide carousel-fade" data-ride="carousel">
        <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
        <div className="carousel-item active">
        <img src="assets/images/img6.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption">
        <h2>Symptom analyser</h2>
        <p>Get yourself diagnosed without visiting the doctor</p>
        <a href="index.html"><button className="btn btn-success btn-custom">Learn More</button></a>
        </div>
        </div>
        <div className="carousel-item">
        <img src="assets/images/img7.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption">
        <h2>Lab tests</h2>
        <p>Automatically book the required lab tests and get their results.</p>
        <a href="index.html"><button className="btn btn-success btn-custom">Learn More</button></a>
        </div>
        </div>
        <div className="carousel-item">
        <img src="assets/images/img3.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption">
        <h2>Physical meet</h2>
        <p>Appointments for physical meet with doctor is booked, if required.</p>
        <a href="index.html"><button className="btn btn-success btn-custom">Learn More</button></a>
        </div>
        </div>
        <div className="carousel-item">
        <img src="assets/images/img8.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption">
        <h2>Maintenance of medical records</h2>
        <p>All the medical records would maintained on the server for safety and better diagnosis of problems</p>
        <a href="index.html"><button className="btn btn-success btn-custom">Learn More</button></a>
        </div>
        </div>
        </div>
        <a className="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon p-3" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel1" role="button" data-slide="next">
        <span className="carousel-control-next-icon p-3" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
        </a>
        </div>
        </div>
        </section>
        </div>
        <div className="col-lg-4">
        <article className="caro-cont text-center">
        <h1 className="display-4">SwiftHeal</h1>
        <p className="text-left">SwiftHeal is an amazing website which provides you a great healthcare service. It takes care of your health by simplifying the process of diagnosis, you can simply signup to the website and then with its awesome symptom checker
        you can get yourself diagnosed and not only diagnosis, we provide you excellent prescritption through well qualified and experienced doctors, also if required we can easily arrange a physical visit or a lab test and could easily
        manage all your medical reports.</p>
        <a href="index.html"><span className="btn btn-custom-1">Learn More</span></a>
        </article>
        </div>
        </div>
        </div>
        );
    }