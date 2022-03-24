import React,{Component} from 'react';
import VolunteerHeader from './volunteerHeader';
import './reliefCenter.css';

class ReliefCenter extends Component{
    render() {
        // if(localStorage.getItem('ltk') == null){
        //     return(
        //         <>
        //         <h2>You Need to Login First </h2>
        //         </>
        //     )
        // }
        return (
            <>
                <VolunteerHeader/>
                <div className ="container">
                    <div className="heading">Relief Center  Details</div> &nbsp;
                    <hr/>
                    &nbsp;&nbsp;
                    <div className="name ">
                        <h4>St.Johns College, Thirumala</h4>
                        <h4>Rajagiri School of Engineering & Technology,Ernakulam</h4>
                        <h4>IHRD College ,Thrissur</h4>
                    </div>
                    <p></p>
                </div>
            </>
        )
    }
}

export default ReliefCenter;