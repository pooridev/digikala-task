// External dependencies
import { FC } from 'react';
import { useSelector } from 'react-redux';

// Internal dependencies
import { ListProp } from '../../../types/components/shared/list';
import { RootState } from '../../../types/state/rootState';
import ListItem from './ListItem';

/**
 *
 * @returns a `<ul />` element which is used for displaying the list of contacts or chats
 */
const List: FC<ListProp> = ({ items }) => {
  return (
    <ul className='list'>
      {items.map(item => (
        <ListItem key={item.contact_id} item={item} />
      ))}
    </ul>
  );
};

export default List;
