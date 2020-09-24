import React, { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  withStyles,
  Slider,
  Typography,
  Button,
  MenuItem,
  Divider,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { StyliAuth } from "../../apis/StyliAuth";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#0000"),
    backgroundColor: "#ec1e27",
    "&:hover": {
      backgroundColor: "#8B0000",
    },
  },
}))(Button);
const styles = (theme) => ({
  paper: {
    padding: "30px",
  },
  searchkeyword: {
    borderRadius: "4px",
    border: "solid 1px #e0e0e0",
    backgroundColor: "#f3f3f3",
    padding: "7px",
  },
  keyword: {
    fontFamily: "Montserrat",
    fontSize: "12px",
    fontWeight: "550",
    lineHeight: 1,
    letterSpacing: "normal",
    color: "#8a8a8a",
  },
});

function valuetext(value) {
  return `${value}°C`;
}


function SearchPanel(props) {
  const { classes } = props;
  const [keywords, showkeywords] = useState(false);
  const [name, setmodelNames] = useState(" ");
  const [wear, setwearNames] = useState("M");
  const [height, setheightNames] = useState([0, 10]);
  const [brust, setbrustNames] = useState([0, 10]);
  const [waist, setwaistNames] = useState([0, 10]);
  const [high_hip, sethighhipsNames] = useState([0, 10]);
  const [low_hip, setlowhipsNames] = useState([0, 10]);

  function handleClose() {
    showkeywords(false)
  }

  const displayKeywords=()=> {

    return (
      <Grid container direction="row" spacing={1} style={{ padding: "15px" }}>
        <Grid item>
          <Paper className={classes.searchkeyword}>
            <Typography className={classes.keyword}>Name : {name}</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.searchkeyword}>
            <Typography className={classes.keyword}>Wear : {wear}</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.searchkeyword}>
            <Typography className={classes.keyword}>Brust : {brust[0]}-{brust[1]}</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.searchkeyword}>
            <Typography className={classes.keyword}>Height : {height[0]}-{height[1]}</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.searchkeyword}>
            <Typography className={classes.keyword}>Waist : {waist[0]}-{waist[1]}</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.searchkeyword}>
            <Typography className={classes.keyword}>High Hips : {high_hip[0]}-{high_hip[1]}</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.searchkeyword}>
            <Typography className={classes.keyword}>Low Hips : {low_hip[0]}-{low_hip[1]}</Typography>
          </Paper>
        </Grid>
        <Grid item xs></Grid>
        <Grid item>
          <IconButton
            style={{ width: "11px", height: "11px" }}
            onClick={handleClose}
            
          >
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
    );
  }




  const submitData = async () => {
    showkeywords(true)
    if (name && wear && height && brust && waist && high_hip && low_hip) {
      try {
        let data = JSON.stringify({
          "name": name,
          "wear": wear,
          "height_from": height[0],
          "height_to": height[1],
          "brust_from": brust[0],
          "brust_to": brust[1],
          "waist_from": waist[0],
          "waist_to": waist[1],
          "high_hip_from": high_hip[0],
          "high_hip_to": high_hip[1],
          "low_hip_from": low_hip[0],
          "low_hip_to": low_hip[1],
        });
        console.log(data);
        let response = await StyliAuth.get("/filtermodels");
        
        props.onSubmitChild(response.data);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("fill all the forms");
    }
  };

  const handleChange = (name) => (e, newValue) => {
    switch (name) {
      case "name":
        if (e.target.value != null) setmodelNames(e.target.value);
        break;
      case "wear":
        if (e.target.value != null) setwearNames(e.target.value);
        break;
      case "height":
        if (newValue != null) {
          setheightNames(newValue);
        }
        break;
      case "brust":
        if (newValue != null) setbrustNames(newValue);
        break;
      case "waist":
        if (newValue != null) setwaistNames(newValue);
        break;
      case "highhip":
        if (newValue != null) sethighhipsNames(newValue);
        break;
      case "lowhip":
        if (newValue != null) setlowhipsNames(newValue);
        break;
      default:
    }
  };

  const availabilitySize = [
    {
      value: "S",
      label: "S",
    },
    {
      value: "M",
      label: "M",
    },
    {
      value: "L",
      label: "L",
    },
    {
      value: "XL",
      label: "XL",
    },
  ];
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={8}>
            <Grid item md xs={12}>
              <TextField
                style={{ display: "grid" }}
                id="name"
                name="name"
                label="Enter Name Here"
                variant="outlined"
                onChange={handleChange("name")}
              />
            </Grid>
            <Grid item md xs={12}>
              <TextField
                style={{ display: "grid" }}
                id="wear"
                name="wear"
                label="Wear"
                select
                variant="outlined"
                onChange={handleChange("wear")}
              >
                {availabilitySize.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item md xs={12}>
              <Typography
                id="range-slider"
                style={{ paddingLeft: "60px" }}
                gutterBottom
              >
                Select Brust
              </Typography>
              <Slider
                style={{ color: "#ec1e27" }}
                value={brust}
                min={0}
                step={0.1}
                max={10}
                name="brust"
                id="brust"
                onChange={handleChange("brust")}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
              />
            </Grid>
            <Grid item md xs={12}>
              <Typography
                id="range-slider"
                style={{ paddingLeft: "60px" }}
                gutterBottom
              >
                Select Height
              </Typography>
              <Slider
                style={{ color: "#ec1e27" }}
                value={height}
                min={0}
                step={0.1}
                max={10}
                name="height"
                id="height"
                onChange={handleChange("height")}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
              />
            </Grid>
          </Grid>
          <Grid container spacing={8}>
            <Grid item md xs={12}>
              <Typography
                id="range-slider"
                style={{ paddingLeft: "60px" }}
                gutterBottom
              >
                Select Waist
              </Typography>
              <Slider
                style={{ color: "#ec1e27" }}
                value={waist}
                min={0}
                step={0.1}
                max={10}
                name="waist"
                id="waist"
                onChange={handleChange("waist")}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
              />
            </Grid>
            <Grid item md xs={12}>
              <Typography
                id="range-slider"
                style={{ paddingLeft: "60px" }}
                gutterBottom
              >
                Select High Hips
              </Typography>
              <Slider
                style={{ color: "#ec1e27" }}
                value={high_hip}
                min={0}
                step={0.1}
                max={10}
                name="highhips"
                id="highhips"
                onChange={handleChange("highhip")}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
              />
            </Grid>
            <Grid item md xs={12}>
              <Typography
                id="range-slider"
                style={{ paddingLeft: "60px" }}
                gutterBottom
              >
                Select Low Hips
              </Typography>
              <Slider
                style={{ color: "#ec1e27" }}
                value={low_hip}
                min={0}
                step={0.1}
                max={10}
                name="lowhips"
                id="lowhips"
                onChange={handleChange("lowhip")}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
              />
            </Grid>
            <Grid item md xs={12}>
              <ColorButton
                type="submit"
                value="SAVE AND APPLY"
                fullWidth
                variant="contained"
                color="secondary"
                style={{
                  padding: "1rem 0",
                }}
                disableElevation
                onClick={submitData}
              >
                SEARCH
              </ColorButton>
            </Grid>
            <Grid xs={12}>
              <Divider />
            </Grid>
            {console.log(keywords)}
            {keywords?displayKeywords():null}
          </Grid>
        </Paper>
      </div>
    </React.Fragment>
  );
}

export default withStyles(styles)(SearchPanel);
