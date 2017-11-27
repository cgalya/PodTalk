import React from 'react';
import PodcastThumbnail from "../../components/podcast-thumbnail/PodcastThumbnail";
import Button from "../button/Button";
import "./PodcastCard.css";

const PodcastCard = (props) =>
  <div className="podcast-box"> 
  	<PodcastThumbnail image={props.image} />
  	<h3>{props.podcast_title}</h3>
  	<h2>{props.podcast_releaseDate}</h2>
  	<Button label={props.subscribed}/>
  </div>;

export default PodcastCard;