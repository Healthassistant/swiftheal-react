import React from 'react'

export default function Header(){

    let myStyle = {
        backgroundColor: '#3282b8'
    }

    return(

        <header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-nav">
        <div className="container-fluid">
        <a className="navbar-brand navimg px-5"  href="index.html">
        <img src="assets/images/logo3.png" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" /> SwiftHeal
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a className="nav-link active" href="index.html">Home</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" href="about.html">About</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" href="symptom.html">Symptom Analyser</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" href="#contactus">Contact Us</a>
        </li>
        <li className="nav-item dropdown btn">
        <a className="nav-link dropdown-toggle dropdownbg active"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false" >
        <i className="fas fa-user"></i> Login
        </a>
        <ul className="dropdown-menu " style={myStyle} aria-labelledby="navbarDropdown" >
        <li><a className="dropdown-item">Login as Doctor</a>
        </li>
        <li><a className="dropdown-item">Login as
        Patient</a></li>
        <li><a className="dropdown-item">Login as Admin</a>
        </li>
        <li><a className="dropdown-item">Pathologist's login</a>
        </li>
        </ul>
        </li>
        <li className="nav-item">
        <a className="nav-link btn signup_modal active px-3"   data-toggle="modal" data-target="#signup-modal"><i className="fa fa-user-plus"></i>
        Sign-Up</a>
        </li>
        </ul>
        </div>
        </div>
        </nav>
        
        <div className="jumbotron text-center">
        <img src="assets/images/logo3.png" width="60" height="60" className="d-inline-block align-top" alt="" loading="lazy" />
        <h1 className="display-4">SwiftHeal</h1>
        <p class="lead">Your Personal Health Assistant, to diagnose all your problems</p>

        </div>
        

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#3282b8" fillOpacity="1"
        d="M0,160L30,176C60,192,120,224,180,218.7C240,213,300,171,360,160C420,149,480,171,540,202.7C600,235,660,277,720,266.7C780,256,840,192,900,149.3C960,107,1020,85,1080,106.7C1140,128,1200,192,1260,197.3C1320,203,1380,149,1410,122.7L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z">
        </path>
        </svg>

        </header>
        );
    }