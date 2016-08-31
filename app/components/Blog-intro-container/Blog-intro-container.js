import React from 'react';
import {usersBlogData} from '../../utils/helpers';
import BlogImage from './Blog-image/Blog-image';
import BlogMeta from './Blog-meta/Blog-meta';

require('./Blog-intro-container.css');

class BlogIntroContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersBlogData: []
    }
  }

  componentDidMount() {
    this.init()
  }

  init() {
    usersBlogData().then((data) => {
      this.setState({
        usersBlogData: data.data
      })
    })
  }

  render() {
    return (
      <div
      className="Blog-intro-main-container">
        {this.state.usersBlogData.map(data => {
          return (
            <div
            className="Blog-intro"
            key={data.id}>
              <BlogImage
              blogInfo={data}/>
              <BlogMeta
              metaInfo={data}/>
            </div>
          )
        })}

      </div>
    )
  }
}

export default BlogIntroContainer;
