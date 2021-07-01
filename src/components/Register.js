import React , {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import registrationValid from './validation'
// import Confirm from './confirm'
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom';
// import DataService from '../services/RegisterService'




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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorMsg: {
    marginBottom : theme.spacing(1),
    color : 'red',
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [smShow , setSmShow] = React.useState(false);
  // const handleOpen = () => setSmShow(true);
  const handleClose = () => setSmShow(false);

  // const primaryclr = teal[500];
  const history = useHistory();

 const [details,setDetails] = useState({
   firstName : "",
   lastName : "",
   email : "",
   password : "",
   cpassword : ""
 });

 const [errors , setErrors] = useState({});

 let objectLength = Object.keys(errors).length;
 console.log(objectLength);

 const inputEventHandler = (e) => {
   setDetails({...details,[e.target.name]:e.target.value});
   setErrors(registrationValid(details))
 }


 const submitData = (e) =>{
   e.preventDefault();
  //  console.log("hii");
  // confirmBox();
  // console.log("hello");
  // console.log(details);
   const {firstName,lastName,email,password,cpassword} = details;
  //  DataService.create("/save",{firstName,lastName,email,password,cpassword})
  axios.post("http://localhost:8282/api/user/save",{firstName,lastName,email,password,cpassword})
   .then((res) => {
     console.log(res);
   })
   .catch((error) =>
   {
     console.log(error);
   })
   history.push('/login')
   
 }

 const confirmBox = (e) =>
 {
  //  console.log("fhgjkhb" + objectLength);
  e.preventDefault();
   if(objectLength === 0){
    // handleOpen();
    setSmShow(true);
    // console.log("abc");
   }

   if(details.firstName === "" || details.lastName === "" || details.email === "" || details.password === "" ||details.cpassword ==="")
   {
     alert("Fill all required field first");
     handleClose();
   }
 }



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="firstName"
                name="firstName"
                // variant="outlined"
                required
                fullWidth
                value={details.firstName}
                onChange = {inputEventHandler}
                label="First Name"
                autoFocus
              />
              <p className={classes.errorMsg}>
                    {errors.firstName && (
                      <small className="error_msg">{errors.firstName}</small>
                    )}
                  </p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                // variant="outlined"
                required
                fullWidth
                value={details.lastName}
                onChange={inputEventHandler}
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
              <p className={classes.errorMsg}>
                    {errors.lastName && (
                      <small className="error_msg">{errors.lastName}</small>
                    )}
                  </p>
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                // variant="outlined"
                required
                fullWidth
                value={details.email}
                onChange={inputEventHandler}
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <p className={classes.errorMsg}>
                    {errors.email && (
                      <small className="error_msg">{errors.email}</small>
                    )}
                  </p>
            </Grid>
            <Grid item xs={12}>
              <TextField
                // variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={details.password}
                onChange={inputEventHandler}
                autoComplete="current-password"
              />
              <p className={classes.errorMsg}>
                    {errors.password && (
                      <small className="error_msg">{errors.password}</small>
                    )}
                  </p>
            </Grid>
            <Grid item xs={12}>
              <TextField
                // variant="outlined"
                required
                fullWidth
                name="cpassword"
                label="Confirm Password"
                type="password"
                value={details.cpassword}
                onChange={inputEventHandler}
                autoComplete="current-password"
              />
              <p className={classes.errorMsg}>
                    {errors.cpassword && (
                      <small className="error_msg">{errors.cpassword}</small>
                    )}
                  </p>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={confirmBox}
          >
          {/* <Confirm data={details}/> */}
            Sign Up
          </Button>
          {/* <Confirm show={smShow} onHide={handleClose}/> */}
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="\login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Dialog
        open={smShow}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure to Continue"}</DialogTitle>
  
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={submitData} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}