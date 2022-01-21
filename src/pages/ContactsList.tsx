// External dependencies
import { useSelector } from 'react-redux';

// Internal dependencies
import List from '../components/shared/List';
import { RootState } from '../types/state/rootState';

const Contacts = () => {
  const contacts = useSelector((state: RootState) => state.contacts);
  return (
    <div className='contacts'>
      <List items={contacts} />
      <div role='presentation' className='contacts-background' />
    </div>
  );
};

export default Contacts;
