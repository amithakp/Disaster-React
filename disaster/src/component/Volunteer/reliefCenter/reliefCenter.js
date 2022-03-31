import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import VolunteerHeader from '../volunteerHeader';
import './reliefCenter.css';
import AddNew  from './addNew';
import EditNew from './editReliefCentre';

const reliefCenterGet ="http://localhost:8121/reliefCenter";

class ReliefCenter extends Component{
    constructor(props){
        super(props)
        this.state = {
            disaster_reliefCenterid:'',
            contact_Number:'',
            reliefCenterName: '',
            totalAccomodation:'',
            vaccancy:'',
            ReliefCenterData:'',
            // index:''
        }
    }
    //  edit = (data) =>{
    //     console.log(data, "item clicked")
    //  }
     renderTable =(ReliefCenterData)=> {
        if(ReliefCenterData){
            return ReliefCenterData.map((item,index)=>{
                return (
                    <tr key={item._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.reliefCenterName}</td>
                        <td>{item.contact_Number}</td>
                        <td>{item.totalAccomodation}</td>
                        <td>{item.vaccancy}</td>
                        <td>
                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button  type="button" onClick={ () => this.setState({
                                contact_Number:item.contact_Number,
                                reliefCenterName:item.reliefCenterName,
                                totalAccomodation:item.totalAccomodation,
                                vaccancy:item.vaccancy

                                })} 
                                className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#editModal">
                                Edit
                            </button>&nbsp;&nbsp;<EditNew contact_Number={this.state.contact_Number}
                                reliefCenterName= {this.state.reliefCenterName}
                                totalAccomodation={this.state.totalAccomodation}
                                vaccancy={this.state.vaccancy}/>
                            <button type="button" className="btn btn-outline-danger">Delete</button>
                            </div>
                        </td>
                    </tr>
                )
            })
        }
    }
        
    render() {
        return (
            <>
            <VolunteerHeader/>
            <p className="heading">Relief Center</p>
            <div className ="container">
                <div className="new-container">
                    {/* <Link to="reliefCenter/addNew" className="btn btn-primary">New</Link> */}
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        New
                    </button>
                </div>
                <AddNew/>
                <table className="table table-hover table-light">
                    <thead>
                        <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Relief Centre Name</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Total Accomodation</th>
                        <th scope="col">Vaccancy</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable(this.state.ReliefCenterData)}  
                    </tbody>
                </table>
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
    }
}


export default ReliefCenter;