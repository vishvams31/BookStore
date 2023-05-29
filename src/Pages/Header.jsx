import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Container, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import './hstyle.css';

const Navbar = () => {
  return (
    <Container>
      <Stack
        direction={["column", "row"]}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={2}
      >
        <Stack direction={"row"} justifyContent={"flex-start"}>
          <Link to="/">
            <img src='https://bookstore-sooty.vercel.app/static/media/site-logo.005b78aa01d0b4eadda3fa91c02202c5.svg' alt="logo" height={45} />
          </Link>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          padding={[2, 0]}
        >
          <Link to="/Login" style={{ textDecoration: "none" }}>
            <Typography variant="body1" color="#f14d54">
              Login
            </Typography>
          </Link>
          <Typography variant="body1" color="#414141">
            |
          </Typography>
          <Link to="/Registration" style={{ textDecoration: "none" }}>
            <Typography variant="body1" color="#f14d54">
              Register
            </Typography>
          </Link>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <Link
              to="/cart"
              style={{
                border: "1px solid #E4E4E4",
                padding: 5,
                textDecoration: "none",
                color: "#f14d54",
                borderRadius: 5,
              }}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"flex-end"}
                spacing={1}
              >
                <ShoppingCartIcon color="#f14d54"/>0
                <Typography variant="body1" color={"black"}>
                  Cart
                </Typography>
              </Stack>
            </Link>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={3}
        style={{ height: 65, bgcolor:'#414141' }}
      >
        <input
          type="text"
          placeholder=" What are you looking for..."
          style={{
            fontFamily: "roboto",
            width: 400,
            fontStyle:'italic',
            height: 35,
            border: "1px solid #E4E4E4",
            fontSize: 18,
          }}
        />
        <Button
          variant="contained"
          className="button"
        //   disableElevation
        //   color="secondary"
          startIcon={<SearchIcon />}
          style={{ bgcolor: "#80BF32",marginLeft:10 }}
        >
          Search
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;