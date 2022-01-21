// External dependencies
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// Internal dependencies
import { ListItemProp } from '../../../types/components/shared/list';

const ListItem: FC<ListItemProp> = ({ item }) => {
  const navigate = useNavigate();

  const goToChat = () => {
    navigate(`/${item.id}/chats`);
  };

  const goToContactInfo = () => {
    navigate(`/contacts/${item.id}`);
  };

  const navigateHandler = () => {
    if ('lastMessage' in item) goToChat();
    else goToContactInfo();
  };

  return (
    <li onClick={navigateHandler} className='list-item'>
      <figure className='list-item__avatar'>
        <img src={item.avatar} alt={item.name + ' avatar'} />
      </figure>
      <div className='list-item__details'>
        <div className='list-item__details--name'>{item.name}</div>
        <div className='list-item__details--number'>
          {'lastMessage' in item ? item.lastMessage.message : item.mobileNumber}
        </div>
      </div>
      {'lastMessage' in item && item.unreadCounts >= 1 && (
        <div className='list-item__unread'>{item.unreadCounts}</div>
      )}
    </li>
  );
};

export default ListItem;
