import React, { Component } from 'react';
import Input from "../../components/input/Input";
import Searchbar from "../../components/search-bar/Searchbar";
import PodcastCard from "../../components/podcast-card/PodcastCard";
import EpisodeCard from "../../components/episode-card/EpisodeCard";
import List from "../../components/list/List";

import API from "./../../utils/API";
import he from "he";
import "./PodcastHomePage.css";

class PodcastHomePage extends Component {
  state = {
    podcast: {},
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
    API.searchEpisodes(replaced).then(res => this.setState({
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
    console.log("Podcast Home Page: " + this.props.podcast_title);
    return (
      <div>
        <PodcastCard

        />

        {this.state.episodes.length === 0 ? (
          <h3><em>No episodes founds.</em></h3>
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
                key={episode.released}
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

export default PodcastHomePage;
