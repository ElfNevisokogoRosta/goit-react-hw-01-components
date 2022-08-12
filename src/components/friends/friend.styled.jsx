import styled from 'styled-components';
const FriendItem = styled.li`
  display: flex;
  text-align: center;
  justify-content: space-evenly;
`;
const FriendName = styled.span`
  min-width: 55px;
`;
const OnlineStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  mask-type: 50px;
  border-radius: 50%;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;

export { FriendItem, OnlineStatus, FriendName };
