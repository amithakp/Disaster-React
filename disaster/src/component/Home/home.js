import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';
// import VolunteerHeader from '../Volunteer/volunteerHeader';

const Home = () => {
    return(

        <>        
           <center className="homeButton">
                <Link to="/login" className="btn btn-success btn-md">Admin</Link> &nbsp;&nbsp;
                <Link to="/volunteerLogin" className="btn btn-warning btn-md">Volunteer</Link>
            </center>
        </>
    )
}

export default Home;