import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import meraCV from "./cv.png";
import SaveIcon from "@material-ui/icons/Save";
import { Divider, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "3rem auto",
    borderRadius: "8px",
    backgroundColor: "lightgrey",
    textTransform: "uppercase",
  },
  media: {
    [theme.breakpoints.up("xl")]: {
      height: "82rem",
      width: "100%",
    },
    [theme.breakpoints.between("md", "lg")]: {
      height: "129rem",
      width: "100%",
    },

    [theme.breakpoints.between("sm", "md")]: {
      display: "flex",
      height: "100em",
      width: "70em",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      height: "33rem",
      width: "100%",
    },
  },

  downlo: {
    color: "white",
    backgroundColor: "#505051",
    position: "center",
    margin: "auto",
    height: "100%",
  },
}));

export default function MediaCard() {
  const classes = useStyles();

  return (
    <>
      <Divider />
      <Grid container spacing={5} justify="space-evenly">
        <Grid item xs={12} sm={12} xl={6} md={11} position="center">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={meraCV} />
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                className={classes.downlo}
                variant="contained"
                startIcon={<SaveIcon />}
                href="https://github.com/preetamnegi7/Portfolio/raw/master/src/cv.pdf"
              >
                Download Resume
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
