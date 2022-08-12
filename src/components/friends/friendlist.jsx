import { PropTypes } from 'prop-types';
import FriendListItem from './friend';
import { FriendSection, FriendTitle, FriendLists } from './friendList.styled';
export default function FriendList({ friends }) {
  return (
    <FriendSection>
      <div>
        <FriendTitle>Friend List</FriendTitle>
        <FriendLists>
          {friends.map(friend => (
            <FriendListItem friend={friend} key={friend.id} />
          ))}
        </FriendLists>
      </div>
    </FriendSection>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
