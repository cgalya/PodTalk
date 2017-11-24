import React, { Component } from 'react';
import Logo from "../../partials/logo/Logo";
import Button from "../../partials/button/Button";
import Input from "../../partials/input/Input";
import ArtworkThumbnail from "../../partials/artwork-thumbnail/ArtworkThumbnail";
import PodcastCard from "../../components/podcast-card/PodcastCard";
import EpisodeCard from "../../components/episode-card/EpisodeCard";
import List from "../../components/list/List";

class PodcastHomePage extends Component {
  state = {
    podcast: {},
    episodes: []
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  render() {
   
    return (
      <div>
        {!this.state.podcast ? (
          <li>
            <h3 style={{ marginTop: "10px", marginBottom: "15px" }}><span><em>No podcast to display.</em></span></h3>
          </li>
        ) : (
        <div>
          <PodcastCard
            src={this.state.podcast.image}
            title={this.state.podcast.title}
            desc={this.state.podcast.description}
            subscribed={this.state.podcast.status}
          />

          <List length={this.state.episodes.length}>
            <Input
              placeholder="Input"
              className="Input"
            />
            {this.state.episodes.map(episode => {
              return (
                <EpisodeCard
                  key={episode.title}
                  title={episode.title}
                  desc={episode.description}
                  pub_date={episode.pub_date}
                  url={episode.url}
                />
              );
            })}
          </List>
        </div>
        )}
      </div>
    );
  };
}

export default PodcastHomePage;
