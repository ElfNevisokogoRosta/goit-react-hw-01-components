import React from 'react';
import PropTypes from 'prop-types';
import {
  ProfileSection,
  ImgWraper,
  Img,
  ProfileDis,
  ProfileStats,
  ProfileStatsItem,
} from './profile.styled';
const User = ({ user: { username, tag, location, avatar, stats } }) => {
  return (
    <ProfileSection>
      <ProfileDis className="profile">
        <div>
          <ImgWraper>
            <Img src={avatar} alt="User avatar" className="avatar" />
          </ImgWraper>
          <p className="name">{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>
        <ProfileStats>
          <ProfileStatsItem>
            <span className="label">Followers</span>
            <span className="quantity"> {stats.followers}</span>
          </ProfileStatsItem>
          <ProfileStatsItem>
            <span className="label">Views</span>
            <span className="quantity"> {stats.views}</span>
          </ProfileStatsItem>
          <ProfileStatsItem>
            <span className="label">Likes</span>
            <span className="quantity"> {stats.likes}</span>
          </ProfileStatsItem>
        </ProfileStats>
      </ProfileDis>
    </ProfileSection>
  );
};
User.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
export default User;
