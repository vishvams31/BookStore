import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import './sty.css';
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <>
    <div className="cf">
    <footer>
    <Container >
      <Stack
      className="cf"
      display={'flex'}
        alignItems={"center"}
        justifyContent={"center"}
        style={{ 
           height: 150, backgroundColor: "#F4F4F4" }}
        spacing={1}
      >
        <img src='https://bookstore-sooty.vercel.app/static/media/site-logo.005b78aa01d0b4eadda3fa91c02202c5.svg' alt="tatva logo" height={45} />
        <Typography variant="body2" className="fs" color={"#929292"}>
           © 2015 Tatvasoft.com. All rights reserved.
        </Typography>  
      </Stack>
    </Container>
    </footer>
    </div>
    </>
  );
};

export default Footer;