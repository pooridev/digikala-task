// External dependencies
import { FC } from 'react';
import { matchPath, NavLink, useLocation } from 'react-router-dom';

// Internal dependencies
import { SideBarItemProp } from '../../../types/components/shared/sidebar';

/**
 *
 * @returns a `<li />` and an `<a />` element which are used for navigating the user
 */
const SidebarItem: FC<SideBarItemProp> = ({ path, title, icon }) => {
  const { pathname } = useLocation();

  // TODO: Bad pattern (better to say, sag pattern)
  const isActive =
    path !== '/' || pathname.includes('contacts')
      ? pathname.substring(1).replaceAll('/', ' ').includes(path)
      : pathname.substring(1).includes(path);

  return (
    <li className='sidebar-item'>
      <NavLink className={isActive ? 'active' : ''} to={path}>
        {icon} {title}
      </NavLink>
    </li>
  );
};

export default SidebarItem;
