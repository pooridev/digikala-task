// External dependencies
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

// Internal dependencies
import List from '../components/shared/List';
import { RootState } from '../types/state/rootState';
import { Contact } from '../types/state/slices/contact';
import ProfileCard from '../components/ContactInfo/ProfileCard';

/**
 *
 * @returns a page containing the information of a contact 📞
 */
const ContactInfo = () => {
  const contacts = useSelector((state: RootState) => state.contacts);
  // Extract the id from the url
  const { contact_id } = useParams<{ contact_id: string }>();

  const navigate = useNavigate();

  const [contact, setContact] = useState<Contact>({} as Contact);

  useEffect(() => {
    if (contact_id) {
      // Find the contact with the id from the url
      const contact = contacts?.find(contact => contact.id === contact_id)!;

      // If the contact is not found, navigate to the contacts list
      if (!contact) return navigate('/contacts');

      // Otherwise, set the contact
      setContact(contact);
    }
  }, [contact_id]);

  return (
    <div className='contact-info'>
      <List items={contacts} />
      <div className='contact-info__profile-wrapper'>
        <ProfileCard {...contact} />
      </div>
    </div>
  );
};

export default ContactInfo;
