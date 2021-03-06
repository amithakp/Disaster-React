import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './home1.css';
// import VolunteerHeader from '../Volunteer/volunteerHeader';

class Home1 extends Component{
    render() {
        return (
        <div className="paddinDiv"> 
            <div className="secondMainSection">
                <div className="row mainSectionRow">
                    <div className="col">
                        <button className=" reliefCenter1 btn btn-success"><span>45</span>
                            <div>Relief Center Opened</div></button>
                    </div>
                    <div className="col">
                        <button className=" totalAcoomodated btn btn-success"><span>2475</span>
                        <div>Tolat Nos Accomodated</div></button>
                    </div>
                    <div className="col">
                        <button className=" remainingVaccancy btn btn-success"><span>84</span>
                        <div>Remaining Vaccancy</div></button>
                    </div>
                </div>
            </div> 
            <div className="tableSection">
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Relief Center Details</th>
                        <th scope="col">Total Accomodation</th>
                        <th scope="col">Vaccancy</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td scope="row">IHRD College,Thrissur</td>
                        <td>418</td>
                        <td>21</td>
                        <td><button className="btn btn-dark">Details</button></td>
                        </tr>
                        <tr>
                        <td scope="row">Cochin University of Science and Technology,Kochi</td>
                        <td>418</td>
                        <td>12</td>
                        <td><button className="btn btn-dark">Details</button></td>
                        </tr>
                        <tr>
                        <td scope="row">Vidya College ,Thrissur</td>
                        <td>418</td>
                        <td>12</td>
                        <td><button className="btn btn-dark">Details</button></td>
                        </tr>
                        <tr>
                        <td scope="row">St.Johns College, Thirumala</td>
                        <td>418</td>
                        <td>12</td>
                        <td><button className="btn btn-dark">Details</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="notificationSection">
                <h1 className="notificationText">Notification</h1>
            </div>
            <div className="contact-container">
                <span>Contact Numbers</span>
                <div className="contact">
                    8877667555
                </div>
            </div>
            <div className="relifSupplyRequest-container">
                <div className="relif-supply-section">
                    <button className="btn-rsr">Relief supply Request</button>
                </div>
                <div className="relif-supply-section">
                    <button className="btn-rsr">Relief supply Request</button>
                </div>
                <div className="relif-supply-section">
                    <button className="btn-rsr">Relief supply Request</button>
                </div>
                <div className="relif-supply-section">
                    <button className="btn-rsr">Relief supply Request</button>
                </div>
            </div>
            <div className="location">Location</div>
            <div className="relif-center-section4">
                <div className="relif-center-container">
                    <div className="relif-left">
                        <div className="relif-center-part1">
                            <span>IHRD</span>
                            <div >
                                <button className="relif-item-requested">Relief items Requested <div>20</div></button>
                            </div>
                            <div >
                                <button className="volunteer-needed">Volunteer needed <div>20</div></button>
                            </div>
                        </div>
                        <div className="relif-center-part1">
                            <span>IHRD</span>
                            <div >
                                <button className="relif-item-requested">Relief items Requested <div>20</div></button>
                            </div>
                            <div >
                                <button className="volunteer-needed">Volunteer needed <div>20</div></button>
                            </div>
                        </div>
                    </div>
                    <div className="relif-right">
                        <div className="map-container">
                            <div className="supply-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125531.64654573647!2d76.15320964942498!3d10.511379921115164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee15ed42d1bb%3A0x82e45aa016ca7db!2sThrissur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1647505871176!5m2!1sen!2sin" style={{height:450,width:600,border:0,loading:"lazy",allowfullscreen:""}}>
                                </iframe>
                            </div>
                        
                        
                        <p>
                            <a id="btn1" className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Relief items Requested
                            </a>
                            <button id="btn2" className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                Volunteer needed
                            </button>
                        </p>
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div></div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
}

export default Home1;    