import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles,styled } from '@material-ui/core/styles';
import HSpace from './components/hspace';
import {Provider} from 'react-redux';
import store from './store/store'
export default class App extends Component<{},{}>

{
render() {
  
  
  const FullContainer = styled(Container)({
    padding:0,
    width:"100%",
    margin:0
  });


  
  return (
    <Provider store={store}>
    <FullContainer maxWidth={false}>
      <Box height="100%">
      <AppBar position="static" >
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <HSpace size={2}/>
          <Typography variant="h6" >
            MCAD
          
          </Typography>
        </Toolbar>


      </AppBar>

    


      </Box>
    </FullContainer>
    </Provider>
  );
}
}

