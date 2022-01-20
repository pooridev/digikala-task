// Internal dependencies
import sidebarItems from '../../constants/sidebar-items';
import SidebarItem from './SidebarItem';

/**
 *
 * @returns the sidebar of the layout (used for navigation)
 */
const Sidebar = () => {
  return (
    <aside role='complementary' className='sidebar'>
      <nav role='navigation' className='sidebar-nav'>
        <ul className='sidebar-nav__ul'>
          {sidebarItems.map(item => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              path={item.path}
              title={item.title}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
