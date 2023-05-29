import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import "./Css/mstyle.css";

const Registration1 = () => {
  // const [name, setName] = useState("Dhruv Patel");
  // const [email, setEmail] = useState("dp@gmail.com");
  const [role, setRole] = useState("");
  // const [open, setOpen] = useState(false);
  // const [anchorEl, setAnchorEl] = useState(null);
  const Navigate = useNavigate("");

  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    fname: Yup.string()
      .min(3, "First Name Must be 3 characters long...")
      .required("Please Enter Your First Name"),
    lname: Yup.string()
      .min(3, "Last Name must be 3 characters long...")
      .required("Please Enter Your Last Name"),
    email: Yup.string()
      .email("Please Enter Valid Email")
      .required("please Enter your Email ID"),
    password: Yup.string()
      .min(8, "Password Must be 8 Characters Long...")
      .required("Please Enter Your Password"),
    cpassword: Yup.string()
      .required("Please Enter Confirm Password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const onFormSubmit = async (values) => {
    console.log("On the form submitted", values);

    const requestData = {
      fname: values.fname,
      lname: values.lname,
      email: values.email,
      password: values.password,
    };

    // call API to post submit the form
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      requestData
    );

    if (res.status === 201) {
      console.log(res.data.id);
      toast.success("API call is completted successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  // const NavigateHome = () => {
  //     Navigate('/');
  //     // alert('The login button is clicked...')
  //     console.log("Name:", name);
  //     console.log("Email:", email);
  // }
  // const handleClick = (event) => {
  //     setAnchorEl(event.currentTarget);
  //     setOpen(true);
  // };

  // const handleClose = () => {
  //     setAnchorEl(null);
  //     setOpen(false);
  // };
  const breadcrumbs = [
    <Link
      color="inherit"
      href="/"
      style={{
        textDecoration: "none",
        fontSize: 18,
      }}
      // onClick={handleClick}
    >
      Home
    </Link>,
    <Typography
      className="center "
      key="3"
      color="text.primary"
      style={{
        textDecoration: "none",
        fontSize: 18,
        color: "#f14d54",
      }}
    >
      Create an Account
    </Typography>,
  ];
  return (
    <>
      <div style={{ padding: 5 }}></div>
      <div>
        <div className="center ">
          <Breadcrumbs
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </div>
        <div>
          <div className="center">
            <h1 className="loginheader">Login or Create an Account</h1>
            <hr className="line" style={{color:'#f14d54'}}/>
          </div>
        </div>
        <div style={{
          textAlign:'left'}}>
          <h3 style={{}}>Personal Information</h3>
          <hr style={{ opacity: "0.3" }} />
          <p className="paraStyle">
            Please enter the following information to create your account.
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onFormSubmit}
          >
            {({
              value,
              errors,
              touched,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <div className="side-by-side">
                    <div>
                      <div className="label">First Name</div>
                      <TextField
                        type="text"
                        placeholder="FirstName"
                        name="fname"
                        style={{ width: "500px" }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      {errors.fname && touched.fname && (
                        <div
                          style={{
                            color: "red",
                            fontSize: 15,
                            marginBottom: 5,
                          }}
                        >
                          {errors.fname}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="label">Last Name </div>
                      <TextField
                        type="text"
                        placeholder="LastName"
                        name="lname"
                        style={{ width: "500px", paddingLeft: 10 }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      {errors.lname && touched.lname && (
                        <div
                          style={{
                            color: "red",
                            fontSize: 15,
                            marginBottom: 5,
                          }}
                        >
                          {errors.lname}
                        </div>
                      )}
                    </div>
                  </div>

                  <div style={{ padding: 5 }}></div>
                  <div className="side-by-side">
                    <div>
                      <div className="label">Email </div>
                      <TextField
                        type="email"
                        placeholder="Email"
                        style={{ width: "500px" }}
                        onChange={handleChange}
                        name="email"
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email && (
                        <div
                          style={{
                            color: "red",
                            fontSize: 15,
                            marginBottom: 5,
                          }}
                        >
                          {errors.email}
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="label">Role</div>
                      <Select
                        name="role"
                        value={role}
                        style={{ width: "500px", marginLeft: 10 }}
                        onChange={(event) => {
                          setRole(event.target.value);
                        }}
                      >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value={"Buyer"}>Buyer</MenuItem>
                        <MenuItem value={"Seller"}>Seller</MenuItem>
                      </Select>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: 5,
                      rowGap: 10,
                    }}
                  >
                    <div>
                      <h3>Login Information</h3>
                      <hr style={{ opacity: "0.3" }} />
                    </div>
                    <div className="side-by-side">
                      <div>
                        <div className="label">Password</div>
                        <TextField
                          type="password"
                          placeholder="Password"
                          style={{ width: "500px" }}
                          onChange={handleChange}
                          name="password"
                          onBlur={handleBlur}
                        />
                        {errors.password && touched.password && (
                          <div
                            style={{
                              color: "red",
                              fontSize: 15,
                              marginBottom: 5,
                            }}
                          >
                            {errors.password}
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="label">Confirm Password</div>
                        <TextField
                          type="password"
                          placeholder="Confirm Password"
                          onChange={handleChange}
                          style={{ width: "500px", paddingLeft: 10 }}
                          name="cpassword"
                          onBlur={handleBlur}
                        />
                        {errors.cpassword && touched.cpassword && (
                          <div
                            style={{
                              color: "red",
                              fontSize: 15,
                              marginBottom: 5,
                            }}
                          >
                            {errors.cpassword}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: 20, marginLeft:20 }}></div>
                  <Button variant="contained" type="submit" className="btn">
                    Register
                  </Button>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Registration1;
