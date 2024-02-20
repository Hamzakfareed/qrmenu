import React from 'react';
import List from '@mui/material/List';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import RestaurantMenuOption from '@mui/icons-material/FoodBank';
import CategoryIcon from '@mui/icons-material/Category';
import MapIcon from '@mui/icons-material/Map';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';
import { ListSubheader } from '@mui/material';
import ListItemComponent from '../ui/ListItemComponent';


const SideBarComponent =() => {
  return (

    <aside className="menu">
      <List>
  
        <ListItemComponent label="Profile" icon={<AccountCircleIcon/>} toLink="/profile"/>
        <ListItemComponent label="Dashboard" icon={<DashboardIcon/>} toLink="/dashboard"/>
        <ListItemComponent label="Restaurant" icon={<RestaurantIcon/>} toLink="/restaurant"/>
      </List>
      <List
        subheader={
          <ListSubheader component="div" id="restaurant-management">
            Restaurant Management
          </ListSubheader>
        }
      >
        <ListItemComponent label="Food" icon={<RestaurantMenuIcon/>} toLink="/products"/>
        <ListItemComponent label="Category" icon={<CategoryIcon/>} toLink="/categories"/>
        <ListItemComponent label="Modifiers" icon={<RestaurantMenuOption/>} toLink="/modifiers"/>
        <ListItemComponent label="Delivery Locations" icon={<MapIcon/>} toLink="/deliverylocations"/>
        <ListItemComponent label="DineIn Tables" icon={<TableRestaurantIcon/>} toLink="/dinein"/>
      </List>
      <List
        subheader={
          <ListSubheader component="div" id="user-management">
            User Management
          </ListSubheader>
        }
      >
        <ListItemComponent label="Users" icon={<PersonIcon/>} toLink="/users"/>
        <ListItemComponent label="Roles" icon={<LockIcon/>} toLink="/roles"/>
        <ListItemComponent label="Logout" icon={<LogoutIcon/>} toLink="/logout"/>
      </List>
    </aside>

  );
}

export default SideBarComponent;