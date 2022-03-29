import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Login from './Login/login';
// import VolunteerLogin from './Login/volunteerLogin';
// import Register from './Login/register';
import RegisterAdmin from './Login/registerAdmin';
import VolunteerAdmin from './Login/registerVolunteer';
import Home from './Home/home';
import Home1 from './Home/home1';
import Home2 from './Home/home2';
import Home3 from './Home/home3';
import ReliefCenter from './Volunteer/reliefCenter/reliefCenter';
import CollectionCentre from './Volunteer/collectionCenter/collectionCentre';
import ReliefItem from './Volunteer/reliefItem/reliefItem';
import EditReliefCentre from './Volunteer/reliefCenter/editReliefCentre';
// import ReliefItem from './Volunteer/reliefItem';
// import Blog from './Volunteer/blog';
import Blog from './Volunteer/blogDisplay';
import Tracking from './Volunteer/tracking';
import Report from './Volunteer/report';
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
            <Route  path="/reliefCenterOpened" component={Home1}/>
            <Route  path="/home2" component={Home2}/>
            <Route  path="/home3" component={Home3}/>
            <Route  path="/adminHeader" component={AdminHeader}/>
            <Route  path="/volunteerHeader" component={VolunteerHeader}/>
            <Route  path="/registerAdmin" component={RegisterAdmin}/>
            <Route  path="/registerVolunteer" component={VolunteerAdmin}/>
            {/* <Route  path="/register" component={Register}/> */}
            <Route  path="/login" component={Login}/>
            {/* <Route  path="/login" component={Login}/> */}
            <Route exact path="/reliefCenter" component={ReliefCenter}/>
            <Route exact path="/collectionCentre" component={CollectionCentre}/>
            <Route  path="/reliefItem" component={ReliefItem}/>
            <Route path="/rereliefCenter/editReliefCentre" component={EditReliefCentre}/>
            {/* <Route  path="/blog" component={Blog}/> */}
            <Route  path="/blogDisplay" component={Blog}/>
            <Route  path="/tracking" component={Tracking}/>
            <Route  path="/report" component={Report}/>
            <Route  path="/blogAdmin" component={BlogAdmin}/>
            <Route  path="/reliefCampaign" component={ReliefCampaign}/>
            <Route  path="/helpLine" component={HelpLine}/>
            <Route  path="/newsAdmin" component={NewsAdmin}/>
        </BrowserRouter>
    )
}
export default Routing;