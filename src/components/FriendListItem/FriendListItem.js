import PropTypes from 'prop-types';
import stylen from './FriendListItem.module.css';



 

function FriendListItem ({id, avatar, name, isOnline}) {
    return (      
            
            <li className={stylen.item} key={id}>
            {isOnline ? <span className={stylen.status}></span> : 
            <span className={stylen.statusfalse}></span>}      
                
                <img
                    className={stylen.avatar}
                    src={avatar}
                    alt="User avatar"
                    width="48"
                    />
                <p className={stylen.name}>{name}</p>
                
                
            </li>
        
        
    );
}

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}

export default FriendListItem;