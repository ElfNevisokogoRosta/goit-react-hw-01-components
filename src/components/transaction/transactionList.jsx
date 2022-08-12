import { PropTypes } from 'prop-types';
import TransactionItem from './transaction';
import { TransSection, TransTable, TransTH } from './transactionList.styled';
export default function TransactionList({ transactions }) {
  return (
    <TransSection>
      <TransTable>
        <thead>
          <tr>
            <TransTH>Type</TransTH>
            <TransTH>Amount</TransTH>
            <TransTH>Currency</TransTH>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => {
            return (
              <TransactionItem transaction={transaction} key={transaction.id} />
            );
          })}
        </tbody>
      </TransTable>
    </TransSection>
  );
}
TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
