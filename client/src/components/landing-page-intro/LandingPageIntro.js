import React, { Component } from 'react';
import API from "./../../utils/API";
import List from "../list/List";
import LandingPagePodcastCard from "../landing-page-podcast-card/LandingPagePodcastCard";
import Searchbar from "../search-bar/Searchbar";
import "./LandingPageIntro.css";


class LandingPageIntro extends Component  {
  state = {
    podcast_title: "",
    podcast_feed_url: "",
    podcasts: [], 
    podcast: {}
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    var replaced = this.state.podcast_title.split(' ').join('+');
    API.searchPodcasts(replaced).then(res => this.setState({
      podcasts: res.data.results
    }))
    .catch(err => console.log(err));   
  }

  render() {
    return (
    	<div>
        <h3><em>Enter search terms to begin...</em></h3>
    		<Searchbar 
          podcast_title={this.state.podcast_title}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
    		/>

        {this.state.podcasts.length === 0 ? (
        	<h3><em></em></h3>
        ) : (
          <List 
            podcast_title={this.state.podcast_title}
            length={this.state.podcasts.length}
          >
         	{this.state.podcasts.map((podcast, index) => {
            return (
              <LandingPagePodcastCard
                key={index}
                podcast_title={podcast.collectionName}
                podcast_release_date={podcast.releaseDate}
                image={podcast.artworkUrl100}
                handlePodcastSelection={this.props.handlePodcastSelection}
              />
            );
          })}
          </List>
        )}
      </div>
    );
  };
}

export default LandingPageIntro;