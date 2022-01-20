import sidebarItems from '../../../constants/sidebar-items';

export type SideBarItemProp = Omit<typeof sidebarItems[0], 'id'>;
