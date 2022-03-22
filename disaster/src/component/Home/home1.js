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
            <div className="subMain">
                <div className="secondSubSection">
                    <div className="row subSectionRow">
                        <div className="col">
                            <div className="subSRHeading1">Relief Center Details</div>
                        </div>
                        <div className="col">
                            <div className="subSRHeading2">Total Accomodation</div>
                        </div>
                        <div className="col">
                            <div className="subSRHeading3">Vaccancy</div>
                        </div>
                    </div>
                    <div className="row first">
                        <div className="col ">
                            <div className="subFHeading1">IHRD College,Thrissur</div>
                        </div>
                        <div className="col">
                            <div className="subFHeading2">418</div>
                        </div>
                        <div className="col">
                            <div className="subFHeading3">12</div>
                        </div>
                        <div className="col ">
                            <button className="btn btn-success"></button>
                        </div>
                    </div>
                        {/* <div className="col">
                            <span>Total Accomodation</span>
                        </div>
                        <div className="col">
                            <span>Vaccancy</span>
                        </div>
                    </div> */}
                </div>    
                
                
                <div className="notification">
                    <span>Notification</span>
                    <div className="row ">
                        <div className="col">
                            <button className="notification1">Relief Center Details</button>
                        </div>
                        <div className="row ">
                            <div className="col">
                                <button className="notification2">Total Accomodation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
    
}

export default Home1;    