import React, { useState } from "react";
import "./app.scss";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Invoice from "./Invoice";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "row",
  },
  date: {
    flexDirection: "row",
    display: "flex",
    padding: 5,
  },
  dateTwo: {
    display: "flex",
    flexDirection: "column",
    paddingRight: 100,
  },
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 10,
    width: "40%",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "70%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 1),
  },
}));
const App = () => {
  const classes = useStyles();

  const [percent, setPercent] = useState("");

  const [lastFour, setlastFour] = useState("");
  const [cardOrder, setCardOrder] = useState("");
  const [cashOrder, setCashOrder] = useState("");
  // cardOrderMoney
  const [cardOrderMoney, setCardOrderMoney] = useState("");
  const [cashOrderMoney, setCashOrderMoney] = useState("");
  const [invoiceMonth, setInvoiceMonth] = useState("");

  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [address3, setAddress3] = useState("");

  // Days between first and second date
  const [period, setPeriod] = useState(0);

  // Dates
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // Address
  const [address, setAddress] = useState("");
  const [daysInput, setDaysInput] = useState(0);

  // Number of cards
  const [cardNumbers, setCardNumbers] = useState(0);

  // Charge on cards
  const [subTotal, setSutotal] = useState(0);

  // monthly Charges
  const [charePerWeek, setCharePerWeek] = useState(0);
  const [beforeTax, setBeforeTax] = useState(0);
  const [afterTax, setAfterTax] = useState(0);
  const [vat, setVat] = useState(0);
  const [incVat, setInclueVat] = useState(0);

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

  const [monthName,  setMonthName] = useState("");
  const [monthDay,  setMonthDay] = useState("");
  const [monthYear,  setMonthYear] = useState("");
  const [willpayBy,  setWillpayBy] = useState("");

  const [endMonth,  setEndMonth] = useState("");
  const [endDay,  setEndeDay] = useState("");
  const [endYear,  setEndYear] = useState("");
  const [numberOfDays, setNumberOfDays] = useState("");

  // Show Invoice
  const [showInvoice, setShowInvoice] = useState(false);
  const handleStart = (date) => {
    setStartDate(date);
  };
  const handleEnd = (date) => {
    setEndDate(date);
  };
  const p = percent;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calcualte Dates
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  
    const firstDate = startDate;
   
    const month = firstDate.toLocaleString('default', { month: 'long' });
    setMonthName(month)
    setMonthDay(firstDate.getDate())
    setMonthYear(firstDate.getFullYear())

   
 

    const secondDate = endDate;
    const endMonth = secondDate.toLocaleString('default', { month: 'long' });
    setEndMonth(endMonth)
    setEndeDay(secondDate.getDate())
    setEndYear(secondDate.getFullYear())

    const diffDays = Math.round(
      Math.abs((firstDate - secondDate) / oneDay) + 1
    );

    console.log("Number of days ", diffDays);
    setPeriod(diffDays);
    setNumberOfDays(diffDays);

    // Charge per week
    var days = daysInput / 7;
    setCharePerWeek(days);
    console.log(" charges / 7 : ", days);

    //Monthly charages
    var monthly = days * diffDays;
    var monthlyRounded = monthly.toFixed(2);
    console.log(" Monthly charges", monthlyRounded);
    setMonthlyCharges(monthlyRounded);
   
   
    var cardCharges = cardNumbers * p;
    const getEuro = cardCharges / 100;
    console.log("Card charges ", getEuro);
    const calSu = parseFloat(monthlyRounded) + parseFloat(getEuro);
    setSutotal(calSu.toFixed(2));
    console.log("Sub total", calSu.toFixed(2));
    var cents = cardCharges % 100;
    var q = Math.floor(cardCharges / 100);
    // var currency =
    console.log("charge per cards " + "\u20ac" + q + " and" + cents + " Cents");
    setMoney("\u20ac" + q + "." + cents);
   
    var calPercentage = 23;
   
    var percent = (calPercentage / 100) * calSu;
    console.log("get percentage of amount ", percent);
  
    const getPercentage = parseFloat(percent);
    const getMonthlyRounded = parseFloat(monthlyRounded);
    const roundAfterVat = (getPercentage + getMonthlyRounded).toFixed(2);
    console.log("sub total ", roundAfterVat);
   
    var afterPercent = percent;
    console.log("after tax", afterPercent);

    var rounded = Math.round(afterPercent * 100) / 100;
    setVat(rounded);
    setAfterTax(rounded);
    console.log("rounded", rounded);

 
    const includingVat = (calSu + rounded).toFixed(2);
    setInclueVat(includingVat);
    console.log("Value before total sale", includingVat);
    setValueBeforeTotalSale(rounded);
    var finalValue = (total - includingVat).toFixed(2);
    console.log("final value", finalValue);
    setAfterTotalSale(finalValue);
  };

  // Display invoice
  const displayInvoice = (e) => {
    setShowInvoice(true);
    e.preventDefault();
  };
  const hideinfoive = () => {
    setShowInvoice(false);
  };
  return (
    <div className="appContainer">
      <div className="theForm">
        <ul class="form-style-1">
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
          <li>
            <label>
              Enter percentage 30% or 25% etc <span class="required">*</span>
            </label>
            <input
              onChange={(e) => setPercent(e.target.value)}
              type="email"
              name="field3"
              class="field-long"
            />
          </li>
          <li>
            <label>
              Charge per week <span class="required">*</span>
            </label>
            <input
              onChange={(e) => setDaysInput(e.target.value)}
              type="email"
              name="field3"
              class="field-long"
            />
          </li>
          <li>
            <label>
              How many cards ? <span class="required">*</span>
            </label>
            <input
              onChange={(e) => setCardNumbers(e.target.value)}
              type="email"
              name="field3"
              class="field-long"
            />
          </li>
          
          <li>
            <label>
              Total sale <span class="required">*</span>
            </label>
            <input
              onChange={(e) => setTotal(e.target.value)}
              type="email"
              name="field3"
              class="field-long"
            />
          </li>
          <li>
            <label>
              Resturant name <span class="required">*</span>
            </label>
            <input
              onChange={(e) => setRestaurant(e.target.value)}
              type="email"
              name="field3"
              class="field-long"
            />
          </li>
        
          {/* resturant  */}
          <li>
            <label>
              Resturant second address (8 crosbile place){" "}
              <span class="required">*</span>
            </label>
            <input
              onChange={(e) => setAddress1(e.target.value)}
              type="email"
              name="field3"
              class="field-long"
            />
          </li>
          <li>
            <label>
              Third address (Townparks, cavan) <span class="required">*</span>
            </label>
            <input
              onChange={(e) => setAddress2(e.target.value)}
              type="email"
              name="field3"
              class="field-long"
            />
          </li>
          <li>
            <label>
              Postal code (H12 D677) <span class="required">*</span>
            </label>
            <input
              onChange={(e) => setAddress3(e.target.value)}
              type="email"
              name="field3"
              class="field-long"
            />
          </li>
          <li>
            <label>
              Enter card last 4 (example ****3432){" "}
              <span class="required">*</span>
            </label>
            <input
              onChange={(e) => setlastFour(e.target.value)}
              type="email"
              name="field3"
              class="field-long"
            />
          </li>

          <li>
            <button className="calculateBTN" onClick={handleSubmit}>
              {" "}
              Calcualte{" "}
            </button>
            {/* <input type="submit" value="Calculate" /> */}
          </li>
          {/* <button className="showInvoiceBtn" onClick={displayInvoice}>
            {" "}
            Show Invoice{" "}
          </button> */}
        </ul>
      </div>
      <div className="theForm">
        <ul class="form-style-1">
          <li>
            <label>
              Will be paid by (example: 05/02/2020)<span class="required">*</span>
            </label>
            <input
              onChange={(e) => setWillpayBy(e.target.value)}
              type="email"
              name="field3"
              class="field-long"
            />
          </li>
          <li>
            <label>
              Total card order sales<span class="required">*</span>
            </label>
            <input
              onChange={(e) => setCardOrder(e.target.value)}
              type="email"
              name="field3"
              class="field-long"
            />
          </li>
          <li>
            <label>
              Total card order Price <span class="required">*</span>
            </label>
            <input
              onChange={(e) => setCardOrderMoney(e.target.value)}
              type="email"
              name="field3"
              class="field-long"
            />
          </li>
          <h1>*********************</h1>
          <li>
            <label>
              Total cash order sales<span class="required">*</span>
            </label>
            <input
              onChange={(e) => setCashOrder(e.target.value)}
              type="email"
              name="field3"
              class="field-long"
            />
          </li>
          <li>
            <label>
              Total cash order Price <span class="required">*</span>
            </label>
            <input
              onChange={(e) => setCashOrderMoney(e.target.value)}
              type="email"
              name="field3"
              class="field-long"
            />
          </li>
          <li>
            <label>
              Invoice Months (March) <span class="required">*</span>
            </label>
            <input
              onChange={(e) => setInvoiceMonth(e.target.value)}
              type="email"
              name="field3"
              class="field-long"
            />
          </li>
        </ul>
      </div>
      <div className="result">
        <p> Charge per week : {daysInput}</p>
        <p> Priod : {period}</p>
        <p> Charge per Monthly : {monthlyCharges}</p>
        <p>
          {" "}
          Card charge ({cardNumbers} cards ) : charge {money}
        </p>
        <p> Sub total : {subTotal}</p>
        <p> Vat 23% : {vat}</p>
        <p> Including vat : {incVat}</p>
        {/* <p> Percentage entered : {percent}</p> */}

        {afterTotalSale ? <p> You charge : {afterTotalSale}</p> : null}
      </div>
   
      {showInvoice ? (
        <Invoice
          hideinfoive={hideinfoive}
          restaurant={restaurant}
          startDate={startDate}
          subTotal={subTotal}
          cardNumbers={cardNumbers}
          money={money}
          lastFour={lastFour}
          period={period}
          incVat={incVat}
          cardOrder={cardOrder}
          cashOrder={cashOrder}
          cardOrderMoney={cardOrderMoney}
          cashOrderMoney={cashOrderMoney}
          vat={vat}
          invoiceMonth={monthName}
          day={monthDay}
          year={monthYear}
          address1={address1}
          address2={address2}
          address3={address3}
          endDate={endDate}
          total={total}
          numberOfDays={numberOfDays}
          endMonth={endMonth}
          endDay={endDay}
          monthlyCharges={monthlyCharges}
          willpayBy={willpayBy}
          endYear={endYear}
      
        />
      ) : null}
    </div>
  
  );
};

export default App;
