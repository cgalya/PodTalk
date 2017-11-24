import React, { Component } from 'react';
import Logo from "../../partials/logo/Logo";
import Button from "../../partials/button/Button";
import Input from "../../partials/input/Input";
import EpisodeCard from "../../components/episode-card/EpisodeCard";
import CommentCard from "../../components/comment-card/CommentCard";
import AddComment from "../../components/add-comment/AddComment";
import List from "../../components/list/List";

class EpisodePage extends Component {
  state = {
    podcast_title: "",
    episode: {},
    comments: []
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
        {!this.state.episode ? (
          <li>
            <h3 style={{ marginTop: "10px", marginBottom: "15px" }}><span><em>No episode to display.</em></span></h3>
          </li>
        ) : (
        <div>
          <EpisodeCard
            image={this.state.episode.image}
            podcast_title={this.state.podcast_title}
            episode_title={this.state.episode.title}
            description={this.state.episode.description}
          />
          <AddComment

          />
          <List length={this.state.episodes.length}>
            {this.state.comments.map(comment => {
              return (
                <CommentCard
                  key={comment.title}
                  author={comment.author}
                  timestamp={comment.timestamp}
                  message={comment.message}
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

export default EpisodePage;