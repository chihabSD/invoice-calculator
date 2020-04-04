import React from 'react';
import "./invoice.scss";
import log from './'
        const Invoice = ({hidePdf}) => {
 
        return (
            <div className="invoiceContainer">
                <div className="invoiceSubCont">
                    <div className="Image">
                    <img src={require('./logo.png')} className="img" />
                    </div>
                    <div className="invoice-title">
                        <h1> Invoice Summary </h1>
                        <p> Period: 01 Feb 2020 - 29 Feb 2020
                            
                        </p>
                    </div>
                </div>
            </div>
        );
   
}
 
export default Invoice;