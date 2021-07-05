import React from 'react' ;
import { Grid , makeStyles } from '@material-ui/core';
import HomeCard from './homeCard';

const useStyles = makeStyles({
    root:{
        margin:'1rem',
    },
});


const WomenGrid = () =>{
    const classes = useStyles();
return <>
    <Grid container>
    <Grid item md={5} xs = {12} className={classes.root}>
    <HomeCard/>
    </Grid>
    <Grid item md={5} xs = {12} className={classes.root}>
    <HomeCard/>
    </Grid>
    <Grid item md={5} xs = {12} className={classes.root}>
    <HomeCard/>
    </Grid>
     <Grid item md={5} xs = {12} className={classes.root}>
    <HomeCard/>
    </Grid>
    </Grid>
</>
}

export default WomenGrid;