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
                <table class="table">
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

            </div>
        </div>
        )
    }
    
}

export default Home1;    