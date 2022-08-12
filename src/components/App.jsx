import React from 'react';
import User from './profile/profile';
import user from './profile/user.json';
import friends from './friends/friends.json';
import FriendList from './friends/friendlist';
import StatList from './stats/statList';
import TransactionList from './transaction/transactionList';
import transactions from './transaction/transactions.json';
import stats from './stats/stats.json';
import { Container, BasicWraper } from './app.styled';
export default function App() {
  return (
    <Container>
      <BasicWraper>
        <User user={user} />
        <FriendList friends={friends} />
        <StatList stats={stats} />
      </BasicWraper>

      <TransactionList transactions={transactions} />
    </Container>
  );
}
