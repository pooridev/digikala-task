import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { HeaderProp } from '../../types/components/Chat/Conversation/header';

const Header: FunctionComponent<HeaderProp> = ({ contact }) => {
  return (
    <header className='conversation-header'>
      <h4 className='conversation-header__name'>
        <Link to={'/contacts/' + contact?.id}>{contact?.name}</Link>
      </h4>
      <p className='conversation-header__lastseen'>last seen recently</p>
    </header>
  );
};

export default Header;
