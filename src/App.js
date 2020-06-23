import React, { useState} from "react";
import "./app.scss";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


import { makeStyles } from "@material-ui/core/styles";

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
    // paddingRight: 100,
    paddingRight:5
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

// const newRes = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

// console.log("444",resturants)
// var rs = JSON.parse(localStorage.getItem("session"));

// let newRes 
// for ( let res of rs ){
//   newRes = res;
// }
// console.log("new resturants ", rs)
const App = () => {


    const retdata = JSON.parse(localStorage.getItem("resturant"));
    // console.log(retdata)
  const classes = useStyles();

  const [bankcharge, setBankCharge] = useState("")


  let bc = bankcharge;
 



  
  const [customPercent, setCusomPercent] = useState("");

  const [select, setSelectOption] = useState(null);
  const [percent, setPercent] = useState("");

  const [lastFour, setlastFour] = useState("");
  const [cardOrder, setCardOrder] = useState("");
  const [cashOrder, setCashOrder] = useState("");
  // cardOrderMoney
  const [cardOrderMoney, setCardOrderMoney] = useState("");
  const [cashOrderMoney, setCashOrderMoney] = useState("");


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

  const [equals, setEquals] = useState("");

console.log("quralse",equals)
// const test = equals
// console.log("quralse",test)
  let cc = money;
  // const data = [{resturantName: restaurant},{charge: 44}];
  // const data = [{resturantName: restaurant},{charge: 44}];

// alert("Your username is "  + data[0].resturantName);

  // Storing resturant name and charge in local Storage
 
  // console.log(newArray)
  // Show Invoice
  const [showInvoice, setShowInvoice] = useState(false);
  const handleStart = (date) => {
    setStartDate(date);
  };
  const handleEnd = (date) => {
    setEndDate(date);
  };
  const p = percent;
// console.log("Percent ",p)
  // Calculate percentage 
 // get cuesom percentg
 let getCusomtPercent = customPercent
 let getTotalCard = total;
 
  const handleSubmit = (e) => {
    e.preventDefault();

    
    let cPerecnet = (getCusomtPercent/ 100) * getTotalCard;
  
    console.log("Cusom percent ", getCusomtPercent)
    // Calcualte Dates
    // *************** Calcualte Days **********************************
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
/*********************************************************************** */
    //Monthly charages
    var monthly = days * diffDays;
    var monthlyRounded = monthly.toFixed(2);
    console.log(" Monthly charges", monthlyRounded);
    setMonthlyCharges(monthlyRounded);
  console.log("Monthsly rouned", monthlyRounded)
// console
    // console.log(bc)
    // calcualte card charges
    var cardCharges = cardNumbers * p;
    const getEuro =  cardCharges / 100;
  
    console.log("Card charges ", getEuro);
    const calSu = parseFloat(monthlyRounded) + parseFloat(getEuro);
  let monthlyAdded = calSu + cPerecnet
    // setSutotal(calSu.toFixed(2) );
    setSutotal(monthlyAdded)
    console.log("fdsf", monthlyAdded)
    setEquals(monthlyAdded - monthlyRounded)
console.log("monthly added",monthlyAdded - monthlyRounded)
    // const equlaed = monthlyAdded - getEuro
    // console.log("Tefdsfdsf", equlaed)
    // setEquals(monthlyAdded - getEuro)
    // console.log("Sub total", calSu.toFixed(2));
    var cents = cardCharges % 100;
    var q = Math.floor(cardCharges / 100);
    // var currency =
   let praseBc = parseInt(bc)
   let cc  = getCusomtPercent + praseBc;
  //  console.log("adding cc", cc)

    console.log("charge per cards " + "\u20ac" + cc + " and" + cents + " Cents");
    // setMoney("\u20ac" + cc  + "." + cents);
    // setMoney("\u20ac" + cc );
    setMoney( getCusomtPercent );
   
    var calPercentage = 23;
   
    var percent = (calPercentage / 100) * monthlyAdded;
    // console.log("get percentage of amount ", percent);
  
    const getPercentage = parseFloat(percent);
    const getMonthlyRounded = parseFloat(monthlyRounded);
    const roundAfterVat = (getPercentage + getMonthlyRounded).toFixed(2);
    console.log("sub total ", roundAfterVat);
   const addToSubTotal = monthlyAdded + roundAfterVat;
   console.log("Get sub total ",addToSubTotal)

    var afterPercent = percent;
    console.log("after tax", afterPercent);

    var rounded = Math.round(afterPercent * 100) / 100;
    setVat(rounded);
    setAfterTax(rounded);
    console.log("rounded", rounded);

 
    const includingVat = (monthlyAdded + rounded).toFixed(2);
    setInclueVat(includingVat);
    console.log("Value before total sale", includingVat);
    setValueBeforeTotalSale(rounded);
    var finalValue = (total - includingVat).toFixed(2);
    console.log("final value", finalValue);
    setAfterTotalSale(finalValue);



//     function SaveDataToLocalStorage(data)
// {

//   var existing = localStorage.getItem("session");


//   existing = existing ? existing.split(',') : [];


//   existing.push(data)

//   localStorage.setItem("session", JSON.stringify(existing))


// //     var a = [];
// //     // Parse the serialized data back into an aray of objects
// //     a = JSON.parse(localStorage.getItem('session')) || [];
// //     // Push the new data (whether it be an object or anything else) onto the array
// //     a.push(data);
// //     // Alert the array value
// //     alert(a);  // Should be something like [Object array]
// //     // Re-serialize the array back into a string and store it in localStorage
// //     localStorage.setItem('resturants', JSON.stringify(a));
// }


// SaveDataToLocalStorage(resturants)
//     var existing = localStorage.getItem('session');
   

  //  existing = existing ? existing :  [];

  //  let newArray= []
  
  


  // //   newArray.push(restaurant)
  // //   newArray.push(daysInput)
  // //   newArray.push(getEuro)


  //   existing.push(resturants)
  // //   // newArray.push(address1)
  // //   // newArray.push(address2)
  // //   // newArray.push(address3)

  //   localStorage.setItem("resturant", JSON.stringify(existing));


  
  };

  // Display invoice
  const displayInvoice = (e) => {
    setShowInvoice(true);
    e.preventDefault();
  };
  const hideinfoive = () => {
    setShowInvoice(false);
  };

  const handleChange = selectedOption => {
   setSelectOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };
  return (
    <div className="appContainer">
      <div className="theForm">
        
        <ul class="form-style-1">
        {/* <li>
            <label>
              Select Resturant <span class="required">*</span>
            </label>
          <Select
        value={select}
        onChange={handleChange}
        options={newRes}
      />
          </li> */}
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
          {/* <li>
            <label>
              Enter card fee  <span class="required">*</span>
            </label>
            <input
              onChange={(e) => setPercent(e.target.value)}
              type="email"
              name="field3"
              class="field-long"
            />
          </li> */}
          <li>
            <label>
              Card fee % <span class="required">*</span>
            </label>
            <input
              onChange={(e) => setCusomPercent(e.target.value)}
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
          {/* <li>
            <label>
              How many cards ? <span class="required">*</span>
            </label>
            <input
              onChange={(e) => setCardNumbers(e.target.value)}
              type="email"
              name="field3"
              class="field-long"
            />
          </li> */}
          
          <li>
            <label>
              {/* Total card order sale <span class="required">*</span> */}
              Food inn total charge  <span class="required">*</span>
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
          <li>
            <label>
              Will be paid by <span class="required">*</span>
            </label>
            <input
              onChange={(e) => setWillpayBy(e.target.value)}
              type="email"
              name="field3"
              class="field-long"
            />
          </li>
        
          {/* resturant  */}
          {/* <li>
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
          </li> */}
          {/* <li>
            <label>
              Postal code (H12 D677) <span class="required">*</span>
            </label>
            <input
              onChange={(e) => setAddress3(e.target.value)}
              type="email"
              name="field3"
              class="field-long"
            />
          </li> */}
          {/* <li>
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
          </li> */}

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
      
          {/* <li>
            <label>
              Total card order sales<span class="required">*</span>
            </label>
            <input
              onChange={(e) => setCardOrder(e.target.value)}
              type="email"
              name="field3"
              class="field-long"
            />
          </li> */}
          {/* <li>
            <label>
              Total card order Price <span class="required">*</span>
            </label>
            <input
              onChange={(e) => setCardOrderMoney(e.target.value)}
              type="email"
              name="field3"
              class="field-long"
            />
          </li> */}
          {/* <h1>*********************</h1>
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
          </li> */}
          {/* <li>
            <label>
              Total cash order Price <span class="required">*</span>
            </label>
            <input
              onChange={(e) => setCashOrderMoney(e.target.value)}
              type="email"
              name="field3"
              class="field-long"
            />
          </li> */}
        
        
        </ul>
      </div>
      <div className="result">
        <p className="p"> Charge per week : {daysInput}</p>
        <p className="p">Priod : {period} Days</p>
        <p className="p"> Charge per Monthly : {monthlyCharges}</p>
        {/* <p className="p">
          {" "}
       Card order {cardNumbers} 
        </p> */}
        <p className="p">
          {" "}
       Card fee {money} % = {equals}
        </p>
        <p className="p">Sub total : {subTotal}</p>
        <p className="p">Vat 23% : {vat}</p>
        <p className="p"> Including vat : {incVat}</p>
        {/* <p> Percentage entered : {percent}</p> */}

        {afterTotalSale ? <p className="p"> Account balance : {afterTotalSale}</p> : null}
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
