// External
import { useSelector } from 'react-redux';

import List from '../components/shared/List/List';
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
