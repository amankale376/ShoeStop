import React from 'react';
import { Container , makeStyles , Typography, Grid} from '@material-ui/core';
import MenGrid from './menGrid';
import WomenGrid from './womenGrid';
import Carousel1 from './carousel1';
import Grid3 from './grid3';

const useStyles = makeStyles({
    CarouselBG:{
        backgroundColor:'black',
    },    
 
    types:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
    },
    grid1:{ 

         marginTop:'2rem',
        textAlign: 'center',
    },
    container2:{
        backgroundColor:"#EDF6E5",
        paddingTop:'2rem',
        paddingBottom:'2rem',
    },
    container3:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        textAlign:'center',
        paddingTop:'3rem',
        paddingBottom:'3rem',
        backgroundColor:'#FFBCBC'
    },
 
});

const BodyHome = () =>{
    const classes = useStyles();
    return <>

    <div className={classes.CarouselBG}>
    <Container maxWidth={false} disableGutters >
        <Carousel1/>
    </Container>
    </div>

  <div  className={classes.container2}>
   <Container maxWidth='lg'>
       <div className={classes.types}>
       <Typography variant='h2'>
           Shoes
        </Typography>
     
       </div>
       <div className={classes.grid1}>
           <Grid container >
               <Grid item md = {6} className={classes.text1} xs={12}>
                <Typography variant='h5' >
                    Men
                 </Typography>
                <MenGrid/>

               </Grid>
               <Grid item md = {6} className={classes.text1} xs={12}>
            <Typography variant='h5'>
                    Women
                 </Typography >
                 <WomenGrid/>
            </Grid>
           </Grid>
       </div>
        

     
   </Container>
   </div>
<div className={classes.container3}>
<Container maxWidth='lg' disableGutters>
<div className={classes.container3}>
    <Typography variant="h4">
        Choose Your Category 
    </Typography>
</div>
<Grid3/>
</Container>
</div>

    </>
}


export default BodyHome;