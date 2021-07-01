import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import {Link} from 'react-router-dom'
import './style.css'




export default function Navbar() {
  // const classes = useStyle();
    return (
        <div>
        <AppBar  position="static" color="primary" >
  <Toolbar>
    
    <Typography variant="h6" style={{flexGrow:1}} >
      Task Manager
    </Typography>
    <Button  color="inherit" component={Link} to="/login" >Login</Button>
    <Button  color="inherit" component={Link} to="/register">Register</Button>
    <Button  color="inherit" component={Link} to="/dashboard">Dashboard</Button>
    

  </Toolbar>
</AppBar>
            
        </div>
    )
}
