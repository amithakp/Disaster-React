import React,{Component} from 'react';
import VolunteerHeader from './volunteerHeader';

class Tracking extends Component {
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
                <p className="heading">Tracking</p>
                <hr/>
                <div className="container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125531.64654573647!2d76.15320964942498!3d10.511379921115164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee15ed42d1bb%3A0x82e45aa016ca7db!2sThrissur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1647505871176!5m2!1sen!2sin" style={{height:450,width:600,border:0,loading:"lazy",allowfullscreen:""}}>
                    </iframe>
                </div>
                <hr/>
            </>
        )
    }
}
export default Tracking;