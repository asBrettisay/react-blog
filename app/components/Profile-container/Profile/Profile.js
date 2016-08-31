import React from 'react';

require('./Profile.css');

const Profile = user => {
  return (
    <div>
      user
    </div>
  )
}

Profile.propTypes = {
  user: React.PropTypes.object.isRequired
}

export default Profile;
