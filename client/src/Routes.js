import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import PodcastHomePage from './pages/PodcastHomePage';
import PodcastSearchResults from './pages/PodcastSearchResults';
import ProfilePage from './pages/ProfilePage';
import EpisodePage from './pages/EpisodePage';
import UserHomePage from './pages/UserHomePage';
import AccountSettings from './pages/AccountSettings';
import SignUp from './pages/SignUp';

const Routes = () => (
   <Router>
      <div>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/podcast-home" component={PodcastHomePage}/>
        <Route exact path="/search-results" component={PodcastSearchResults}/>
        <Route exact path="/profile" component={ProfilePage}/>
        <Route exact path="/episode" component={EpisodePage}/>
        <Route exact path="/home" component={UserHomePage}/>
        <Route exact path="/settings" component={AccountSettings}/>
        <Route exact path="/sign-up" component={SignUp}/>
     </div>
   </Router>
);

export default Routes;