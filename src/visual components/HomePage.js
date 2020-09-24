import React from "react";
import { Grid, withStyles, Button, Modal } from "@material-ui/core";
import SearchPanel from "./search-panel";
import ModelInfoList from "./model-info-list";
import ModelForm from "./model-form";

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
    background: "#f3f3f3",
    padding: "20px",
  },
  center: {
    width: "80%",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});

function HomePage(props) {
  const { classes } = props;

  const [open, setOpen] = React.useState(false);
  const [modelData, setModelData] = React.useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const logChildValue = (value) => {
    value?setOpen(false):setOpen(true)
  };
  const logChildData = (data) => {
    data?setModelData(data):setModelData(null)
  };
  const body = (
    <div className={classes.center}>
      <ModelForm onSubmitChild={logChildValue} />
    </div>
  );
  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <SearchPanel onSubmitChild={logChildData} />

        <Grid item md xs={12} style={{ padding: "20px" }}>
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
            onClick={handleOpen}
          >
            ADD MODEL
          </ColorButton>
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
        <ModelInfoList searchData={modelData} />
      </Grid>
    </div>
  );
}

export default withStyles(styles)(HomePage);
