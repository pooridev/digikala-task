import { FC } from 'react';

import { Outlet } from 'react-router-dom';

/**
 *
 * @returns a layout containing a sidebar (for navigation stuff) and the main content
 */
const Layout: FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
