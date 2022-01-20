import { useRoutes } from 'react-router-dom';

// Pages
import Layout from './layout';
import ContactInfo from './pages/ContactInfo';
import ContactsList from './pages/ContactsList';
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

        { path: 'contacts', element: <ContactsList /> },

        { path: 'contacts/:contact_id', element: <ContactInfo /> },
        { path: 'contacts/:contact_id/chats', element: <Chat /> }
      ]
    }
  ]);

export default Router;
