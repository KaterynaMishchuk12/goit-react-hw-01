import { FriendListItem } from './FriendListItem';
// import friends from './friends.json';

export const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className="friend-list">
        {friends.map(friend => (
          <li key={friend.id}>
            <FriendListItem {...friend} />
          </li>
        ))}
      </ul>
    </div>
  );
};
