// External dependencies
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// Internal dependencies
import { ListItemProp } from '../../../types/components/shared/list';

const ListItem: FC<ListItemProp> = ({ item }) => {
  const navigate = useNavigate();

  const goToChat = () => {
    navigate(`/${item.contact_id}/chats`);
  };

  const goToContactInfo = () => {
    navigate(`/contacts/${item.contact_id}`);
  };

  const navigateHandler = () => {
    if (item.type === 'chat') goToChat();
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
          {item.type === 'chat' ? item.lastMessage.message : item.mobileNumber}
        </div>
      </div>
      {item.type === 'chat' && item.unreadCounts >= 1 && (
        <p className='list-item__unread'>{item.unreadCounts}</p>
      )}
    </li>
  );
};

export default ListItem;
