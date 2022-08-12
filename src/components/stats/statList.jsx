import { PropTypes } from 'prop-types';
import StatItem from './stat';
import { StatsSection, StatsTitle, StatsElements } from './statList.styled';
export default function StatsList({ stats }) {
  return (
    <StatsSection>
      <StatsTitle>Upload stats</StatsTitle>
      <StatsElements>
        {stats.map(stat => {
          return <StatItem stat={stat} key={stat.id} />;
        })}
      </StatsElements>
    </StatsSection>
  );
}
StatsList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
