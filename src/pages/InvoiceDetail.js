import { useSelector } from "react-redux";
import "../Sass/InvoiceDetails.css";
import { Link } from "react-router-dom";

//Helper Components

const DetailNav = ({ data }) => {
  return (
    <div className="detail__nav">
      <div className="nav__status_container">
        <p>
          Status :
          <span style={{ fontWeight: "600", color: "black" }}>
            {data.status}
          </span>
        </p>
      </div>
      <div className="nav__btn_container">
        <div className="nav__btn ">
          <button className="nav__btn__edit">Edit</button>
        </div>
        <div className="nav__btn">
          <button className="nav__btn__delete">Delete</button>
        </div>
        <div className="nav__btn">
          <button className="nav__btn__mark">Mark as Paid</button>
        </div>
      </div>
    </div>
  );
};

const SenderAddress = (props) => {
  const { senderAddress } = props.data;
  return (
    <div className="address">
      {senderAddress.street} {senderAddress.city} {senderAddress.postCode}
      {senderAddress.country}
    </div>
  );
};

const CustomerAddress = (props) => {
  const { clientAddress } = props.data;

  return (
    <h4 className="customer_address">
      {clientAddress.street} {clientAddress.city}
      {clientAddress.postCode}
      {clientAddress.country}
    </h4>
  );
};

// Main Component

const InvoiceDetail = () => {
  const invoiceState = useSelector((state) => state.invoice.details);
  let amountDue = 0;
  const { data } = invoiceState;

  return (
    <div className="details__container">
      <div className="go__back">
        <Link to="/">Go back</Link>
      </div>

      <DetailNav data={data} />

      <div className="invoice__details">
        <div className="invoice__address__container">
          <div className="service_title">
            <div className="id">
              <span id="id__x">X</span>
              {data.id}
            </div>
            <div className="service">{data.description}</div>
          </div>
          <SenderAddress data={data} />
        </div>
        <div className="invoice__description__container">
          <div className="description__date__container">
            <div className="invoice__date">
              <h4>Invoice date</h4>
              <h1>{data.createdAt}</h1>
            </div>
            <div className="payment_due">
              <h4>Payment Due</h4>
              <h1>{data.paymentDue}</h1>
            </div>
          </div>
          <div className="bill_to">
            <h4>Bill to</h4>
            <h3 className="customer_name">{data.clientName}</h3>

            <CustomerAddress data={data} />
          </div>
          <div className="sent_to">
            <h4>Sent to</h4>
            <p className="sent_email">{data.clientEmail}</p>
          </div>
        </div>
        <div className="invoice__items__container">
          <table>
            <thead>
              <tr className="item_row_header">
                <th className="th_name">Item Name</th>
                <th className="th_qty">QTY</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item) => {
                amountDue += item.total;
                console.log(amountDue);
                return (
                  <tr>
                    <td className="td td_name">{item.name}</td>
                    <td className="td td_qty">{item.quantity}</td>
                    <td className="td td_price">{item.price}</td>
                    <td className="td td_total">{item.total}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="total_amount">
          <h5>Amount Due</h5>
          <h2>${amountDue}</h2>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetail;
