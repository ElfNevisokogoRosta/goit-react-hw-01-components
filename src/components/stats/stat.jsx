import { PropTypes } from 'prop-types';
import { Item, Label, Percetage } from './stat.styled';
export default function StatItem({ stat: { id, label, percentage } }) {
  return (
    <Item>
      <Label>{label}</Label>
      <Percetage>{percentage}%</Percetage>
    </Item>
  );
}
StatItem.propTypes = {
  stat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
