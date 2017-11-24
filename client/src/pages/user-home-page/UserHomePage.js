import React, { Component } from 'react';
import PodcastCard from "../../components/podcast-card/PodcastCard";
import CommentCard from "../../components/comment-card/CommentCard";
import List from "../../components/list/List";

class UserHomePage extends Component {
  state = {
    podcasts: [],
    podcast_comments: []
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
                    image={this.state.podcast.image}
                    podcast_title={this.state.podcast.title}
                    podcast_description={this.state.podcast.description}
                    subscribed={this.state.podcast.subscribed}
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
              <List length={this.state.podcast_comments.length}>
                {this.state.podcast_comments.map(comment => {
                  return (
                    <CommentCard
                      key={comment.title}
                      author={comment.author}
                      comment_timestamp={comment.timestamp}
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