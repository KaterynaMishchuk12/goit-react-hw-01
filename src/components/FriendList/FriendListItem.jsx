import css from './FriendList.module.css';

export const FriendListItem = props => {
  return (
    <div className={css.item}>
      <img className={css.avatar} src={props.avatar} alt="Avatar" width="48" />
      <p className={css.name}>{props.name}</p>
      {props.isOnline ? (
        <p className={css.statusOnline}>Online</p>
      ) : (
        <p className={css.statusOffline}>Offline</p>
      )}
    </div>
  );
};
