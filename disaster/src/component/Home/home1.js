import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import HomeHeader from'./homeHeader';
import './home1.css';

const reliefCenterGet ="http://localhost:8121/reliefCenter";
const url ="http://localhost:8121/news";

class Home1 extends Component{
    constructor(props){
        super(props)
        this.state = {
            // disaster_reliefCenterid:'',
            // reliefCenterName: '',
            // totalAccomodation:'',
            // vaccancy:'',
            ReliefCenterData:'',
            NewsData:''
            // index:''
        }
    }
    renderTable =(ReliefCenterData)=> {
        if(ReliefCenterData){                   
            return ReliefCenterData.map((item,index)=>{
                return (
                    <tr key={item._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.reliefCenterName}</td>
                        <td>{item.totalAccomodation}</td>
                        <td>{item.vaccancy}</td>
                        <td>
                           
                        <Link to ={`/home2/${item.disaster_reliefCenterid}`} key={item.disaster_reliefCenterid}><button type="button" className="btn btn-outline-light btn btn-dark">Details</button></Link>
                            
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
                                <div>Relief Center Opened</div></button>
                        </div>
                        <div className="col">
                            <button className=" totalAcoomodated btn btn-success"><span>2475</span>
                            <div>Tolal Nos Accomodated</div></button>
                        </div>
                        <div className="col">
                            <button className=" remainingVaccancy btn btn-success"><span>84</span>
                            <div>Remaining Vaccancy</div></button>
                        </div>
                    </div>
                </div>                 </div>

                    <div className="tableDiv">
                    <table className="table table-hover table-light">
                    <thead>
                        <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Relief Centre Name</th>
                        <th scope="col">Total Accomodation</th>
                        <th scope="col">Vaccancy</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable(this.state.ReliefCenterData)}  
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
        fetch(reliefCenterGet, {method:'GET'})
        .then((res) => res.json ())
        .then((data) => {
            this.setState({ReliefCenterData:data})
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

export default Home1;    