import React from 'react';
import { Grid , makeStyles } from '@material-ui/core';
import HomeCard from './homeCard';
const useStyles = makeStyles({
    root:{
 
       justifyContent:'center',
      textAlign:'center',
      marginTop:'1rem',
        
    },
});
const Grid3 = () =>{
        const classes = useStyles();
        return  <>
        <Grid container spacing={0} >
        <Grid item md={3}  xs={12} className={classes.root}>
            <HomeCard/>
        </Grid>
        <Grid item md={1}  xs={12} className={classes.root}>
        </Grid>
        <Grid item md={3} xs={12}  className={classes.root}>
            <HomeCard/>
        </Grid>
        <Grid item md={1}  xs={12} className={classes.root}>
        </Grid>
        <Grid item md={3}  xs={12} className={classes.root}>
            <HomeCard/>
        </Grid>  
        <Grid item md={1}  xs={12} className={classes.root}>
        </Grid>
        
        
        </Grid>
        </>
    }   
    export default Grid3;
