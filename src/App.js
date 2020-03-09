import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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

import PDF from "./PDF";
import Print from "./Print";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

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
    width: "40%"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "70%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(2, 0, 1)
  }
}));
const App = () => {
  const classes = useStyles();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [period, setPeriod] = useState(0);
  const [address, setAddress] = useState("")
  const [daysInput, setDaysInput] = useState(0);
  const [cardNumbers, setCardNumbers] = useState(0);
  const [cardCharges, setCardCharges] = useState(0);
  const [beforeTax, setBeforeTax] = useState(0);
  const [total, setTotal] = useState(0);

  const [totalValue, setTotalValue] = useState(0);
  const [restaurant, setRestaurant] = useState("");

  // Show Invoice
  const [showInvoice, setShowInvoice] = useState(false);
  const handleStart = date => {
    setStartDate(date);
  };
  const handleEnd = date => {
    setEndDate(date);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const oneDay = 24 // hours*minutes*seconds*milliseconds
    const firstDate = startDate;
    const secondDate = endDate;
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    setPeriod(diffDays);
    var days = daysInput / 7;
    var monthly = days * diffDays;
    var cardCharges = cardNumbers * 25;
    cardCharges /= 100;
    const values = monthly + cardCharges;
    var calPercentage = 23;
    var beforetx = monthly + cardCharges;
    var percent = (calPercentage / 100) * beforetx;
    var afterPercent = values + percent;
    var rounded = Math.round(afterPercent * 100) / 100;
    var finalValue = total - rounded;
    setTotalValue(finalValue);
  };

  // Display invoice
  const displayInvoice = e => {
    setShowInvoice(true);
    e.preventDefault();
  };
  const hidePdf = () => {
    setShowInvoice(false);
  };
  return (
    <Container component="main" maxWidth="lg" className={classes.main}>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Invoice Calculator
        </Typography>
        <form className={classes.form} noValidate>
          <div className={classes.date}>
            <div className={classes.dateTwo}>
              <p> Start Date </p>
              <DatePicker selected={startDate} onChange={handleStart} />
            </div>
            <div className={classes.dateTwo}>
              <p> End Date </p>
              <DatePicker selected={endDate} onChange={handleEnd} />
            </div>
          </div>
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={e => setDaysInput(e.target.value)}
            id="day"
            type="number"
            label="Charge per week"
            autoFocus
          />

          <TextField
            margin="normal"
            required
            fullWidth
            onChange={e => setCardNumbers(e.target.value)}
            type="number"
            label="How many cards ?"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={e => setTotal(e.target.value)}
            name="cards"
            type="number"
            label=" Total Value "
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={e => setRestaurant(e.target.value)}
            name="cards"
            type="text"
            label=" Restaurant Name "
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={e => setAddress(e.target.value)}
            name="cards"
            type="text"
            label=" Restaurant Adress"
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classes.submit}
          >
            Calculate
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={displayInvoice}
          >
            Show invoice
          </Button>
        </form>
<h2>Start date = {address} </h2>
<div>
        <button onClick={() => window.print()}>PRINT</button>
        <p>Click above button opens print preview with these words on page</p>
      </div>
        {/* <h1>number of days {period} </h1>
        <h1>number of days entered {daysInput} </h1>
        <h1>
          Card payment & Admin Fee ({cardNumbers} card orders * 25 ) |{" "}
          {cardCharges}{" "}
        </h1>
        <h3>Before tax {beforeTax} </h3>
        <h3>Total {total} </h3> */}

        {/* <h3>Food in service charge (period {values.monthly}):</h3>
  <h4>Card payment & admin fees ( {values.cards}  cards * 25c) =  {cardTotal}</h4>
  <h3>Subtotal: {subTotal}</h3>
  <h3>Sale: {values.totalSale}</h3>
  <h3>Before vat: {beforeVar}</h3> */}
      </div>
      {showInvoice ? (
        <Print restaurant={restaurant} startDate={startDate} endDate={endDate} />
      ) : null}
    </Container>
  );
};
export default App;
