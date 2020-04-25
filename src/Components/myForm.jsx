import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SentIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    action: "POST",
    netlify: "true",
  },
  button: {
    marginTop: "1rem",
    color: "white",
    borderColor: "white",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& label": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        fontSize: 16,
      },
      "&hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

const MyForm = () => {
  const classes = useStyles();
  return (
    <Box component="div" style={{ background: "#253A4B", height: "100vh" }}>
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography
            variant="h5"
            style={{
              color: "white",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            hire or contact me...
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: "white" } }}
          />
          <br />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: "white" } }}
          />
          <br />
          <InputField
            fullWidth={true}
            label="Company Name"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: "white" } }}
          />

          <br />
          <Button
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<SentIcon />}
          >
            contact me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default MyForm;
