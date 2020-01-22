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

// import React from 'react';
// import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
// import HomePage from '../components/HomePage';
// import AboutPage from '../components/AboutPage';
// import ContactPage from '../components/ContactPage';
// import FAQPage from '../components/FAQPage';
// import NotFoundPage from '../components/NotFoundPage';
// import ServicesPage from '../components/ServicesPage';
// import Header from '../components/Header';
// import SwipeableViews from 'react-swipeable-views';
// import SwipeableRoutes from 'react-swipeable-routes';

// const AppRouter = () => (
//     <BrowserRouter>
//         <div>
//             <Header />
//             {/* <SwipeableRoutes>
//                 <Route path="/"         render={props => <HomePage {...props} />} />
//                 <Route path="/about"    render={props => <AboutPage {...props} />}  />
//                 <Route path="/contact"  render={props => <ContactPage {...props} />}  />
//                 <Route path="/FAQ"      render={props => <FAQPage {...props} />}  />
//                 <Route path="/services" render={props => <ServicesPage {...props} />}  />
//                 <Route component={NotFoundPage} />
//             </SwipeableRoutes> */}
//             <SwipeableViews>
//                 <div style={Object.assign({}, styles.slide, styles.slide1)}>
//                 slide n°1
//                 </div>
//                 <div style={Object.assign({}, styles.slide, styles.slide2)}>
//                 slide n°2
//                 </div>
//                 <div style={Object.assign({}, styles.slide, styles.slide3)}>
//                 slide n°3
//                 </div>
//             </SwipeableViews>
//         </div>
//     </BrowserRouter>
// );
// export default AppRouter;

import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import FAQPage from '../components/FAQPage';
import NotFoundPage from '../components/NotFoundPage';
import ServicesPage from '../components/ServicesPage';
import Header from '../components/Header';
// import Login from '../authentication/Login';
// import { PrivateRoute } from '../authentication/Login';
// import { BookingsView } from '../views/BookingsView';
import { HomeView } from '../views/HomeView';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));

export default function AppRouter() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <HomeView/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ContactPage/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <FAQPage/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}