import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// import PDF from "./PDF";
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

  // Days between first and second date
  const [period, setPeriod] = useState(0);

  // Dates
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // Address
  const [address, setAddress] = useState("")
  const [daysInput, setDaysInput] = useState(0);

  // Number of cards
  const [cardNumbers, setCardNumbers] = useState(0);

  // Charge on cards
  const [chargeOnCards, setChargeOnCards] = useState(0);

  // monthly Charges
  const [charePerWeek,    setCharePerWeek] = useState(0);
  const [beforeTax,    setBeforeTax] = useState(0);
  const [afterTax,    setAfterTax] = useState(0);

  // monthly Charges
  const [monthlyCharges, setMonthlyCharges] = useState(0);

  // cal cents and euros
  const [money, setMoney] = useState("");
  // const [beforeTax, setBeforeTax] = useState(0);

  // Total inputs
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

    // Calcualte Dates
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    // const oneDay = 24 // hours*minutes*seconds*milliseconds
    const firstDate = startDate;
    const secondDate = endDate;
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    console.log("Number of days ", diffDays);
    setPeriod(diffDays);

    // Charge per week
    var days =  (daysInput / 7).toFixed(2);
    setCharePerWeek(days)
    console.log(" charges / 7 : ", days)

    //Monthly charages
    var monthly = days * diffDays;
    var monthlyRounded = monthly.toFixed(1)
    console.log(" number of days * charges", monthlyRounded)
    setMonthlyCharges(monthly)
    // console.log("Montly: ", monthly)

    // Charge on cars
    // var euro = ch / 100.0
    // console.log("Cents", euro)
    var cardCharges = cardNumbers * 25;
    // cardCharges /= 100;
    // setChargeOnCards(cardCharges)

    // *************
    // var cents = 400
    var cents = cardCharges % 100
    var q = Math.floor(cardCharges/100)
    // var currency = 
    console.log("charge per cards "  + "\u20ac" + q + " and" + cents + " Cents")
setMoney("\u20ac" + q + "." + cents )
    // console.log("Charge on cards", cardCharges)
    
    const values = monthly + cardCharges;
    console.log("values", values)
    var calPercentage = 23;
    console.log("Cal percentage", calPercentage)
    var beforetx = monthly + cardCharges;
    console.log("before tax", beforetx)
    setBeforeTax(beforetx)
    var percent = (calPercentage / 100) * beforetx;
    // console.log("percent * before tax", percent)
    
    var afterPercent = values + percent;
    console.log("after tax", percent)
    var rounded = Math.round(afterPercent * 100) / 100;
    setAfterTax(rounded)
    console.log("rounded", rounded)
    var finalValue = (total - rounded).toFixed(2);
    console.log("final value", finalValue)
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

  
  {/* <h4> Days input  : {daysInput}</h4> */}
      </div>
      <div style={divStyle}>
    <p style={pStyle}>Calculation result </p>
    <h4> Final value  : {totalValue}</h4>
  <h3> Priod of days : {period}</h3>
  <h3> Before Tax : {beforeTax}</h3>
  <h3> AFter Tax : {afterTax}</h3>
  
  <h3> Charge per week  : {daysInput}</h3>
  <h4> Charge per Monthly  : {monthlyCharges}</h4>
  <h4> Card payment & admin fees ({cardNumbers} cards orders * 25c)   : charge on cards  {money}</h4>
  </div>
      {/* {showInvoice ? (
        <Print restaurant={restaurant} startDate={startDate} endDate={endDate} />
      ) : null} */}
    </Container>
  );
};

const divStyle = {
  margin: '10px',
  width:'40%',
  height:'400px',
  border: '5px solid pink'
};
const pStyle = {
  fontSize: '15px',
  textAlign: 'center'
};
export default App;
