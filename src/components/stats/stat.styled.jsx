import styled from 'styled-components';
function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const Item = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;
const Label = styled.span`
  padding: 10px;
  background-color: #fff;
`;
const Percetage = styled.span`
  padding: 10px;
  background-color: ${getRandomColor};
`;
export { Item, Label, Percetage };
