import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="Search mt-2">
      <div className="form-row search-bar" autofocus="off">
        <div className="col-10 bar">
          <input
            className="form-control search"
            type="search"
            placeholder="Search cities..."
            aria-label="Search"
            autocomplete="off"
          />
        </div>
        <div className="icons col-auto">
          <button type="submit" value="search" className="btn fabutton">
            <i className="fas fa-search searchIcon p-1"></i>
          </button>
          <button type="submit" class="btn fabutton" id="geolocation">
            <i className="fas fa-map-marker-alt locationIcon p-1"></i>
          </button>
        </div>
      </div>
    </form>
  );
}