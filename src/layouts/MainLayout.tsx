// External dependencies
import { FC } from 'react';

// Components
import Sidebar from '../components/shared/Sidebar';

/**
 *
 * @returns a layout containing a sidebar (for navigation stuff) and the main content
 */
const MainLayout: FC = ({ children }) => {
  return (
    <div className='main-layout'>
      <Sidebar />
      <main role='main' className='main-content'>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
