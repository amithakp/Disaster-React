import React,{ Component} from 'react';
import AdminHeader from '../Admin/adminHeader';
import './helpLine.css';

const url ="http://localhost:8121/helpline";

class HelpLine extends Component {
    constructor(props){
        super(props)
        this.state = {
            HelplineData:''
        }
    }

    renderCard = (HelplineData) => {
        if(HelplineData){
            return HelplineData.map((item,index)=>{
                return (
                    <div className="col" key={item._id}>
                        <div className="card text-white bg-dark mb-3 border-info">
                        {/* <img src="..." className="card-img-top" alt="..."/> */}
                        <div className="card-body">
                            <h4 className="card-title">{item.helplineName}</h4>
                            <p className="card-text">{item.helplinrNumber}</p>
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
                        {this.renderCard(this.state.HelplineData)} 
                    </div>
                </div>
            </>
        )
    }
    componentDidMount(){
        fetch(url, {method:'GET'})
        .then((res) => res.json ())
        .then((data) => {
            this.setState({HelplineData:data})
            console.log(data);
        })
        // fetch(reliefCenterGet, {method:'GET'})
        // .then((res) => res.json ())
        // .then((data) => {
        //     this.setState({ReliefCenterData:data})
        //     console.log(data);
        // })
    }
}

export default HelpLine;
