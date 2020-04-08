import React, { useState } from "react";
import "./Modal.scss";
import PrintComponents from "react-print-components";
import Typography from "@material-ui/core/Typography";


const Print = ({ restaurant, startDate,endDate }) => {

  const ref = React.createRef();

  return (
    <div className="invoiceContainer">
      <Typography component="h1" variant="h5">
        your invoice
      </Typography>

<div className="invoiceSubCont">
        <button className="btn-invoice"> close </button>
      <PrintComponents
  trigger={<button>Print</button>}

>

        <div className="Image">
          <img src={require("./logo.png")} className="img" />
        </div>
        <div className="invoice-title">
          <div className="resturant">
            <p> Resturant : Chaske Spice </p>
          </div>
          <div className="summary">
            <h1 className="period"> Invoice Summary </h1>
            <p> Period: 01 Feb 2020 - 29 Feb 2020</p>
          </div>
        </div>
        <div className="tableContainer">
          <table class="customTable">
            <thead></thead>
            <tbody>
              <tr>
                <td>Row 1, Cell 1</td>
                <td>
                  <div>
                    <p>* This amount will be paid by 05/02/2020</p>
                    <p>Account ending *** 1616</p>
                  </div>
                </td>
                <td>
                  <div>
                    <p>Your balance:</p>
                    <p>$5555</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Row 2, Cell 1</td>
                <td>
                  <div>
                    <p>* Orders for delivery & collection:</p>
                  </div>
                </td>
                <td>
                  <div>
                    <p> Total number of orders </p>
                    <p> 35 </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Row 3, Cell 1</td>
                <td>
                  <div>
                    <p>*Total card orders sales: (17) $444</p>
                    <p>*Total cash order sales: (17) $444</p>
                  </div>
                </td>
                <td>
                  <div>
                    <p> Total sales </p>
                    <p> 553 </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="your-invoice">
            <p> Your invoice</p>
            <p className="your-line"> Invoice Date : 01/mar/20</p>
          </div>
          <div class="address">
            <div className="address-details">
              <h4>Kebaish</h4>
              <p>8 James connolly st</p>
              <p>Townpark, Cavan</p>
              <p>H12 D6 D620</p>
            </div>

            <div className="address-details">
              <h4>Foodinn Ireland</h4>
              <p>Unit 5, Castle hill</p>
              <p>Co.Carlow</p>
              <p>Tel: (059)9193313</p>
              <p>invoice@foodinn.ie</p>
              <p>Vat No: IE1621178BA</p>
            </div>
          </div>
          {/* Secodn table */}
          <table class="blueTable">
            
          
            <tbody>
              <tr>
                <td>cell1_1</td>
                <td>cell2_1</td>
              </tr>
              <tr>
                <td>cell1_2</td>
                <td>cell2_2</td>
              </tr>
              <tr>
                <td>cell1_3</td>
                <td>cell2_3</td>
              </tr>
              <tr>
                <td>cell1_4</td>
                <td>cell2_4</td>
              </tr>
              <tr>
                <td>cell1_5</td>
                <td>cell2_5</td>
              </tr>
              <tr>
                <td>cell1_6</td>
                <td>cell2_6</td>
              </tr>
              <tr>
                <td>cell1_7</td>
                <td>cell2_7</td>
              </tr>
              <tr>
                <td>cell1_8</td>
                <td>cell2_8</td>
              </tr>
            </tbody>
          </table>
        </div>
</PrintComponents>
      </div>

      {/* <ReactToPrint
          trigger={() =>  
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="danger"
            // onClick={toPdf}
          >
            Download the invoice
          </Button>}
          content={() => componentRef}
        /> */}

      {/* <Pdf targetRef={ref} filename="invoice">
        {({ toPdf }) => (
         
        )}
      </Pdf> */}
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

export default Print;
