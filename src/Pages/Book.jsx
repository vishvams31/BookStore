import React from "react";
import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { TextField, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import "../AllProducts.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Book = () => {
	const Navigate = useNavigate();
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		axios
			.get("https://book-e-sell-node-api.vercel.app/api/book/all")
			.then((res) => {
				var a = res.data.result;
				setBooks(a);
				setLoading(false);
			});
	}, []);
	const searchbook = (prop) => {
		prop.value = prop.value.replace("  ", "");
		console.log(prop.value);
		if (prop.value == "" || prop.value == " ") {
			axios
				.get("https://book-e-sell-node-api.vercel.app/api/book/all")
				.then((res) => {
					var a = res.data.result;
					setBooks(a);
				});
		} else {
			axios
				.get(
					"https://book-e-sell-node-api.vercel.app/api/book/search?keyword=${prop.value}"
				)
				.then((res) => {
					setBooks(res.data.result);
				});
		}
	};
	return (
		<>
			<div id="heading">
				<div
					style={{
						fontSize: 32,
						fontWeight: "bolder",
						color: "#2E2E2E",
					}}
				>
					Book Listing
				</div>
				{/* </h1> */}
				<br />
				<div
					style={{
						width: 140,
						height: 0,
						border: 1,
						borderStyle: "solid",
						borderColor: "rgb(255,89,92)",
						marginBottom: 30,
					}}
				></div>
				<div className="search-div">
					<TextField
						name="search"
						label="Search..."
						size="small"
						style={{
							fontStyle: "italic",
							// color:''
							width: "350px",
						}}
						onChange={(val) => {
							searchbook(val.target);
						}}
					/>
					<div>
						<span className="sort-style">Sort-By</span>
						<Select
							style={{
								width: "200px",
							}}
							labelId="CategoryList"
							fullWidth
							size="small"
						>
							<MenuItem className="menu" value="2">
								A-Z
							</MenuItem>
							<MenuItem className="menu" value="3">
								Z-A
							</MenuItem>
						</Select>
					</div>
				</div>
			</div>

			{loading ? (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: "95vw",
						height: "60vh",
					}}
				>
					<Box sx={{ display: "flex" }}>
						<CircularProgress />
					</Box>
				</div>
			) : (
				<span></span>
			)}
			<div
				style={{
					padding: "15px",
					marginLeft: "25px",
					display: "grid",
				}}
			>
				{/* <h1
                style={{
                    color:'black',
                }}
                >{books[0].name}</h1> */}
				{/* <div className="product"> */}
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{books.map((i) => {
						return (
							<Grid item xs={2} sm={4} md={3} key={i.id}>
								<div className="Card">
									<img src= {i.base64image} alt="card" className="card_img" />
								
									<div className="card-info">
										<h3 className="card-title">{i.name}</h3>
										<span className="card-category">{i.category}</span>
										<p className="card-description">{i.description}</p>
										<h5 className="card-price">Rs.{i.price}</h5>
										<a href={i.link} target="">
											<button className="card-button">Add To Cart</button>
										</a>
									</div>
								</div>
							</Grid>
						);
					})}
				</Grid>
			</div>
		</>
	);
};

export default Book;
