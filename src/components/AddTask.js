import React ,{useState}from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
   
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function AddTask() {
  const classes = useStyles();
  const [taskDetails,setTaskDetails] = useState({
    taskName : "",
    taskDesc : ""
  });

const history = useHistory();

  const handleInput = (e) =>
  {   
      setTaskDetails({...taskDetails,[e.target.name]:e.target.value})
  }
  
  const addtask = () =>
  {
      if(taskDetails.taskName === "" || taskDetails.taskDesc === ""){
        alert("Fill all field first")
      }
      else
      {
          submitdata();
      }
  }   

const submitdata = () =>
{
    console.log("add task");
    const {taskName,taskDesc} = taskDetails;
    axios.post("http://localhost:8282/api/user/saveTask",{taskName,taskDesc})
     .then((res) => {
       console.log(res);
     })
     .catch((error) =>
     {
       console.log(error);
     })
     history.push('/dashboard')
     
   
  }

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      {/* <div>
      <img src={login} style={{height:"200px",width:"200px"}} alt="Bg Images"/>
      </div> */}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Task
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="taskName"
            label="Task Name"
            name="taskName"
            value={taskDetails.taskName}
            onChange={handleInput}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="taskDesc"
            label="Task Description"
            type="text"
            id="taskDesc"
            value={taskDetails.taskDesc}
            onChange={handleInput}
          />
      
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={addtask}
          >
            Add Task
          </Button>
        </form>
      </div>
      
    </Container>

    
  );
}