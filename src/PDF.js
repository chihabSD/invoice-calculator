import React, { useState } from "react";
import "./Modal.scss";
import Pdf from "react-to-pdf";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logo from "./logo.png";
const useStyles = makeStyles(theme => ({
  main: {
    display: "flex",
    flexDirection: "row"
  },
  date: {
    flexDirection: "row",
    display: "flex",
    padding: 5
  },
  dateTwo: {
    display: "flex",
    flexDirection: "column",
    paddingRight: 100
  },
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 10,
    width: "70%"
  },

  form: {
    width: "70%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  submit: {
    margin: theme.spacing(2, 0, 1)
  }
}));

const PDF = ({ restaurant }) => {
  const classes = useStyles();
  const ref = React.createRef();

  return (
    <div className={classes.paper}>
      {/* <Typography component="h1" variant="h5">
        your invoice
      </Typography> */}

      <form className={classes.form} noValidate ref={ref}>
        <div className="img">
          <img src={logo} className="image" />
        </div>
        <div className="summary">
        <h3>Restaurant : {restaurant}</h3>

          <div className="summaryTitle">
            <h1>Invoice Summary </h1>
            <h3>Period: 01 Feb 2020 - 29 Feb 200 </h3>
          </div>
          <hr></hr>
          <div className="tableContainer">
            <table class="customTable">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Row 1, Cell 1</td>
                  <td><p>* This amount will be paid by</p></td>
                  <td>Row 1, Cell 3</td>
                </tr>
                <tr>
                  <td>Row 2, Cell 1</td>
                  <td>Row 2, Cell 2</td>
                  <td>Row 2, Cell 3</td>
                </tr>
                <tr>
                  <td>Row 3, Cell 1</td>
                  <td>Row 3, Cell 2</td>
                  <td>Row 3, Cell 3</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="summaryTitle">
            <h1>Your Invoice</h1>
          </div>
          <h3>Invoice Date: 01/Mar/2020</h3>
          <hr className="style1"></hr>
        </div>
      </form>
      <div>
        <button onClick={() => window.print()}>PRINT</button>
        <p>Click above button opens print preview with these words on page</p>
      </div>
      <Pdf targetRef={ref} filename="invoice">
        {({ toPdf }) => (
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="danger"
            onClick={toPdf}
          >
            Download the invoice
          </Button>
        )}
      </Pdf>
    </div>
    // <div className="outerContainer">
    //   <div className="container">
    //     <div className="btn">
    //       <Pdf targetRef={ref} filename="invoice">
    //         {({ toPdf }) => (
    //           <button className="pdf" onClick={toPdf}>
    //             Generate Pdf
    //           </button>
    //         )}
    //       </Pdf>
    //     </div>
    //     <div ref={ref} className="pdfContainer">
    //       <div className="imageDiv">
    //
    //       </div>
    //       <div className="restaurantTitle">

    //       <h3> restaurant: {restaurant}</h3>
    //       <div className="summary">
    //           <h1>Invoice Summary</h1>
    //           <h3>Period: 01 Feb 2020 - 29 Feb 2020</h3>
    //       </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default PDF;
