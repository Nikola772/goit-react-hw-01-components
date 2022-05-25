import PropTypes from 'prop-types';
import styled from './FriendList.module.css';
import FriendListItem from 'components/FriendListItem/FriendListItem';
 

function FriendList ({ friends }) {
    return (
        <ul className={styled.friend__list}>
            {friends.map(friend => <FriendListItem
                id={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            /> )}
        </ul>
    );
}

FriendList.propTyes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }))
}
export default FriendList;