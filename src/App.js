import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Invoice from "./Invoice";

// import PDF from "./PDF";
// import Print from "./Print";

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
  const [subTotal, setSutotal] = useState(0);

  // monthly Charges
  const [charePerWeek,    setCharePerWeek] = useState(0);
  const [beforeTax,    setBeforeTax] = useState(0);
  const [afterTax,    setAfterTax] = useState(0);
  const [vat,    setVat] = useState(0);
  const [incVat,    setInclueVat] = useState(0);

  // monthly Charges
  const [monthlyCharges, setMonthlyCharges] = useState(0);

  // cal cents and euros
  const [money, setMoney] = useState("");
  // const [beforeTax, setBeforeTax] = useState(0);

  // Total inputs
  const [total, setTotal] = useState(0);
  const [totalSale, setTotalSale] = useState(0);
  const [valueBeforeTotalSale, setValueBeforeTotalSale] = useState(0);
  const [afterTotalSale, setAfterTotalSale] = useState(0);

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
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay) + 1);
    
    console.log("Number of days ", diffDays);
    setPeriod(diffDays);

    // Charge per week
    var days =  daysInput / 7;
    setCharePerWeek(days)
    console.log(" charges / 7 : ", days)

    //Monthly charages
    var monthly = days * diffDays;
    var monthlyRounded = monthly.toFixed(2)
    console.log(" Monthly charges", monthlyRounded)
    setMonthlyCharges(monthlyRounded)
// const floatEuro = parseFloat(getEuro)
// const floatMonthly = parseFloat(monthlyRounded)
    var cardCharges = cardNumbers * 25;
    const getEuro = cardCharges/100
   console.log('Card charges ',getEuro)
const calSu = parseFloat(monthlyRounded) + parseFloat(getEuro)
  setSutotal(calSu)
console.log("Sub total",calSu)
    var cents = cardCharges % 100
    var q = Math.floor(cardCharges/100)
    // var currency = 
    console.log("charge per cards "  + "\u20ac" + q + " and" + cents + " Cents")
setMoney("\u20ac" + q + "." + cents )
    // console.log("Charge on cards", cardCharges)
    
    // Calcualte sub total
    // var values = monthlyRounded + getEuro;
    // const roundVals = parseFloat(values).toFixed(2)
    // // values=parseFloat(values).toFixed(2)
    // console.log("monthl + card fees ", roundVals)
    var calPercentage = 23;
    // var beforetx = monthly + cardCharges;
    // console.log("before tax", beforetx)
    // setBeforeTax(beforetx)
    var percent = (calPercentage / 100) * calSu;
    console.log("get percentage of amount ", percent)
    // console.log("percent * before tax", percent)
    
   
    // get sub total
   const getPercentage = parseFloat(percent)
   const getMonthlyRounded = parseFloat(monthlyRounded)
   const roundAfterVat = (getPercentage + getMonthlyRounded).toFixed(2)
   console.log("sub total ", roundAfterVat)
  //  setSutotal(roundAfterVat)
    var afterPercent =  percent;
    console.log("after tax", afterPercent)

    var rounded = Math.round(afterPercent * 100) / 100;
    setVat(rounded)
    setAfterTax(rounded)
    console.log("rounded", rounded)

     // Calcualte incVat
     const includingVat = (calSu + rounded).toFixed(2)
     setInclueVat(includingVat)
     console.log("Value before total sale",includingVat)
     setValueBeforeTotalSale(rounded)
    var finalValue = (total - includingVat).toFixed(2);
    console.log("final value", finalValue)
    setAfterTotalSale(finalValue);
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
            label=" Total sale "
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
  <p> Charge per week  : {daysInput}</p>
  <p> Priod  : {period}</p>
  <p> Charge per Monthly  : {monthlyCharges}</p>
  <p> Card charge ({cardNumbers} cards )   : charge  {money}</p>
  <p> Vat 23%  : {vat}</p>
    <p> Sub total  : {subTotal}</p>
  <p> Including vat  : {incVat}</p>
    {/* <p> Value before subtracting total sale  : {valueBeforeTotalSale}</p> */}
    {afterTotalSale ? 
  (

    <p> You charge : {afterTotalSale}</p>
  ) : null 
  }
  

    {/* <p style={pStyle}>Calculation result </p> */}
  {/* <h3> Before Tax : {beforeTax}</h3>
  <h3> AFter Tax : {afterTax}</h3> */}
  
  </div>
      {showInvoice ? (
        <Invoice restaurant={restaurant} startDate={startDate} endDate={endDate} hidePdf={hidePdf}/>
      ) : null}
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
