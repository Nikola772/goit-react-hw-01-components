import React from 'react';
import Profile from 'components/Profile/Profile';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHIstory';
import user from '../user.json';
import data from '../data.json';
import FriendList from './FriendList/FriendList';
import friends from '../friends.json';
import transactions from '../transactions.json';


export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div>           
       <Profile 
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
       /> 
      <Statistics title="Upload stats" stats={data}  />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
    
  );
};
