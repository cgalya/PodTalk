import React, { Component } from 'react';
import API from "./../../utils/API";
import List from "../list/List";
import EpisodeCard from "../episode-card/EpisodeCard";
import Searchbar from "../search-bar/Searchbar";
import he from "he";
import "./LandingPageIntro.css";


class LandingPageIntro extends Component {
  state = {
    podcast_title: "",
    podcast_description: "",
    image: "",
    episodes: []
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
    API.search(replaced).then(res => this.setState({
      podcast_title: res.data.rss.title,
      podcast_description: res.data.rss.description,
      image: res.data.rss.image,
      episodes: res.data.rss.items
    }))
    .catch(err => console.log(err));   
    
  }

  handleStripHTML = (description) => {
    var stripped = description.replace(/<[^>]+>/g, '');
    var decoded = he.decode(stripped)
    return decoded;
  }

  render() {
    return (
    	<div>
    		<Searchbar 
          podcast_title={this.state.podcast_title}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
    		/>

        {!this.state.episodes.length ? (
        	<h3><span><em>Enter search terms to begin...</em></span></h3>
        ) : (
          <List 
	          length={this.state.episodes.length}
	          podcast_title={this.state.podcast_title}
	          podcast_description={this.state.podcast_description}
	          image={this.state.image}
          >
         	{this.state.episodes.map(episode => {
            return (
              <EpisodeCard
                key={episode.title}
                episode_title={episode.title}
                episode_description={episode.description}
                episode_release_date={episode.released}
                url={episode.link}
                handleStripHTML={this.handleStripHTML}
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