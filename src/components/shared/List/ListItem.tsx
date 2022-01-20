// External dependencies
import { FC } from 'react';

// Internal dependencies
import { ListItemProp } from '../../../types/components/shared/list';

const ListItem: FC<ListItemProp> = ({ item }) => {
  return (
    <li className='list-item'>
      <figure className='list-item__avatar'>
        <img src={item.avatar} alt={item.name + ' avatar'} />
      </figure>
      <div className='list-item__details'>
        <div className='list-item__title'>{item.name}</div>
        <div
          className={
            'list-item__' + item.type === 'contact'
              ? 'mobile-number'
              : 'message'
          }>
          {item.type === 'contact' ? item.mobileNumber : item.lastMessage}
        </div>
      </div>
    </li>
  );
};

export default ListItem;
