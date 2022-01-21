// External dependencies
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// Internal dependencies
import List from '../components/shared/List';
import { RootState } from '../types/state/rootState';

const Contacts = () => {
  const contacts = useSelector((state: RootState) => state.contacts);
  return (
    <div className='contacts'>
      <List items={contacts} />
      <Outlet />
    </div>
  );
};

export default Contacts;
