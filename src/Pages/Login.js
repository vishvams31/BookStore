import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import {Navigate} from 'react-router-dom';
import {useRef, useState} from "react";
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import {deepOrange, deepPurple} from '@mui/material/colors';
import Popover from '@mui/material/Popover';
import LogoutIcon from '@mui/icons-material/Logout';
import { Margin } from "@mui/icons-material";
export const Login = () => {
    const [name,setName] = useState("Vishvam");
    const [email,setEmail] = useState("Vsihvamshah786@gmail.com");
    const [open,setOpen] = useState(false); 
    const Navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);
    const onHomePageButtonClick = () => {
        Navigate("/");
        console.log("Button clicked");
        console.log("Name: ", name);
        console.log("Email: ", email);
    };
    const handleClick = (event) => {
        console.log(123);
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };
    const handleClose = (event) => {
        setAnchorEl(null);
        setOpen(true);
    };
    return (
        <div style={{
            padding: 5
        }}>
            {/* <h1>Apple Page</h1> */}
            <div
                style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}
            >
                <div onClick={handleClick}
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    padding:5,
                    alignItems: 'center',
                    columnGap: 5
                }}>
                    <Avatar sx={{bgcolor: "#526D82"}}>VS</Avatar>
                </div>
                
            </div>

            <div
                style={{
                padding: 10,
                rowGap: 10,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <TextField
                    type="text"
                    value={name}
                    label="Name"
                    color="secondary"
                    onChange={(e) => setName(e.target.value)}/>
                <TextField
                    type="email"
                    value={email}
                    label="Email"
                    color="secondary"
                    onChange={(e) => setEmail(e.target.value)}/>
                <Button variant="contained"className="button" onClick={onHomePageButtonClick}>Navigate to Home Page</Button>
            </div>
            <Popover
            //     anchorReference="anchorPosition"
            //     anchorPosition={{
            //     top: 200,
            //     left: 400
            // }}
                open={open}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
            }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
            }}
            anchorEl={anchorEl}
            onClose={handleClose}
            >
                <div
                style={{
                    padding:5, 
                    Margin:5,
                    alignItems: 'center'
                }}
                >
                    <h3>Vishvam Shah<LogoutIcon onClick={onHomePageButtonClick}/></h3>
                    
                </div>
            </Popover>
        </div>
    );
};
