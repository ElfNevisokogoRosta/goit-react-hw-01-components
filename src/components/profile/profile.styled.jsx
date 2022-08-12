import styled from 'styled-components';
const ProfileSection = styled.section`
  background-color: rgba(250, 240, 240, 0.377);
  width: 33%;
`;

const ImgWraper = styled.div`
  position: relative;
  padding-top: 100%;
  z-index: 1;
`;
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ProfileDis = styled.div`
  text-align: center;
`;
const ProfileStats = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
`;
const ProfileStatsItem = styled.li`
  display: flex;
  flex-direction: column;
`;
export {
  ProfileSection,
  ImgWraper,
  Img,
  ProfileDis,
  ProfileStats,
  ProfileStatsItem,
};
