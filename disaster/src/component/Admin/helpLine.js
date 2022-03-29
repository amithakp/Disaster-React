import React,{ Component} from 'react';
import AdminHeader from '../Admin/adminHeader';
import './helpLine.css';

const url ="http://localhost:8121/contact";

class HelpLine extends Component {
            constructor(props){
                super(props)
                this.state = {
                    ContactData:''
                }
            }
        
            renderCard = (ContactData) => {
                if(ContactData){
                    return ContactData.map((item,index)=>{
                        return (
                            <div className="col" key={item._id}>
                                <div className="card text-white bg-dark mb-3 border-info">
                                {/* <img src="..." className="card-img-top" alt="..."/> */}
                                <div className="card-body">
                                    <h4 className="card-title">{item.contact_Location}</h4>
                                    <p className="card-text">{item.contact_Number}</p>
                                </div>
                                </div>
                            </div>
                        )
                    })
                }
            }
            render() {
               
                return (
                    <>
                        <AdminHeader/>
                        <p className="heading">HelpLine Number</p>
                        <div className="container-fluid">
                            
                            <div className="row row-cols-1 row-cols-md-2 g-4">
                                {this.renderCard(this.state.ContactData)} 
                            </div>
                        </div>
                    </>
                )
            }
            componentDidMount(){
                fetch(url, {method:'GET'})
                .then((res) => res.json ())
                .then((data) => {
                    this.setState({ContactData:data})
                    console.log(data);
                })
            }
        }
       
export default HelpLine;
