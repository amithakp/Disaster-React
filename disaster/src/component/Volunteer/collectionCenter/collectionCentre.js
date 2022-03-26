import React,{Component} from 'react';
import VolunteerHeader from '../volunteerHeader';
import '../reliefCenter/reliefCenter.css';
import AddNew  from './addNew';

const collectionCenterGet ="http://localhost:8121/collectionCentre";

class CollectionCentre extends Component{
    constructor(props){
        super(props)
        this.state = {
            CollectionCenterData:'',
        }
    }
     renderTable =(CollectionCenterData)=> {
        if(CollectionCenterData){
            return CollectionCenterData.map((item,index)=>{
                return (
                    <tr key={item._id}>
                        <th scope="row">{index + 1}</th>
                        {/* <td>{index + 1}</td> */}
                        <td>{item.collectionCenterName}</td>
                        <td>{item.collection_location}</td>
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
                        <th scope="col">Collection Centre Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable(this.state.CollectionCenterData)}  
                    </tbody>
                </table>
            </div>
            </>
        )
    }
    componentDidMount(){
        fetch(collectionCenterGet, {method:'GET'})
        .then((res) => res.json ())
        .then((data) => {
            this.setState({CollectionCenterData:data})
            
        })
    }
}


export default CollectionCentre;