import React, { Component } from 'react';

const addNewReliefCentre ="http://localhost:8121/reliefCenter";

class AddNew  extends Component {
    constructor(props){
        super(props)
        this.state = {
            disaster_reliefCenterid: Math.floor(Math.random()*1000),
            disaster_id: 1,
            contact_Number: '',
            reliefCenterName: '',
            totalAccomodation:'',
            vaccancy:''
        }
    }
    handleAddNewReliefCentre  = () =>{
        fetch(addNewReliefCentre,{
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
                                {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="w-75 mx-auto shadow p-5">
                                        <h2 className="text-center mb-4">Add New Centre</h2>
                                        <div className="mb-3">
                                            <label>Relief centre name</label>
                                            <input type="text" name="reliefCenterName" value={this.state.reliefCenterName} onChange={this.handleChange} className="form-control" placeholder="Relief centre name"/>
                                        </div>
                                        <div className="mb-3">
                                            <label>Contact</label>
                                            <input type="text" name="contact_Number" value={this.state.contact_Number} onChange={this.handleChange} className="form-control" placeholder="contact Number"/>
                                        </div>
                                        <div className="mb-3">
                                            <label>Total Accomodation</label>
                                            <input type="text" name="totalAccomodation" value={this.state.totalAccomodation} onChange={this.handleChange} className="form-control" placeholder="Total Accomodation"/>
                                        </div>
                                        <div className="mb-3">
                                            <label>Vaccancy</label>
                                            <input type="text" name="vaccancy" value={this.state.vaccancy} onChange={this.handleChange} className="form-control"  placeholder="Vaccancy"/>
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button type="submit" onClick={this.handleAddNewReliefCentre} className="btn btn-success d-grid gap-2 ">
                                                Add New Relief Centre
                                            </button>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            
            </>
        )
    }
}

export default AddNew;
