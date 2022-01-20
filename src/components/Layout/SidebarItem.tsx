// External dependencies
import { FC } from 'react';
import { NavLink, RouteMatch } from 'react-router-dom';

// Internal dependencies
import { SideBarItemProp } from '../../types/components/Layout/sidebar';

/**
 *
 * @returns a `<li />` and an `<a />` element which are used for navigating the user
 */
const SidebarItem: FC<SideBarItemProp> = ({ path, title, icon }) => {
  return (
    <li className='sidebar-item'>
      <NavLink to={path}>
        {icon} {title}
      </NavLink>
    </li>
  );
};

export default SidebarItem;
