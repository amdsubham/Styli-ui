import React, { useState } from "react";
import { Grid, Paper, withStyles, Typography } from "@material-ui/core";
import ModelInfoCard from "../model-info-card";
import { StyliAuth } from "../../apis/StyliAuth";
const styles = (theme) => ({
  paper: {
    padding: "10px",
  },
});

function ModelInfoList(props) {
  const { classes } = props;
  const [modeldata, setmodeldata] = useState([]);
  const searchData = props.searchData;

  async function fetchData() {
    try {
      let response = await StyliAuth.get("/models");
      setmodeldata(response.data);
    } catch (err) {
      setmodeldata({});
    }
  }
  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Grid container direction="row" spacing={5} className={classes.paper}>
          {searchData.length !== 0
            ? searchData.map((data) => (
                <Grid item key={data._id}>
                  <Typography
                    component="h5"
                    variant="h6"
                    style={{ fontFamily: "inherit" }}
                  >
                    {data.name}
                  </Typography>
                  <ModelInfoCard key={parseInt(data._id)} data={data} />
                </Grid>
              ))
            : modeldata.map((data) => (
                <Grid item key={data._id}>
                  <Typography
                    component="h5"
                    variant="h6"
                    style={{ fontFamily: "inherit" }}
                  >
                    {data.name}
                  </Typography>
                  <ModelInfoCard key={parseInt(data._id)} data={data} />
                </Grid>
              ))}
        </Grid>
      </Paper>
    </React.Fragment>
  );
}

export default withStyles(styles)(ModelInfoList);
