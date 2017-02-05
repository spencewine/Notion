import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomePageContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="homepage-container">

        <div className="homepage-main-image-container">
          <img className="homepage-main-image" src="/assets/brainstorm.jpg"></img>
          <div className="main-slogan"> THINK BETTER. FASTER. TOGETHER.</div>
          <div className="main-mini-desc"> Your collaboration & brainstorming platform
          </div>
          <div className="main-signup-button-container">
            <Link to="/signup">
            <button type="button" className="main-signup-button">GET STARTED</button>
            </Link>
          </div>

          <div className="postit-view">
            <div className="postit yellow">
              <img className="bulb-img" src="/assets/bulb.png" />
            </div>
            <div className="postit lightyellow">
              N
            </div>
            <div className="postit brightgreen">
              O
            </div>
            <div className="postit pink">
              T
            </div>
            <div className="postit yellow">
              I
            </div>
            <div className="postit blue">
              O
            </div>
            <div className="postit green">
              N
            </div>
          </div>
        </div>

        <div className="border-line"/>

        <div className="desc-container">
            <div className="left-desc">
              <div className="left-desc-title">
                  Seamless Design.
              </div>
              <div className="left-desc-content">
                 Unite with your team and brainstorm ideas on your own dynamic board. Some more description we need to think about. Lets get back to this
              </div>

            </div>

            <div className="right-desc">
              <img className="right-desc-img" src="/assets/collaborator-view-2.png" />
            </div>
        </div>

        <div className="team-desc">
          Made by Alvin Yuen, Spencer Goodwine, Hal Carleton & Joe Stephens
        </div>

      </div>
    );
  }
}



