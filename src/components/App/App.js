import {
  Profile,
  Statistics,
  FriendList,
  TransactionHistory,
} from 'components';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <h2 className="task">Task1</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2 className="task">Task2</h2>
      <div>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
      <h2 className="task">Task3</h2>
      <div>
        <FriendList friends={friends} />
      </div>
      <h2 className="task">Task4</h2>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};
