import React from 'react';
import AdminHeader from '../Admin/adminHeader';
import './helpLine.css';

const HelpLine = () => {
    return (
        <>
        <AdminHeader/>
        <div className="mainContainer">
            <div className="mainHead">
                <p className="mainText">
                    Help Line
                </p>
                <p className="mainSubText">We are here to help you and answer questions you may have.Here is how to reach us!</p>
                <p className="number">9933556677</p>
            </div>
        </div>
        </>
    )
}

export default HelpLine;