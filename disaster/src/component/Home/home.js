import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './home.css';
// import VolunteerHeader from '../Volunteer/volunteerHeader';

class Home extends Component{
    render() {
        return (
        <>        
        {/* <center className="homeButton">
                <Link to="/login" className="btn btn-success btn-md">Admin</Link> &nbsp;&nbsp;
                <Link to="/volunteerLogin" className="btn btn-warning btn-md">Volunteer</Link>
            </center> */}
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div className="container-fluid">
                
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    </ul>
                    </div>
                    <form className="d-flex">
                        <Link to="/login"  className="btn btn-outline-primary">Admin</Link>&nbsp;&nbsp;
                        <Link to="/volunteerLogin"  className="btn btn-outline-success">Volunteer</Link>
                    </form>
                </div>
            </nav>
            <div className="mainDisaster">
                <div className="disaster">
                    <div className="disasterName">Kerala Flood 2020</div>
                    <p className="disasterPara">
                    It is caused by a change of wind patterns over the region. This change causes heavy rains in the summer and long dry spells over the other months. In India, the monsoon rains can provide 70% of the country's rainfall for the year. The rain fall so quickly and heavily that it can cause sudden flooding.</p>
                </div>
                <div className="disasterContainer">
                    <div className="reliefCenter">
                        <button className="btn btn-success">Relief Center Opened</button>
                    </div>
                    <div className="collectionCenter">
                        <button className="btn btn-success">Relief Center Opened</button>
                    </div>
                    <div className="reliefSupplyRequest">
                        <button className="btn btn-success">Relief Center Opened</button>
                    </div>
                </div>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125531.64654573647!2d76.15320964942498!3d10.511379921115164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee15ed42d1bb%3A0x82e45aa016ca7db!2sThrissur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1647505871176!5m2!1sen!2sin" style={{height:450,width:600,border:0,loading:"lazy",allowfullscreen:""}}>
                </iframe>
            </div>
        </>
        )
    }
    
}

export default Home;