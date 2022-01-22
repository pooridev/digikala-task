// External dependencies
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// Internal dependencies
import List from '../components/shared/List';
import { ContactListItem } from '../types/components/shared/list';
import { RootState } from '../types/state/rootState';

const Contacts = () => {
  const contacts = useSelector((state: RootState) => state.contacts);

  const contactsWithType: ContactListItem[] = contacts?.map(contact => ({
    ...contact,
    contact_id: contact.id,
    type: 'contact'
  }));

  return (
    <div className='contacts'>
      <List items={contactsWithType} />
      <Outlet />
    </div>
  );
};

export default Contacts;
