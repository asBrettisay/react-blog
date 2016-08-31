import React from 'react';
import BlogLink from './Blog-link/Blog-link';

require('./Blog-image.css');

const BlogImage = props => {
  return (
    <div className="image-container">
      <img
      className="blog-intro-img"
      src={props.blogInfo.image}/>
      <BlogLink
      blogInfo={props.blogInfo}/>
    </div>
  )
}

BlogImage.propTypes = {
  blogInfo: React.PropTypes.object.isRequired
}

export default BlogImage
