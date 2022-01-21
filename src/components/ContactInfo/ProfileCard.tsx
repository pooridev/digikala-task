// External dependencies
import { FunctionComponent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';

// Internal dependencies
import { ProfileCardProp } from '../../types/components/ContactInfo/profile-card';

const ProfileCard: FunctionComponent<ProfileCardProp> = props => {
  const { name, avatar, jobTitle, socials, id } = props;

  const profileCardRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const goToChatPage = () => {
    profileCardRef.current?.classList.add('profile-card--clicked');
    let timerId;

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      navigate(`/${id}/chats`);
    }, 400);
  };

  return (
    <div ref={profileCardRef} className='profile-card'>
      <Zoom overlayBgColorEnd='#262930'>
        <figure role='img' className='profile-card__avatar'>
          <img src={avatar} width='100' />
        </figure>
      </Zoom>
      <div className='profile-card__info'>
        <h5 className='profile-card__info--name'>{name}</h5>
        <span className='profile-card__info--job-title'>{jobTitle}</span>
        <ul className='social-list'>
          {socials?.map(social => (
            <li key={social.id} className='social-list__item'>
              <a href={social.url}>{social.icon}</a>
            </li>
          ))}
        </ul>
        <footer className='footer'>
          <button onClick={goToChatPage}>MESSAGE</button>
        </footer>
      </div>
    </div>
  );
};

export default ProfileCard;
