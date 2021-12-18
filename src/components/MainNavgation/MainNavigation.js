import { filter } from "../store/storeSlices";
import { useDispatch } from "react-redux";

import "../../Sass/MainNavigation.css";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

function MainNavigation() {
  const dispatch = useDispatch();

  // Filter Selection Function
  const filterHandler = (e) => {
    dispatch(filter(e.target.value));
  };

  return (
    <div className="main__nav__container">
      <div className="main__nav__title">
        <h1>Invoices</h1>
      </div>
      <div className="main__btn__container">
        <div>
          <label htmlFor="">Filter By</label>
          <select name="filter" id="filterBy" onChange={filterHandler}>
            <option value="none">None</option>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="draft">Draft</option>
          </select>
        </div>
        <div>
          <Button variant="contained">
            <AddIcon />
            New Invoice
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MainNavigation;
