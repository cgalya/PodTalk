import React from 'react';
import { Link } from 'react-router-dom'
import PodcastThumbnail from "../../components/podcast-thumbnail/PodcastThumbnail";
import Button from "../button/Button";
import "./LandingPagePodcastCard.css";

const LandingPagePodcastCard = (props) =>
  <div className="landing-page-podcast-box" onClick={() => props.handlePodcastSelection(props.podcast_title)}> 
  	<Link to="/podcast-home" alt={props.podcast_title} ><PodcastThumbnail image={props.image} /></Link>
  	<h6>{props.podcast_title}</h6>
  </div>;

export default LandingPagePodcastCard;