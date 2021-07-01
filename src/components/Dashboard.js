import React,{useState,useEffect} from 'react'
import { Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Table from 'react-bootstrap/Table'

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
search: {
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: fade(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: fade(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  marginTop:'5%',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
},
searchIcon: {
  padding: theme.spacing(0, 4),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
inputRoot: {
  color: 'inherit',
},
inputInput: {
  padding: theme.spacing(2, 1, 1, 0),
  // vertical padding + font size from searchIcon
  paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '12ch',
    '&:focus': {
      width: '20ch',
    },
  },
},
}));
// const top100Films = [
//   { title: 'The Shawshank Redemption', year: 1994 },
//   { title: 'The Godfather', year: 1972 },
//   { title: 'The Godfather: Part II', year: 1974 },
//   { title: 'The Dark Knight', year: 2008 }]

export default function Dashboard(props) {
  const [data, setData] = useState([]);

  const getTaskData = async () => {
     const res = await fetch('http://localhost:8282/api/user/getAllTask');
     const actualData = await res.json();
     console.log(actualData);
     setData(actualData);
  
  }
  useEffect(() => {
    getTaskData();
},[]);
  const classes = useStyles();

  return (
    <div >
      <Paper  style={{ maxWidth: "50%", marginLeft: "25%", marginTop: "3%" }}>

        <Grid container direction="row" justify="center" alignItems="flex-end">
          <Grid item xs>
            <AssignmentIcon fontSize="large" />
            <Typography className={classes.title} variant="h6" noWrap>
            Task Manager
          </Typography>
          </Grid>
          <Grid item xs={6}>
           </Grid>
          <Grid item gutterBottom xs>
          <Typography >
          Welcome<Avatar src="/broken-image.jpg" />
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          {/* <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          /> */}
       {/* / )} */}
      {/* /> */}

      
      <div className="container-fluid mt-5">
        <div>
        <h5 className="mb-2 text-center">Task List</h5> 
        </div>
     <div>
         <Table striped bordered hover responsive>
         <thead>
             <tr>
             <th>Task Name</th>
             <th>Task Description</th>
             <th>Action</th>
             </tr>
         </thead>
         <tbody>
         {
             data.map((currElement,ind) => {
                return(
                <tr key={ind}>
             <td>{currElement.taskName}</td>
             <td>{currElement.taskDesc}</td>
             <td>
               <Button>Update</Button>
               <Button>Delete</Button>
             </td>
             </tr>
             
        )})
         }
  
    </tbody>

         </Table>
     </div>
     <Fab color="primary" aria-label="add" href="\addTask">
        <AddIcon />
      </Fab>
      </div> 


      </Paper>
    </div>
  )
}

