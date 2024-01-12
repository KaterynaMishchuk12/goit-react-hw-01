import css from './Profile.module.css';

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={image} alt={name} className={css.avatar} width="180" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsListItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.statsListItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.statsListItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
