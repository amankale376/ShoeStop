import React from 'react';
import { Card , CardContent , CardMedia , Typography , CardActionArea } from '@material-ui/core';
const HomeCard = () =>{
    return<>
    <Card sx = {{maxWidth: 345}}>
        <CardActionArea>
            <CardMedia sx={{height: 140}} 
            />
            <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name
          </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
    </>
}

export default HomeCard;