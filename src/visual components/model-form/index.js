import React, { useState } from "react";

import Dropzone from "react-dropzone";
import "./styles.css";
import {
  Grid,
  withStyles,
  Typography,
  TextField,
  MenuItem,
  Divider,
  Button,
} from "@material-ui/core";
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
  root: {
    background: "#fde8e9",
    padding: theme.spacing(3),
  },
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    background: "#ffff",
  },
});

function ModelForm(props) {
  const { classes } = props;
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

  const [photo, setFileNames] = useState([]);
  const [name, setmodelNames] = useState("");
  const [wear, setwearNames] = useState("SUBHAM");
  const [height, setheightNames] = useState("");
  const [brust, setbrustNames] = useState("");
  const [waist, setwaistNames] = useState("");
  const [high_hip, sethighhipsNames] = useState("");
  const [low_hip, setlowhipsNames] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const handleDrop = (acceptedFiles) =>
    setFileNames(
      acceptedFiles.map((file) => {
        console.log(file);
        return file.name;
      })
    );

  const handelChange = (e) => {
    switch (e.target.name) {
      case "name":
        if (e.target.value != null) setmodelNames(e.target.value);
        break;
      case "wear":
        if (e.target.value != null) setwearNames(e.target.value);

        break;
      case "height":
        if (e.target.value != null) setheightNames(parseFloat(e.target.value));
        break;
      case "brust":
        if (e.target.value != null) setbrustNames(parseFloat(e.target.value));
        break;
      case "waist":
        if (e.target.value != null) setwaistNames(parseFloat(e.target.value));
        break;
      case "highhip":
        if (e.target.value != null)
          sethighhipsNames(parseFloat(e.target.value));
        break;
      case "lowhip":
        if (e.target.value != null) setlowhipsNames(parseFloat(e.target.value));
        break;
      default:
      // code block
    }
  };

  const submitData = async () => {
    if (
      name &&
      wear &&
      height &&
      brust &&
      waist &&
      high_hip &&
      low_hip &&
      photo
    ) {
      try {
        let data = JSON.stringify({
          name,
          wear,
          height,
          brust,
          waist,
          high_hip,
          low_hip,
          photo,
        });
        console.log(data);
        let response = await StyliAuth.post("/addmodel", data);

        setSubmitMessage("Model is Succesfully Added");
      } catch (err) {
        props.onSubmitChild(true);
        console.log(err);
      }
    } else {
      setSubmitMessage("Please fill all the forms");
    }
  };
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid className={classes.container}>
          <Grid container spacing={5} style={{ padding: "20px" }}>
            <Grid container item spacing={1}>
              <Grid item xs style={{ display: "grid", alignItems: "center" }}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.typography}
                >
                  Model Photo
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Dropzone
                  onDrop={handleDrop}
                  accept="image/*"
                  minSize={1024}
                  maxSize={3072000}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: "dropzone" })}>
                      <input {...getInputProps()} />
                      <p>Drag'n'drop images, or click to select files</p>
                    </div>
                  )}
                </Dropzone>
                <div>
                  <strong>Selected Files:</strong>
                  <ul>
                    {photo.map((fileName) => (
                      <li key={fileName}>{fileName}</li>
                    ))}
                  </ul>
                </div>
              </Grid>
            </Grid>
            <Grid container item spacing={1}>
              <Grid item xs style={{ display: "grid", alignItems: "center" }}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.typography}
                >
                  Name
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  style={{ display: "grid" }}
                  size="small"
                  id="name"
                  name="name"
                  label="Enter name here"
                  variant="outlined"
                  onChange={handelChange}
                />
              </Grid>
            </Grid>

            <Grid container item spacing={1}>
              <Grid
                item
                md={2}
                style={{ display: "grid", alignItems: "center" }}
              >
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.typography}
                >
                  Wear
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  style={{ display: "grid" }}
                  size="small"
                  id="wear"
                  name="wear"
                  select
                  label="Select Wear"
                  variant="outlined"
                  onChange={handelChange}
                >
                  {availabilitySize.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>

            <Grid container item spacing={1}>
              <Grid item xs style={{ display: "grid", alignItems: "center" }}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.typography}
                >
                  Height
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  style={{ display: "grid" }}
                  type="number"
                  size="small"
                  id="height"
                  name="height"
                  label="Select Height Here"
                  variant="outlined"
                  onChange={handelChange}
                />
              </Grid>
            </Grid>

            <Grid container item spacing={1}>
              <Grid item xs style={{ display: "grid", alignItems: "center" }}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.typography}
                >
                  Brust
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  style={{ display: "grid" }}
                  type="number"
                  size="small"
                  id="brust"
                  name="brust"
                  label="Select Brust Here"
                  variant="outlined"
                  onChange={handelChange}
                />
              </Grid>
            </Grid>
            <Grid container item spacing={1}>
              <Grid item xs style={{ display: "grid", alignItems: "center" }}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.typography}
                >
                  Waist
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  style={{ display: "grid" }}
                  type="number"
                  size="small"
                  id="waist"
                  name="waist"
                  label="Select Waist Here"
                  variant="outlined"
                  onChange={handelChange}
                />
              </Grid>
            </Grid>
            <Grid container item spacing={1}>
              <Grid item xs style={{ display: "grid", alignItems: "center" }}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.typography}
                >
                  High Hips
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  style={{ display: "grid" }}
                  type="number"
                  size="small"
                  id="highhip"
                  name="highhip"
                  label="Select High Hips here"
                  variant="outlined"
                  onChange={handelChange}
                />
              </Grid>
            </Grid>
            <Grid container item spacing={1}>
              <Grid item xs style={{ display: "grid", alignItems: "center" }}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.typography}
                >
                  Low Hip
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  style={{ display: "grid" }}
                  type="number"
                  size="small"
                  id="lowhip"
                  name="lowhip"
                  label="Select Low Hip Here"
                  variant="outlined"
                  onChange={handelChange}
                />
              </Grid>
            </Grid>

            <Grid xs={12}>
              <Divider />
            </Grid>
          </Grid>
          <Grid container item spacing={2}>
            <Grid item md={8}>
              <Typography
                variant="h5"
                color="secondary"
                style={{ paddingLeft: "80px" }}
              >
                {submitMessage}
              </Typography>
            </Grid>
            <Grid item md xs style={{ display: "grid", padding: "20px" }}>
              <Button
                variant="outlined"
                color="secondary"
                style={{
                  color: "#ec1e27",
                  borderColor: "#ec1e27",
                  fontWeight: "600",
                }}
                onClick={() => {
                  props.onSubmitChild(true);
                }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item md xs style={{ display: "grid", padding: "20px" }}>
              <ColorButton
                type="submit"
                value="SAVE"
                fullWidth
                variant="contained"
                color="secondary"
                style={{
                  padding: "1rem 0",
                }}
                disableElevation
                onClick={submitData}
              >
                SAVE
              </ColorButton>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default withStyles(styles)(ModelForm);
