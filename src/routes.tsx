import { lazy } from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';
import Conversation from './components/Chat/Conversation';
import ContactInfo from './components/ContactInfo/ContactInfo';
import BackgroundImage from './components/shared/BackgroundImage';

// Pages
const Contacts = lazy(() => import('./pages/Contacts'));
const Chats = lazy(() => import('./pages/Chats'));

/**
 *
 * @returns the element of the route that matched the current location 🔍
 */

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Chats />}>
        <Route path='/:contact_id/chats' element={<Conversation />} />
        <Route path='/' element={<BackgroundImage />} />
      </Route>

      <Route path='/contacts' element={<Contacts />}>
        <Route path='/contacts' element={<BackgroundImage />} />
        <Route path='/contacts/:contact_id' element={<ContactInfo />} />
      </Route>
    </Routes>
  );
};

export default Router;
