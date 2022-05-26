// React
import React from "react";

// MUI
import Container from "@mui/material/Container";

// Local
import Card from "../Card/Card";

// CSS
import "./Cointainer.css";

export default function Cointainer(props) {
  const cards = props.items;
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        m: 10,
        p: 1,
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {cards.map((item) => (
        <Card
          src={item.previewImage}
          title={item.title}
          key={item._id}
          date={item.releaseDate}
        />
      ))}
    </Container>
  );
}
