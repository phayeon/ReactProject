import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom"

const Navigation2 = () => {
    const [value, setValue] = React.useState(0);
    return (
        <Box sx={{ width: 500 }}>
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
        >
            <BottomNavigationAction label="Home" icon={<FavoriteIcon/>} component={Link} to="/home"/>
            <BottomNavigationAction label="Counter" icon={<FavoriteIcon/>} component={Link} to="/Counter"/>
            <BottomNavigationAction label="todos" icon={<FavoriteIcon/>} component={Link} to="/todos"/>
            <BottomNavigationAction label="signup" icon={<FavoriteIcon/>} component={Link} Link to="/signup"/>
            <BottomNavigationAction label="login" icon={<FavoriteIcon/>} component={Link} Link to="/login"/>
            <BottomNavigationAction label="뇌졸중" icon={<FavoriteIcon/>} component={Link} Link to="/stroke"/>
        </BottomNavigation>
        </Box>
    );
}
export default Navigation2