import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';

import { HeaderProp } from '../../types/components/Chat/header';

const Header: FunctionComponent<HeaderProp> = ({ contact }) => {
  return (
    <header className='conversation-header'>
      <Zoom overlayBgColorEnd='#262930'>
        <img
          className='conversation-header__avatar'
          src={contact?.avatar}
          alt={contact?.name + "'s avatar"}
        />
      </Zoom>
      <div className='conversation-header__info'>
        <h4 className='conversation-header__info--name'>
          <Link to={'/contacts/' + contact?.id}>{contact?.name}</Link>
        </h4>
        <p className='conversation-header__info--lastseen'>
          last seen recently
        </p>
      </div>
    </header>
  );
};

export default Header;
