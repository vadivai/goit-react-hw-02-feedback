import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ name, avatar, isOnline }) => (
  <li className={css.item}>
    <span className={isOnline ? css.green : css.red}></span>
    <img className={css.avatar} src={avatar} alt={name} width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};
