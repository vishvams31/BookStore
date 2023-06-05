import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import {TextField} from '@mui/material';
import axios from 'axios';
import {toast} from 'react-toastify';
// import { Avatar } from "@mui/material";
// import { Popover } from "@mui/material";
// import LogoutIcon from "@mui/icons-material/Logout";
import {Formik} from 'formik';
import * as Yup from 'yup';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './css/login.css';
// import { useUserContext } from "../Components/Header/UserContext";
import { useContext } from 'react';
// import { loginContext } from '../Components/Header/AuthContext';
import LoginContext from '../Components/Header/LoginContext';
import Footer from '../Components/Footer/Footer';

// import authService from '../service/authService';
const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	// const [user, setUser] = useState([]);
	// const { setUserName } = useUserContext();

	// useEffect(() => {
	// 	axios.get("https://book-e-sell-node-api.vercel.app/api/user/login").then((res) => {
	// 	  console.log("User detail: ", res.data);
	// 	  setUser(res.data);
	// 	});
	//   }, []);
	const isLogin =  useContext(LoginContext);
	const Navigate = useNavigate('');
	const initialValues = {
		email: '',
		password: '',
	};
	

	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email('Please Enter Valid Email')
			.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'invalid email')
			.required('Please Enter Your Email ID'),
		password: Yup.string()
			.min(8, 'Password Must be 8 Characters Long')
			.max(16, 'Password is too long')
			.matches(/[a-zA-Z]/, 'Password Contains atleast one character')
			.required('Please Enter Your Password'),
	});

	const onFormSubmit = async (values) => {
		const  initialValues = {
            email: values.email,
            password : values.password
        }
		const res=await axios.post('https://book-e-sell-node-api.vercel.app/api/user/login',initialValues);
		if(res.status===200){
		  console.log(res.data.id);
		  toast.success('User login Successfully', 
				{
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                });
		}
		Navigate('/');
		isLogin.setLogin(true);
		};
	


 

	const NavigateHome = () => {
		Navigate('/');
		console.log('Email:', email);
		console.log('Password', password);
	};
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
		setOpen(true);
	};

	const handleClose = () => {
		setAnchorEl(null);
		setOpen(false);
	};

	const breadcrumbs = [
		<Link
			color="inherit"
			href="/"
			style={{
				textDecoration: 'none',
				fontSize: 18,
			}}
		>
			Home
		</Link>,
		<Typography
			className="center1 "
			key="3"
			color="text.primary"
			style={{
				textDecoration: 'none',
				fontSize: 18,
				color: '#f14d54',
			}}
		>
			Login
		</Typography>,
	];
	return (
		<>
			<div style={{padding: 5}}></div>
			<div>
				<div className="center1 ">
					<Breadcrumbs
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							paddingTop: '20px',
						}}
						separator={<NavigateNextIcon fontSize="small" />}
						aria-label="breadcrumb"
					>
						{breadcrumbs}
					</Breadcrumbs>
				</div>
				<div>
					<div className="center1">
						<h1 className="loginheader">Login or Create an Account</h1>
						<hr color="red" width='15%' />
					</div>
				</div>
			</div>
			<div>
				<div className="side-by-side">
					<div className="loginpart">
						<div style={{fontSize: '20px', color: '#414141', paddingTop: 0}}>
							New Customer
						</div>
						<hr className="hr2" style={{opacity: '0.3'}} />
						<div style={{marginBottom: 10, width: '500px', marginLeft: 20}}>
							<p className="para">Registration free and easy.</p>
						</div>
						<div style={{marginBottom: 10}}></div>
						<ul style={{fontSize: '15px', color: '#212121'}}>
							<li>Faster Checkout</li>
							<li>Save Multiple Shipping Addresses</li>
							<li>View and Track Orders and move</li>
						</ul>
						<div style={{marginBottom: '130px'}}></div>
						<Button
							variant="contained"
							type="submit"
							className="btn1"
							sx={{bgcolor:'#f14d54'}}
							onClick={() => Navigate('/Registration')}
						>
							Create an Account
						</Button>
					</div>
					<div className="loginpart">
						<div style={{fontSize: '20px', color: '#414141'}}>
							Registered Customers
						</div>
						<hr className="hr2" style={{opacity: '0.3'}} />
						<div style={{marginBottom: 10}}>
							<p className="para">
								If you have an account with us,Please log in.
							</p>
						</div>
						<div style={{marginBottom: 10}}></div>
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
										<div
											style={{
												display: 'inherit',
												flexDirection: 'column',
												marginBottom: 5,
												rowGap: 10,
											}}
										>
											<div>
												<div className="label1">Email Address</div>
												<TextField
													type="email"
													placeholder="Email"
													style={{width: '500px'}}
													onChange={handleChange}
													name="email"
													onBlur={handleBlur}
												/>
												{errors.email && touched.email && (
													<div
														style={{
															color: 'red',
															fontSize: 15,
															marginBottom: 5,
														}}
													>
														{errors.email}
													</div>
												)}
											</div>
											<div>
												<div className="label1">Password</div>
												<TextField
													type="password"
													placeholder="Password"
													style={{width: '500px'}}
													onChange={handleChange}
													name="password"
													onBlur={handleBlur}
												/>
												{errors.password && touched.password && (
													<div
														style={{
															color: 'red',
															fontSize: 15,
															marginBottom: 5,
														}}
													>
														{errors.password}
													</div>
												)}
											</div>
										</div>
										<div style={{margin: '20px'}}></div>
										<Button
											variant="contained"
											type="submit"
											disabled={isSubmitting}
											sx={{width: 100,bgcolor:'#f14d54'}}
										>
											Login
										</Button>
									</form>
								);
							}}
						</Formik>
					</div>
				</div>
			</div>
			
		</>
	);
};
export default Login;
