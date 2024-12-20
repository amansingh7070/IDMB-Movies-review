import React, { useState } from 'react';
import { AppBar, Toolbar, styled, Box, Typography, InputBase, IconButton } from '@mui/material';
import { Menu, BookmarkAdd, ExpandMore } from '@mui/icons-material';
import { logoURL } from '../../constants/constants';
import HeaderMenu from '../HeaderMenu';

const StyledToolBar = styled(Toolbar)`
  background: #121212;
  min-height: 56px !important;
  padding: 0 115px !important;
  justify-content: space-between;

  & > * {
    padding: 0 16px;
  }

  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;

    & > p {
      font-size: 14px;
      font-weight: 600;
    }
  }

  & > p {
    font-size: 14px;
    font-weight: 600;
  }
`;

const InputSearchField = styled(InputBase)`
  background: #ffffff;
  height: 30px;
  width: 55%;
  border-radius: 5px;
  padding: 0 10px;
`;

const Logo = styled('img')({
  width: 54,
});

const CustomHeader = () => {
  const [open, setOpen] = useState(null);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <AppBar position="static">
      <StyledToolBar>
        {/* Logo */}
        <Logo src={logoURL} alt="logo" />

        {/* Menu Button */}
        <Box onClick={handleClick} aria-controls="header-menu" aria-haspopup="true">
          <IconButton>
            <Menu />
          </IconButton>
          <Typography>Menu</Typography>
        </Box>

        {/* HeaderMenu Component */}
        <HeaderMenu open={open} handleClose={handleClose} />

        {/* Search Field */}
        <InputSearchField placeholder="Search..." />

        {/* IMDB Pro */}
        <Typography>
          IMDB<Box component="span" style={{ fontWeight: 600 }}>Pro</Box>
        </Typography>

        {/* Watchlist */}
        <Box display="flex" alignItems="center">
          <IconButton>
            <BookmarkAdd />
          </IconButton>
          <Typography>Watchlist</Typography>
        </Box>

        {/* Language Selector */}
        <Box display="flex" alignItems="center" sx={{ cursor: 'pointer' }}>
          <Typography>EN</Typography>
          <ExpandMore />
        </Box>
      </StyledToolBar>
    </AppBar>
  );
};

export default CustomHeader;
