import React, { Component } from 'react';

const addNewCollectionCentre ="http://localhost:8121/collectionCentre";

class AddNew  extends Component {
    constructor(props){
        super(props)
        this.state = {
            disaster_collectionCenterid: Math.floor(Math.random()*1000),
            disaster_id: 1,
            collectionCenterName: '',
            collection_location:'',
        }
    }
    handleAddNewCollectionCentre  = () =>{
        fetch(addNewCollectionCentre,{
            method:'POST',
            headers:{
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body:JSON.stringify(this.state)
        })
        alert("Successfully Added")
    }    

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({[event.target.name]:event.target.value})
    }
    render() {
        return (
            <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="w-75 mx-auto shadow p-5">
                                        <h2 className="text-center mb-4">Add New Collection Centre</h2>
                                        <div className="mb-3">
                                            <label>Collection centre name</label>
                                            <input type="text" name="collectionCenterName" value={this.state.collectionCenterName} onChange={this.handleChange} className="form-control" placeholder="Collection centre name" re/>
                                        </div>
                                        <div className="mb-3">
                                            <label>Location</label>
                                            <input type="text" name="collection_location" value={this.state.collection_location} onChange={this.handleChange} className="form-control" placeholder="Location"/>
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button type="submit" onClick={this.handleAddNewCollectionCentre} className="btn btn-success d-grid gap-2 ">
                                                Add New Collection Centre
                                            </button>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            
            </>
        )
    }
}

export default AddNew;
