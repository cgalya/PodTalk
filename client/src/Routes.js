import React, { Component } from 'react';
import {Route} from "react-router-dom";
import LandingPage from './pages/landing-page/LandingPage';
import PodcastHomePage from './pages/podcast-home-page/PodcastHomePage';
import PodcastSearchResults from './pages/podcast-search-results/PodcastSearchResults';
import ProfilePage from './pages/profile-page/ProfilePage';
import EpisodePage from './pages/episode-page/EpisodePage';
import UserHomePage from './pages/user-home-page/UserHomePage';
import AccountSettings from './pages/account-settings/AccountSettings';
import SignUp from './pages/sign-up/SignUp';
import LogIn from './pages/log-in/LogIn';


class Routes extends Component {
   state = {
      podcast: ""
   }

   handlePodcastSelection = title => {
      this.setState({
         podcast: title
      });
   }


    render(){

      return (
        <div>
          <Route exact path="/" component={LandingPage} handlePodcastSelection={this.handlePodcastSelection} />
          <Route exact path="/podcast-home" component={PodcastHomePage} podcast={this.state.podcast} />
          <Route exact path="/search-results" component={PodcastSearchResults}/>
          <Route exact path="/profile" component={ProfilePage}/>
          <Route exact path="/episode" component={EpisodePage}/>
          <Route exact path="/home" component={UserHomePage}/>
          <Route exact path="/settings" component={AccountSettings}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/login" component={LogIn}/>
        </div>


      );

    };

}

export default Routes;