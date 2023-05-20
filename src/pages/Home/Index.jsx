import React from "react";

import { Box, BoxTitle, BoxText } from "./HomeStyles";
import { Col, Container, Row } from "react-bootstrap";

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.";


const data = [
  {
    id: Math.random(),
    title: "Box titulo 1",
    text: lorem,
    bgColor: "#D5CAFA"
  },
  {
    id: Math.random(),
    title: "Box titulo 2",
    text: lorem,
    bgColor: "#EDA9A9"
  }
];

export const Home = () => {
  return (
    <Row>
      <Col xl={2}>
        {data.map(box => (
          // <Box key={box.id} bgColor={box.bgColor}>
          //   <BoxTitle>{box.title}</BoxTitle>
          //   <BoxText>{box.text}</BoxText>
          // </Box>
          <h1>{box.title}</h1>
        ))}
      </Col>
    </Row>
  )
};