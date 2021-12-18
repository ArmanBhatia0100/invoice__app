import { getInvoiceData } from "../store/storeSlices";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../../Sass/invoice.css";

function Invoice(props) {
  const dispatch = useDispatch();

  let statusStyle, statusText;
  const { id, paymentDue, status, clientName, total } = props.data;

  //Functions
  const invoiceDetailhandler = () => {
    dispatch(getInvoiceData(props));
  };

  //Logics

  if (status === "pending") {
    statusStyle = {
      color: "#FF8F00",
      background: "#ff91003f",
    };
    statusText = {
      color: "#FF8F00",
    };
  } else if (status === "draft") {
    statusStyle = {
      background: "#373b5341",
    };
    statusText = {
      color: "#373B53",
    };
  } else {
    statusStyle = {};
  }

  //JSX
  return (
    <div className="invoice__card">
      <div className="invoice__detail__container">
        <div className="invoice__id">
          <span>#</span>
          {id}
        </div>
        <div className="invoice__date">Due {paymentDue} </div>
        <div className="invoice__name">{clientName}</div>
        <div className="invoice__amount">£ {total}</div>
        <div className="invoice__status" style={statusStyle}>
          <ul>
            <li style={statusText}>{status}</li>
          </ul>
        </div>
        <Link
          style={{ textDecoration: "none", fontSize: "20px", color: "#1565c0" }}
          to="/invoice-detail"
          onClick={invoiceDetailhandler}
        >
          &#8594;
        </Link>
      </div>
    </div>
  );
}

export default Invoice;
