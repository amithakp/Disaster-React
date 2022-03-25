import React,{Component} from 'react';
import VolunteerHeader from './volunteerHeader';
import './blog.css';

class Blog extends Component{
    render() {
       
        return (
            <>
                <VolunteerHeader/>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                        {/* <img src="..." className="card-img-top" alt="..."/> */}
                        <div className="card-body">
                            <h5 className="card-title">Indian Army, NDRF aiding relief and rescue operations</h5>
                            <p className="card-text">Stating that a total of 11 NDRF teams were camping in various districts, CM Pinarayi Vijayan said that Indian Army personnel were also taking part in the rescue operations and the helicopters of the Air Force and the Navy were all set for any mission. Meanwhile, K Babu (Congress) who spoke in the House representing the opposition, urged the government to improve its disaster management system.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Kerala assembly pays homage to flood victims</h5>
                            <p className="card-text">The Kerala assembly paid homage to the flood victims and pledged all support to the affected families after which Speaker MB Rajesh declared the House as adjourned today. The session for the next two days stands canceled in the wake of the fresh rain alert as the MLAs have to rush to their respective constituencies to coordinate flood relief programs. The House is scheduled to be convened again from October 25.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Orange Alert for 11 districts</h5>
                            <p className="card-text">The IMD on Tuesday had issued an Orange Alert for 11 districts of Kerala indicating heavy rainfall. Twelve districts in the state were put on Orange alert on Thursday also. The IMD sounded an Orange alert for Thiruvananthapuram, Pathanamthitta, Kottayam, Ernakulam, Idukki, Thrissur, Palakkad, Malappuram, Kozhikode, Wayanad and Kannur districts for October 20. An Orange alert has been issued for all districts other than Kannur and Kasaragod on October 21.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Blog;