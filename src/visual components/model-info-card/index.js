import * as React from "react";

import {
  Card,
  Grid,
  withStyles,
  CardMedia,
  Typography,
} from "@material-ui/core";
const styles = (theme) => ({
  root: {
    display: "flex",
    maxWidth: "650px",
  },
  cover: {
    width: 280,
    height: 158,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
});

function ModelInfoCard(props) {
  const { classes } = props;
  const { data } = props;
  // let img= data.photo.data.data
  // var base64EncodedStr = btoa(unescape(encodeURIComponent(img)));

  //var pic = btoa(img);
  //console.log(base64EncodedStr);
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        
        image={data.photo}
        title="Live from space album cover"
      />
      <Grid container style={{ padding: "10px" }}>
        <Grid container item spacing={1} style={{ padding: "10px" }}>
          <Grid item xs>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              style={{ fontSize: "smaller" }}
            >
              MODEL WEAR:
            </Typography>
            <Typography variant="subtitle1">{data.wear}</Typography>
          </Grid>
          <Grid item xs>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              style={{ fontSize: "smaller" }}
            >
              HEIGHT:
            </Typography>
            <Typography variant="subtitle1">{data.height}</Typography>
          </Grid>
          <Grid item xs>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              style={{ fontSize: "smaller" }}
            >
              BUST:
            </Typography>
            <Typography variant="subtitle1">{data.brust}</Typography>
          </Grid>
        </Grid>

        <Grid container item spacing={1} style={{ padding: "10px" }}>
          <Grid item xs>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              style={{ fontSize: "smaller" }}
            >
              WAIST:
            </Typography>
            <Typography variant="subtitle1">{data.waist}</Typography>
          </Grid>
          <Grid item xs>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              style={{ fontSize: "smaller" }}
            >
              HIGH HIP:
            </Typography>
            <Typography variant="subtitle1">{data.high_hip}</Typography>
          </Grid>
          <Grid item xs>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              style={{ fontSize: "smaller" }}
            >
              LOW HIP:
            </Typography>
            <Typography variant="subtitle1">{data.low_hip}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

export default withStyles(styles)(ModelInfoCard);
