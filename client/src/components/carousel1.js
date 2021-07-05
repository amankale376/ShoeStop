import React from 'react';
import Carousel from 'react-material-ui-carousel';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpeg';
import img4 from '../images/4.jpg';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    img:{
        height:'70vh',
        ['@media only screen and (max-width: 600px)']:{
            height:'40vh',
        },
    },
});


const Carousel1= ()=>{
    const classes = useStyles();
return <>
    <Carousel autoPlay swipe animation="fade" cycleNavigation  indicators={false} timeout={100} >
        <div className={classes.img}>
        <img src={img4} width="100%" height='100%' />
        </div>
        <div className={classes.img}>
        <img src={img3} width="100%" height='100%' />
        </div>
        <div className={classes.img}>
        <img src={img2} width="100%" height='100%' />
        </div>
        <div className={classes.img}>
        <img src={img1} width="100%" height='100%' />
        </div>
    </Carousel>
    </>
}
export default Carousel1;