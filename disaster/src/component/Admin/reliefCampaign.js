import React from 'react';
import './reliefCampaign.css';
import AdminHeader from '../Admin/adminHeader';

const ReliefCampaign = () => {
    return (
        <>
        <AdminHeader/>
        <div className="container-fluid">
            <div className="background">
                <p className="text">Flood Relief Campaign</p>
                <p className="subText">If you would like to directly wire the money,donate through
                    your charitable trust, or donate through another means,please email us.
                </p>
                <p className="email">admin@relief.com</p>
            </div>
        </div>
        </>
    )
}

export default ReliefCampaign;