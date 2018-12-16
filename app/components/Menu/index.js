import Menu from './Menu';
import MenuItem from './Menu.Item';
import MenuItemGroup from './Menu.GroupItem';
import SubMenu from './Menu.Sub';

Menu.Item = MenuItem;
Menu.Sub = SubMenu;
Menu.ItemGroup = MenuItemGroup;

export default Menu;
export { MenuItem, MenuItemGroup, SubMenu };
