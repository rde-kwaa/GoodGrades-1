// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
// import '../styles/AppRouter.css';
// import TopNavigation from '../components/TopNavigation';
// import Login from '../authentication/Login';
// import { PrivateRoute } from '../authentication/Login';
// import { BookingsView } from '../views/BookingsView';
// import { HomeView } from '../views/HomeView';
// import SchedulerView from '../views/SchedulerView';
// import SwipeableRoutes from 'react-swipeable-routes';

// function AppRouter() {
//     const [user, setUser] = useState({});
//     const [booked, setBooked] = useState(null);

//     const getBookings = () => {
//         var targetUrl = user.type === "tutor" ?
//             'https://good-grades-server.herokuapp.com/api/events/byTutor/' + user.unique_id + '/booked'
//             :
//             'https://good-grades-server.herokuapp.com/api/events/byStudent/' + user.unique_id
//         fetch(targetUrl)
//             .then(blob => blob.json())
//             .then(data => {
//                 console.log({ data })
//                 setBooked(data);
//                 return data;
//             })
//             .catch(e => {
//                 console.log(e);
//                 return e;
//             });
//     }

//     useEffect(() => {
//         if (!booked && user.unique_id) {
//             getBookings()
//         }
//     })

//     return (
//         <BrowserRouter>
//             <div>
//                 <Switch>
//                 <Route path="/login" component={Login} exact={true} />
//                 <Route path="/bookings" component={BookingsView} />
//                 <Route path="/home" component={HomeView} />
//                 <Route path="/scheduler" component={SchedulerView} />
//                 </Switch>
//             </div>
//         </BrowserRouter>
//     );
// }

// export default AppRouter;

import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import FAQPage from '../components/FAQPage';
import NotFoundPage from '../components/NotFoundPage';
import ServicesPage from '../components/ServicesPage';
import Header from '../components/Header';
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/FAQ" component={FAQPage} />
                <Route path="/services" component={ServicesPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;