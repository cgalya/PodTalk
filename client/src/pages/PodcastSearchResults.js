import React, { Component } from 'react';
import PodcastCard from "./../components/podcast-card";
import List from "./../components/list";

class PodcastSearchResults extends Component {
  state = {
    cards: []
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
      {!this.state.cards.length ? (
        <li>
          <h3 style={{ marginTop: "10px", marginBottom: "15px" }}><span><em>No podcast found.</em></span></h3>
        </li>
      ) : (
        <List length={this.state.cards.length}>
          {this.state.cards.map(card => {
            return (
              <PodcastCard
                key={card.title}
                title={card.title}
              />
            );
          })}
        </List>
      )}
    </div>
    );
  };
}

export default PodcastSearchResults;