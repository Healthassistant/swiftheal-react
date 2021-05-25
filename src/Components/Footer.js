import React from 'react'

export default function Footer(){
	return(
        <footer className="main-footer bg-dark py-5 pb-0 m-0">
        <div className="container-fluid">
        <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-6">
        <h4>Contact Us</h4>
        <ul className="list-unstyled">
        <li><i className="fa fa-phone-alt"></i> +91-9897989990, 011-2700102</li>
        <li><i className="fa fa-envelope"></i> healthassistantweb@gmail.com</li>
        <li><i className="fa fa-clock"></i> Calling Hours: &nbsp; 9:00am-7:00pm</li>
        </ul>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6">
        <h4>Useful Links</h4>
        <ul className="list-unstyled">
        <li><a href="#index.html">Home</a></li>
        <li><a href="#index.html">About</a></li>
        <li><a href="#index.html">Contact Us</a></li>
        <li><a href="#index.html">Symptom Analyser</a></li>
        <li><a href="#index.html">Services</a></li>
        </ul>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6">
        <h4>Services</h4>
        <ul className="list-unstyled">
        <li><a href="#index.html">Home</a></li>
        <li><a href="#index.html">About</a></li>
        <li><a href="#index.html">Contact Us</a></li>
        <li><a href="#index.html">Symptom Analyser</a></li>
        <li><a href="#index.html">Services</a></li>
        </ul>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6">
        <h4>Subscribe</h4>
        <p>
        Subscribe to our website to get updates and tips related to healthy life style.
        </p>
        <form className="my-3">
        <div className="input-group">
        <input type="email" className="form-control" size="50" placeholder="Email Address" required />
        <div className="input-group-btn">
        <button type="button" className="btn btn-success">Subscribe</button>
        </div>
        </div> 
        </form>
        </div>
        </div>

        <div className="row">
        <div className="col-12">
        <p>@copyrights2020 reserved</p>
        </div>
        </div>
        </div>
        </footer>
        );
}