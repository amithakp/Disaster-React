import React,{ Component} from 'react';
import AdminHeader from '../Admin/adminHeader';
import './helpLine.css';

class HelpLine extends Component {
    render() {
        if(localStorage.getItem('ltk') == null){
            return(
                <>
                <h2>You Need to Login First </h2>
                </>
            )
        }
        return (
            <>
            <AdminHeader/>
            <div className="mainContainer">
                <div className="mainHead">
                    <p className="mainText">
                        Help Line
                    </p>
                    <p className="mainSubText">We are here to help you and answer questions you may have.Here is how to reach us!</p>
                    <p className="number">9933556677</p>
                </div>
            </div>
            </>
        )
    }
}
export default HelpLine;