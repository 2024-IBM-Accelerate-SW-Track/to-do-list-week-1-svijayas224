import React, { Component } from 'react';
  
import "./About.css";
import profileImage from 'src/assets/pfp.jpg';

export default class About extends Component {
  render() {
    return (
      <div>
      <div className="split left">
      <div className="centered">
      <img 
      className="profile_image"
      src={profileImage}
      alt="Profile Pic"
      ></img>
      </div>
      </div>
      <div className="split right">
      <div className="centered">
      <div className="name_title">Shreya Vijayasankar</div>
      <div className="brief_description">
      <p> Computer Science and Game Development Student at Arizona State University</p>
      </div>
      <p>Interests: Fantasy Novels, Baking Desserts, Traveling </p>
      </div>
      <p> Fun Fact: I was voted the funniest in my grade in middle school!</p>
      </div>
      </div>
    )
  }
}