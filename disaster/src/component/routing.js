import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Login from './Login/login';
// import VolunteerLogin from './Login/volunteerLogin';
// import Register from './Login/register';
import RegisterAdmin from './Login/registerAdmin';
import VolunteerAdmin from './Login/registerVolunteer';
import Home from './Home/home';
import ReliefCenter from './Volunteer/reliefCenter';
import ReliefItem from './Volunteer/reliefItem';
import Blog from './Volunteer/blog';
import Tracking from './Volunteer/tracking';
import Report from './Volunteer/report';
import News from './Volunteer/news';
import BlogAdmin from './Admin/blog';
import ReliefCampaign from './Admin/reliefCampaign';
import HelpLine from './Admin/helpLine';
import NewsAdmin from './Admin/news';
import AdminHeader from './Admin/adminHeader';
import VolunteerHeader from './Volunteer/volunteerHeader';
const Routing = () => {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route  path="/adminHeader" component={AdminHeader}/>
            <Route  path="/volunteerHeader" component={VolunteerHeader}/>
            <Route  path="/registerAdmin" component={RegisterAdmin}/>
            <Route  path="/registerVolunteer" component={VolunteerAdmin}/>
            {/* <Route  path="/register" component={Register}/> */}
            <Route  path="/login" component={Login}/>
            {/* <Route  path="/login" component={Login}/> */}
            <Route  path="/reliefCenter" component={ReliefCenter}/>
            <Route  path="/reliefItem" component={ReliefItem}/>
            <Route  path="/blog" component={Blog}/>
            <Route  path="/tracking" component={Tracking}/>
            <Route  path="/report" component={Report}/>
            <Route  path="/news" component={News}/>
            <Route  path="/blogAdmin" component={BlogAdmin}/>
            <Route  path="/reliefCampaign" component={ReliefCampaign}/>
            <Route  path="/helpLine" component={HelpLine}/>
            <Route  path="/newsAdmin" component={NewsAdmin}/>
        </BrowserRouter>
    )
}
export default Routing;