import React, { Component } from 'react';
import HomeHeader from'./homeHeader';
import './home3.css';

class Home3 extends Component {
    render() {
        return (
            <>
            <HomeHeader/> 
            <div className="mainDisaster">              
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
            </>
        )
    }
}
export default Home3