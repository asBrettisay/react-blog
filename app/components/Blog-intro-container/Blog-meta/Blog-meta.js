import React from 'react';

require('./Blog-meta.css')

const BlogMeta = props => {
  return (
    <div
    className="blog-meta-container">
      <div
      className="blog-meta-inner-container">
        <h2
        className="meta-title">{props.metaInfo.username}</h2>
        <p
        className="blog-meta-text">
          {props.metaInfo.text}
        </p>
      </div>
    </div>
  )
}

BlogMeta.propTypes = {
  metaInfo: React.PropTypes.object.isRequired
}


export default BlogMeta;
