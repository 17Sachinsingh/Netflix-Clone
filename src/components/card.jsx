import React from "react";
import "../styles/card.css";
import { Card, CardMedia, CardActions, CardContent } from "@mui/material";
const card = (props) => {
  return (
    <div className="card">
      <Card sx={{ maxWidth:345 }} className="card1">
        <CardMedia  
        component='img'
        height='150'
        image={props.image} 
        alt={props.alt} 
        />
        <CardContent>
          <h4>{props.title}</h4>
        </CardContent>
      </Card>
    </div>
  );
};

export default card;
