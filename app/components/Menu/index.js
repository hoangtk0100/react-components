import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuItemGroup from './MenuItemGroup';
import SubMenu from './SubMenu';

Menu.Item = MenuItem;
Menu.Sub = SubMenu;
Menu.ItemGroup = MenuItemGroup;

export default Menu;
export { MenuItem, MenuItemGroup, SubMenu };
