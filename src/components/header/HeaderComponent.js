import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import { AppBar, IconButton, InputBase, Toolbar, Typography, Box, Switch, FormControlLabel, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

const HeaderComponent = () => {
  const [isOnline, setIsOnline] = useState(true);

  const handleToggleChange = () => {
    setIsOnline(!isOnline);
  };



  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant='h6' style={{ flexGrow: 1 }}>
              F&B
            </Typography>
          </Grid>
          <Grid item>
            <Box  style={{ backgroundColor: '#ffffff', borderRadius: '5px'}}>
              <InputBase
                sx={{ ml: 1, flex: 1, width:500 }}
                placeholder="Search Product"
                inputProps={{ 'aria-label': 'search product' } }
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item>
            <FormControlLabel label="Offline/Online" control={
              <Switch checked={isOnline} onChange={handleToggleChange} name="Offline/Online" color='warning' />
            } />
            <IconButton type="button" sx={{p:'10px'}} aria-label='profile'>
              <PersonIcon color='warning'/>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderComponent;