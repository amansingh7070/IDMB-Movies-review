import { Menu, MenuItem } from '@mui/material';

const HeaderMenu = ({ open, handleClose }) => {
  const openMenu = Boolean(open); // Ensures open is a boolean

  return (
    <Menu
      id="basic-menu"
      anchorEl={open} // Correct prop name
      open={openMenu} // Boolean to toggle menu visibility
      onClose={handleClose} // Correct prop name
      MenuListProps={{
        'aria-labelledby': 'basic-button', // Matches the button ID
      }}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My Account</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>
  );
};

export default HeaderMenu;
