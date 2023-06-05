import {Container, Stack, Typography} from '@mui/material';
import React from 'react';
import './footer.css';
import logo from './logo.svg';

const Footer = () => {
	return (
		<>
			<div className="cf" style={{width:"100%", marginLeft:'0px',paddingLeft:'0px'}}>
				<footer className='ff'>
					<Container sx={{width:"100%"}}>
						<Stack
							className="cf"
							display={'flex'}
							alignItems={'center'}
							justifyContent={'center'}
							style={{
								height: 150,
								backgroundColor: '#F4F4F4',
							}}
							spacing={1}
						>
							<img src={logo} alt="tatva logo" height={45} />
							<Typography variant="body2" className="fs">
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
