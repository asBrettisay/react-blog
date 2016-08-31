import React from 'react';
import Profile from './Profile/Profile';
import PhotoGrid from './image-block/image-block';
import {getUserInfo, getPosts} from '../../utils/helpers';

require('./Profile-container.css');

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cardData: [],
      userInfo: {}
    };
  }

  componentDidMount() {
    getUserInfo(this.props.params.userid).then(data => {
      console.log(data);
      this.setState({
        userInfo: data.data
      })
    })
    getPosts().then(data => {
      this.setState({
        cardData: data.data
      })
    })
  }

  render() {
    return (
      <div>
        <Profile
        user={this.state.userInfo}/>
        <PhotoGrid
        cardData={this.state.cardData}/>
      </div>
    )
  }
}

export default ProfileContainer;
