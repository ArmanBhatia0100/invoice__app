import MainNavigation from "../MainNavgation/MainNavigation";
import InvoiceData from "../InvoiceData/InvoiceData";
import "./Main.css";

function Main() {
  return (
    <div className="main__container">
      <MainNavigation></MainNavigation>
      <InvoiceData></InvoiceData>
    </div>
  );
}

// Invoices
//   There are <!-- Add number here --> total invoices

//   Filter by status
//   Draft
//   Pending
//   Paid

//   New Invoice

//   <!-- No invoices -->
//   There is nothing here
//   Create an invoice by clicking the New Invoice button and get started
//   <!-- No invoices end -->

//   <!-- Create new invoice form -->
//   Go back

//   New Invoice

//   Bill From

//   Street Address
//   City
//   Post Code
//   Country

//   Bill To

//   Client's Name
//   Client's Email
//   e.g. email@example.com
//   Street Address
//   City
//   Post Code
//   Country

//   Invoice Date

//   Payment Terms
//   Net 1 day
//   Net 7 days
//   Net 14 days
//   Net 30 days

//   Project Description
//   e.g. Graphic Design Service

//   Item List

//   Item Name
//   Qty.
//   Price
//   Total

//   Add New Item

//   Discard
//   Save as Draft
//   Save & Send

export default Main;
