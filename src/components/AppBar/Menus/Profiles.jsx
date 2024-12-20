import React from 'react';
import { Box, Menu, MenuItem } from '@mui/material'; // Import đúng cách
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';


function Profiles() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ padding: 0 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 30, height: 30, mr: 2 }}>
            <img src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/331128624_923149312039349_7123416543553814827_n.jpg?stp=c0.371.1677.1677a_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=kJ3O0uO2UxgQ7kNvgFwXni-&_nc_oc=AdjMP9KIp2l7qIyCmBubZmQK5EhsjcB7Vg6eO4ZSqodjwl6lfqx64vM9jK8q30KJbVI&_nc_zt=24&_nc_ht=scontent.fhan18-1.fna&_nc_gid=AaebcHgYe-HNPsmgnDXIUP3&oh=00_AYCXPDgUFNCbPLklTMdDneQtaB3M7bkSX8FJkLj0NwIEVQ&oe=676A127F" alt="" />
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose} >
          <Avatar sx={{ width: 30, height: 30, mr: 2 }} /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width: 30, height: 30, mr: 2 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profiles