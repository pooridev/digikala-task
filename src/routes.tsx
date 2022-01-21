import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// Pages
const Layout = lazy(() => import('./layout'));
const ContactInfo = lazy(() => import('./pages/ContactInfo'));
const ContactsList = lazy(() => import('./pages/ContactsList'));
const ChatsList = lazy(() => import('./pages/ChatsList'));
const Chat = lazy(() => import('./pages/Chat'));

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
        { path: '/:contact_id/chats', element: <Chat /> },

        { path: 'contacts', element: <ContactsList /> },
        { path: 'contacts/:contact_id', element: <ContactInfo /> }
      ]
    }
  ]);

export default Router;
