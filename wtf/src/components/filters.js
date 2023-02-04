import React from "react";
// import SearchIcon from "@mui/icons-material/Search";
import CardImage from "../assets/card01.png";
import "./filters.css";

function Filters() {
  return (
      <div className="filter-main-container">
        <div className="filter-field">
          <div className="filter-text">
            <div>Filters</div>
          </div>
          <br />
          <div className="location">
            <div>Location</div>
            <input type="text" placeholder="Enter Location" size="20"></input>
          </div>
          <br />
          <div className="price">
            <div>Price</div>
            <input type="text" placeholder="Min" className="min" size="5" />
            <input type="text" placeholder="Max" className="max" size="5" />
          </div>
          <br />
          <div className="cities">
            <div>Cities</div>
            <select name="Select City">
              <option>Select City</option>
              <option value="Noida">Noida</option>
              <option value="Delhi">Delhi</option>
              <option value="Gurgaon">Gurgaon</option>
            </select>
            <br />
          </div>
        </div>

        <div className="cards-field">
          <div className="cards">
            <card className="card01">
              <img src={CardImage} alt="cardImage" className="card"></img>
            </card>
            <card className="card02">
              <img src={CardImage} alt="cardImage" className="card"></img>
            </card>
          </div>
        </div>
      </div>
  );
}

export default Filters;
