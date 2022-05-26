import React from "react";

// MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import "./Card.css";

export default function CardCompo(props) {
  return (
    <Card sx={{ minWidth: "15vh", maxWidth: '35vh', mt: 2 }}>
      <CardActionArea>
        <CardMedia component="img" image={props.src} alt={props.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" minHeight="10vh">
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
