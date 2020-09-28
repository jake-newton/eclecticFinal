import React, {useState, useRef} from 'react';
import axios from 'axios';
import {Paper, TextareaAutosize} from '@material-ui/core'
import {TextField} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import '../App.css';
import '../Confetti.css'



const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#08ff03',
    },
    secondary: {
      main: '#af47df',
      dark: '#8227ac'
    },
    tertiary: {
      main: '#f4f7f4'
    }
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    '& label.Mui-focused': {
        color: myTheme.palette.primary.main,
      },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: myTheme.palette.secondary.main,
        },
      },
  },
  emailField: {
    // margin: theme.spacing(0,20),
    width: '80%',
    margin: 'auto',
    '& label.Mui-focused': {
      color: myTheme.palette.secondary.main,
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: myTheme.palette.primary.main,
      },
    },

  },
  field: {
    '& label.Mui-focused': {
      color: myTheme.palette.secondary.main,
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: myTheme.palette.primary.main,
      },
    },

  
  },
  button: {
    // margin: theme.spacing(5,80),
    width: '80px',
    margin: 'auto',
    marginTop: '2%',
    backgroundColor: myTheme.palette.secondary.main,
    '&:hover': {
      backgroundColor: myTheme.palette.secondary.dark,
   },
  },
}));

const Contact = () => { 

  const [info, setInfo] = useState({ 'name': '', 'email': '', 'message': ''})
  const nameelemRef = useRef(null);
  const emailelemRef = useRef(null);
  const messageelemRef = useRef(null);
  const emailvalidelemRef = useRef(null);
  const successelemRef = useRef(null);
  const titleelemRef = useRef(null);

  console.log("nameref", nameelemRef)

  const classes = useStyles();

  const changeHandler = event => {
    setInfo({...info, [event.target.name]: event.target.value})
  }
  
  const handleSubmit = event => {

    function validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

    if (info.name == "") {
      nameelemRef.current.style.display = "block";
      console.log("nameref display", nameelemRef.current.style.display)
    } if (info.email == "") {
      emailelemRef.current.style.display = "block";
    }  if (info.message == "") {
      messageelemRef.current.style.display = "block";
    } if (info.name !== "") {
      nameelemRef.current.style.display = "none";
      console.log("nameref display", nameelemRef.current.style.display)
    } if (info.email !== "") {
      emailelemRef.current.style.display = "none";
      if (!validateEmail(info.email)) {
        emailvalidelemRef.current.style.display = "block"
      }
    } if (validateEmail(info.email)) {
      emailvalidelemRef.current.style.display = "none"
    } if (info.message !== "") {
      messageelemRef.current.style.display = "none";
    } if (info.message !== '' & info.name !== '' & info.email !== '' & validateEmail(info.email)) {
      successelemRef.current.style.display = "block";
      titleelemRef.current.style.display = "none";
      console.log("successelemRef display", successelemRef.current.style.display)
      event.preventDefault();
      console.log(info);
      axios
        .post("https://eclectic-be.herokuapp.com/send", info)
        .then(result => {
        console.log(result)
    })
    .catch(error => {
      console.log(error)
      alert("Name and/or Password not recognized, please try again", error)
    })
    
    }
  }

      return (
        <div className="Contact">
        <div ref={successelemRef} className="successful-submission">
          <div className="submission-text-div">
            <h1>Submission Received</h1>
            <h2>You're one step closer!</h2>
          </div>  
          {/* <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div> */}
        </div>
         <h1 ref={titleelemRef} className="contact-title">Send us a message</h1>
            <Paper className="contactForm" elevation={24}>
              <div className="topForm">
                <div>
                  <p ref={nameelemRef} className="validation-message-name">*Name is required*</p>
                  <TextField 
                    className={classes.field} 
                    name="name"
                    id="outlined-basic" 
                    label="Name*" 
                    variant="outlined" 
                    onChange={changeHandler}
                  />
                </div>
                <div>
                  <p ref={emailelemRef} className="validation-message-email">*Email is required*</p>
                  <p ref={emailvalidelemRef} className="validation-message-email-invalid">*Valid Email is required*</p>
                  <TextField 
                    className={classes.field} 
                    name="email"
                    id="outlined-basic" 
                    label="Email*" 
                    variant="outlined" 
                    onChange={changeHandler}
                  />
                </div>
              </div>
              <div className="bottomForm">
              <p ref={messageelemRef} className="validation-message-message">*Message is required*</p>
                <TextField
                  className={classes.emailField}
                  name="message"
                  id="outlined-multiline-static"
                  label="Message*"
                  multiline
                  rows={15}
                  variant="outlined"
                  onChange={changeHandler}
                /> 
                <Button
                  variant="contained"
                  className={classes.button}
                  // sendIcon={<Icon></Icon>}
                  onClick={handleSubmit}
                  color="primary"
                >
                  Send
                </Button>
              </div>           
            </Paper>
            <h1 className="contact-title-bottom">Direct Phone: (520) 256-9356</h1>
            <h1 className="contact-title-bottom">Direct Email: eclecticlogic.business@gmail.com</h1>
        </div>
      )
    }
  
export default Contact;