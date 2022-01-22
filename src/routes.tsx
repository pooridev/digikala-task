import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Chat from './components/Chat';
import ContactInfo from './components/ContactInfo';
import BackgroundImage from './components/shared/BackgroundImage';

// Pages
const Contacts = lazy(() => import('./pages/Contacts'));
const Chats = lazy(() => import('./pages/Chats'));
const NotFound = lazy(() => import('./pages/404'));

/**
 *
 * @returns the element of the route that matched the current location 🔍
 */
const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Chats />}>
        <Route path='/:contact_id/chats' element={<Chat />} />
        <Route path='/' element={<BackgroundImage />} />
      </Route>

      <Route path='/contacts' element={<Contacts />}>
        <Route path='/contacts' element={<BackgroundImage />} />
        <Route path='/contacts/:contact_id' element={<ContactInfo />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default Router;
