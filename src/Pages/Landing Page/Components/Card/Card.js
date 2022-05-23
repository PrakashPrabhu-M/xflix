import React from "react";
import ReactDOM from 'react-dom';

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import './Card.css';

export default function CardCompo(props){
    return (
        <Card sx={{ maxWidth: '20vw' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={props.src}
              alt={props.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.date}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}