import React, { Component } from 'react';
import Button from "../../partials/button/Button";
import PodcastCard from "../../components/podcast-card/PodcastCard";
import CommentCard from "../../components/comment-card/CommentCard";
import List from "../../components/list/List";

class UserHomePage extends Component {
  state = {
    podcasts: [],
    podcastpodcastComments: []
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
        <div>
          {!this.state.podcasts ? (
            <li>
              <h3 style={{ marginTop: "10px", marginBottom: "15px" }}><span><em>No podcasts to display.</em></span></h3>
            </li>
          ) : (
          <div>
            <List length={this.state.podcasts.length}>
              {this.state.podcasts.map(podcast => {
                return (
                  <PodcastCard
                    src={this.state.podcast.image}
                    title={this.state.podcast.title}
                    desc={this.state.podcast.description}
                    subscribed={this.state.podcast.status}
                  />
                );
              })}
            </List>
          </div>
          )}
        </div>
        <div>
          {!this.state.podcastComments ? (
              <li>
                <h3 style={{ marginTop: "10px", marginBottom: "15px" }}><span><em>No podcastComments to display.</em></span></h3>
              </li>
            ) : (
            <div> 
              <List length={this.state.podcastComments.length}>
                {this.state.podcastComments.map(comment => {
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
      </div>
    );
  };
}

export default UserHomePage;