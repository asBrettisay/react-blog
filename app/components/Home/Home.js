import React from 'react';
import BlogIntro from '../Blog-intro-container/Blog-intro-container';

require ('./Home.css');

class Home extends React.Component {
  render() {
    return (
      <div
      className="main-home-container">
        <BlogIntro />
      </div>
    )
  }
}

export default Home
