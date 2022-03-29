import React,{ Component} from 'react';
import {Link} from 'react-router-dom';
import './reliefCampaign.css';
import AdminHeader from '../Admin/adminHeader';

const url ="http://localhost:8121/reliefCampaign";
class ReliefCampaign extends Component {
    constructor(props){
        super(props)
        this.state = {
            ReliefCampaignData:''
        }
    }
    renderCard = (ReliefCampaignData) => {
        if(ReliefCampaignData){
            return ReliefCampaignData.map((item,index)=>{
                return (
                    <div className="col" key={item._id}>
                        <div className="card border-info">
                            <div className="card-body">
                                <h4 className="card-title">{item.disaster_name}</h4>
                                <p className="card-text">{item.discrimination}</p>
                                <Link to ="/joinCampaign" class="btn hero-btn">Join Campaign</Link>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
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
            <AdminHeader/>
            <p className="heading">Relief Campaign</p>
                <div className="containerCard">
                    <div className="row row-cols-1 row-cols-md-1 g-4">
                        {this.renderCard(this.state.ReliefCampaignData)} 
                    </div>
                </div>
            </>
        )
    }
    componentDidMount(){
        fetch(url, {method:'GET'})
        .then((res) => res.json ())
        .then((data) => {
            this.setState({ReliefCampaignData:data})
            console.log(data);
        })
    }
}
export default ReliefCampaign;
