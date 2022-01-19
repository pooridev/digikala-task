import { useRoutes } from 'react-router-dom';

// Pages
import Layout from './layouts/MainLayout';
import ContactInfo from './pages/ContactInfo';
import Contacts from './pages/Contacts';
import ChatsList from './pages/ChatsList';
import Chat from './pages/Chat';

/**
 *
 * @returns the element of the route that matched the current location 🔍
 */
const Router = () =>
  useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <ChatsList /> },

        { path: 'contacts', element: <Contacts /> },

        { path: 'contacts/:contact_id', element: <ContactInfo /> },
        { path: 'contacts/:contact_id/chats', element: <Chat /> }
      ]
    }
  ]);

export default Router;
