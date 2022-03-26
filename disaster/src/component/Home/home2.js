import React, { Component } from 'react';
import HomeHeader from'./homeHeader';
import './home2.css';

class Home2 extends Component {
    render() {
        return (
            <>
            <HomeHeader/> 
            <div className="mainDisaster">              
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
            </div> 
            </>
        )
    }
}
export default Home2