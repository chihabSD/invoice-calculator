import React from "react";
import "./invoice.scss";
// import PrintComponents from "react-print-components";

import log from "./";

const Invoice = ({
  hidePdf,
  restaurant,
  subTotal,
  cardNumbers,
  money,
  incVat,
  hideinfoive,
  vat,
  cardOrderMoney,
  cashOrderMoney,
  invoiceMonth,
  cardOrder,
  cashOrder,
  lastFour,
  address1,
  address2,
  address3,
  day,
  total,
  year,
  endMonth,
  endDay,
  numberOfDays,
  endYear,
  monthlyCharges,
  willpayBy,
  period,
}) => {
  return (
    <div className="invoiceContainer">
      <div className="invoiceSubCont">
        <button className="btn-invoice" onClick={hideinfoive}> close </button>

        <div className="Image">
          <img src={require("./logo.png")} className="img" />
        </div>
        <div className="invoice-title">
          <div className="resturant">
            <p> Resturant : {restaurant} </p>
          </div>
          <div className="summary">
            <h1 className="period"> Invoice Summary </h1>
            <p> Period: {day} {invoiceMonth} {year} - {endDay} {endMonth} {endYear}</p>
          </div>
        </div>
        <div className="tableContainer">
          <table class="customTable">
            <thead></thead>
            <tbody>
              <tr>
              <td>  <img src={require("./image2.png")} className="order" /></td>
                <td>
                  <div className="rowInside">
                    <p> * This amount will be paid by </p>
                    <p> {willpayBy}</p>
                    <h7> Account ending *** {lastFour}</h7>
                  </div>
                </td>
                <td>
                  <div className="last-third">
                    <p>Your balance:</p>
                    <p className="lasth-third-red"> &euro;5555</p>
                  </div>
                </td>
              </tr>
              <tr>
              <td>  <img src={require("./image1.png")} className="order" /></td>
                <td>
                  <div className="rowInside">
                    <p>* Orders for delivery & collection:</p>
                  </div>
                </td>
                <td>
                  <div className="last-third">
                    <p> Total number of orders </p>
                    <p className="lasth-third-red"> &euro;35 </p>
                  </div>
                </td>
              </tr>
              <tr>
              <td>  <img src={require("./image3.png")} className="order" /></td>
                <td>
                  <div className="rowInside">
                    <div className="total-order-euro">
                      <p>*Total card orders sales: ({cardOrder})</p>
                      <p className="total-order-euro-p"> &euro;{cardOrderMoney}</p>
                    </div>
                    <div className="total-order-euro">
                      <p>*Total cash order sales: ({cashOrder})</p>
                      <p className="total-order-euro-p"> &euro;{cashOrderMoney}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="last-third">
                    <p> Total sales </p>
                    <p className="lasth-third-red"> &euro;{total} </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="your-invoice">
            <p> Your invoice</p>
            <h6 className="your-line"> Invoice Date : {day}/{invoiceMonth}/{year}</h6>
          </div>
          <div class="address">
            <div className="address-details">
              <h4>{restaurant}</h4>
              <p>{address1}</p>
              <p>{address2}</p>
              <p>{address3}</p>
              {/* <p>H12 D6 D620</p> */}
            </div>

            <div className="fooding-details">
              <h4>Foodinn Ireland</h4>
              <p>Unit 5, Castle hill</p>
              <p>Co.Carlow</p>
              <p>Tel: (059)9193313</p>
              <p>invoice@foodinn.ie</p>
              <p>Vat No: IE1621178BA</p>
            </div>
          </div>
          {/* Secodn table */}
          <table className="blueTable">
            <thead></thead>
            <tfoot></tfoot>
            <tbody>
              <tr>
                <td>Food Inn Service Charge (Period {numberOfDays} days)</td>
                <td>&euro;{monthlyCharges}</td>
              </tr>
              <tr>
                <td>
                  Card payment & Admin Fee({cardNumbers} card orders x 25c)
                </td>
                <td>{money}</td>
              </tr>
              <tr>
                <td>Subtotal</td>
                <td> &euro;{subTotal}</td>
              </tr>
              <tr>
                <td>VAT @ 23%</td>
                <td>&euro;{vat}</td>
              </tr>
              <tr>
                <td>Total inc.Vat</td>
                <td>&euro;{incVat}5</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Card Order Sales</td>
                <td>&euro;{cardOrderMoney}</td>
              </tr>
              <tr>
                <td>Invoice: {invoiceMonth}</td>
                <td>&euro;{incVat}</td>
              </tr>
              <tr>
                <td>Account Balance</td>
                <td>&euro;cell2_9</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5 className="thanks"> Thank you for being resturant partner</h5>
      </div>
    </div>
  );
};

export default Invoice;
