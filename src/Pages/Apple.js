// import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
export const Apple = () => {
    // const Navigate = useNavigate()
    const onHomePageButtonClick = () =>{
        // Navigate("/");
        alert('You clicked Home button');
    };
    return (
    <div style={{ textAlign: 'center'}} >
     <h1>Apple Page</h1>
     <Button variant="contained" onClick={ onHomePageButtonClick}>Navigate to Home Page</Button>
     {/* <button onClick={ onHomePageButtonClick}>Navigate to Home Page</button> */}
    </div>
    );
}; 
