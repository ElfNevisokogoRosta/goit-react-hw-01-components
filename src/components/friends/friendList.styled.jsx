import styled from 'styled-components';
const FriendSection = styled.section`
  max-width: 450px;
  width: 100%;
  background-color: rgba(233, 229, 229, 0.384);
`;
const FriendTitle = styled.h2`
  margin: 10px;
  text-align: center;
  padding: 0;
`;
const FriendLists = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export { FriendSection, FriendTitle, FriendLists };
