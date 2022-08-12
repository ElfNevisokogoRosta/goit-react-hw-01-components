import { PropTypes } from 'prop-types';
import { FriendItem, OnlineStatus, FriendName } from './friend.styled';
export default function FriendListItem({ friend: { isOnline, avatar, name } }) {
  return (
    <FriendItem>
      <img src={avatar} alt={name} width="72" />
      <OnlineStatus isOnline={isOnline} />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}
FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
