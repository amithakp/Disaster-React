import React,{Component} from 'react';
import VolunteerHeader from '../volunteerHeader';
import '../reliefCenter/reliefCenter.css';
import AddNew  from './addNew';

const reliefItem ="http://localhost:8121/reliefItem";

class ReliefItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            // reliefCenterName: '',
            // totalAccomodation:'',
            // vaccancy:''
            ReliefItemData:'',
            // index:''
        }
    }
     renderTable =(ReliefItemData)=> {
        if(ReliefItemData){
            return ReliefItemData.map((item,index)=>{
                return (
                    <tr key={item._id}>
                        <th scope="row">{index + 1}</th>
                        {/* <td>{index + 1}</td> */}
                        <td>{item.reliefItemName}</td>
                        <td>{item.quantity}</td>
                        <td>{item.description}</td>
                        <td>
                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-warning">Edit</button>&nbsp;&nbsp;
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
                        <th scope="col">Relief Item Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable(this.state.ReliefItemData)}  
                    </tbody>
                </table>
            </div>
            </>
        )
    }
    componentDidMount(){
        fetch(reliefItem, {method:'GET'})
        .then((res) => res.json ())
        .then((data) => {
            this.setState({ReliefItemData:data})
            
        })
    }
}


export default ReliefItem;