import React from 'react';
import {List , ListItem, ListItemIcon , ListItemText , makeStyles, Divider} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const useStyles = makeStyles({
    root:{  
       
    },
    text:{
        marginRight:'7rem',
        // eslint-disable-next-line
       ['@media only screen and (max-width: 600px)']:{
        marginRight:'3rem',
       } 
    },
});
const Cart = () =>{
    const classes = useStyles();
return <>
<div >
    <List className={classes.root}>
        <ListItem>
            <ListItemIcon>
            <ShoppingCartIcon/>
            </ListItemIcon>
            <ListItemText primary="Your Cart" className={classes.text} />
        </ListItem>
        <Divider />
        <ListItem>
            <ListItemText>
                Cart Items
            </ListItemText>
        </ListItem>
    </List>
</div>
</>
}

export default Cart;
