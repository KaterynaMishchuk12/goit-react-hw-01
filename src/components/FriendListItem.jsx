export const FriendListItem = props => {
  return (
    <div className="item">
      <img className="avatar" src={props.avatar} alt="Avatar" width="48" />
      <p className="name">{props.name}</p>
      <p className="status">{props.isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};
