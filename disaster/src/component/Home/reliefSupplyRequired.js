import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import HomeHeader from'./homeHeader';
import './home1.css';

const reliefSupplyRequiredGet ="http://localhost:8121/reliefItem";
const url ="http://localhost:8121/news";

class ReliefSupplyRequired extends Component{
    constructor(props){
        super(props)
        this.state = {
            // disaster_reliefCenterid:'',
            // reliefCenterName: '',
            // totalAccomodation:'',
            // vaccancy:'',
            ReliefSupplyRequiredData:'',
            NewsData:''
            // index:''
        }
    }
    renderTable =(ReliefSupplyRequiredData)=> {
        if(ReliefSupplyRequiredData){
            return ReliefSupplyRequiredData.map((item,index)=>{
                return (
                    <tr key={item._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.reliefItemName}</td>
                        <td>{item.quantity}</td>
                        <td>{item.description}</td>
                        <td>
                           
                        <Link to ={`/home2/${item.disaster_reliefItemid}`} key={item.disaster_reliefItemid}><button type="button" className="btn btn-outline-light btn btn-dark">Details</button></Link>
                            
                        </td>
                    </tr>
                )
            })
        }
    }
    renderNotification =(NewsData)=> {
        if(NewsData){
            return NewsData.map((item,index)=>{
                return (
                    <div key={item._id} className="notificationContainer">
                        <button  className="notification_btn_rsr">{item.news_title}</button>
                    </div>
                )
            })
        }
    }
    render() {
        return (
            <>
            <HomeHeader/>
            <div className="paddingDiv"> 
                <div className="secondMainSection">
                    <div className="row mainSectionRow">
                        <div className="col">
                            <button className=" reliefCenter1 btn btn-success"><span>45</span>
                                <div>Collection Center Opened</div></button>
                        </div>
                        <div className="col">
                            <button className=" totalAcoomodated btn btn-success"><span>2475</span>
                            <div>Tolal Nos Collection</div></button>
                        </div>
                        <div className="col">
                            <button className=" remainingVaccancy btn btn-success"><span>84</span>
                            <div>Remaining Collection</div></button>
                        </div>
                    </div>
                </div>                 </div>

                    <div className="tableDiv">
                    <table className="table table-hover table-light">
                    <thead>
                        <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Relief Item Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable(this.state.ReliefSupplyRequiredData)}  
                    </tbody>
                </table></div>
                <div className="notificationSection">
                    <h1 className="notificationText">Notification</h1>
                        {this.renderNotification(this.state.NewsData)}
                </div>                
            </>
        )
    }
    
    componentDidMount(){
        fetch(reliefSupplyRequiredGet, {method:'GET'})
        .then((res) => res.json ())
        .then((data) => {
            this.setState({ReliefSupplyRequiredData:data})
            console.log(data);
        })
        // fetch notification
        fetch(url, {method:'GET'})
        .then((res) => res.json ())
        .then((data) => {
            this.setState({NewsData:data})
            console.log(data);
        })
    }
}

export default ReliefSupplyRequired;    