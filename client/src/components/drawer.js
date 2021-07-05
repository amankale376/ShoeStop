import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Cart from './cart';


const Drawer = ({Dstate , setDstate}) => {

    const anchor = 'right';
    const toggleDrawer = (open) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setDstate(open);
    };
  
      return  (<SwipeableDrawer
          anchor={anchor}
          open={Dstate}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Cart/>
        </SwipeableDrawer>);
 
}

export default Drawer;