import React, { useState } from "react";
import { connect } from "react-redux";

import logo from "../../imgs/logo.png";
import agent from "../../agent";
import { SEARCH_TITLE } from "../../constants/actionTypes";

const mapStateToProps = (state) => {
  return {
    ...state.itemList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSearch: (tab, pager, payload) => {
    dispatch({ type: SEARCH_TITLE, tab, pager, payload });
  },
});

const Banner = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (e) => {
    setSearchValue(e.target.value);

    if (e.target.value.length >= 3) {
      props.onSearch(
        "all",
        agent.Items.search,
        agent.Items.search(searchValue)
      );
    }
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="banner__text-container">
          <span>A place to </span>
          <span id="get-part">get</span>

          <div className="search__container">
            <input
              id="search-box"
              type="text"
              placeholder="Tell me what you're looking for..."
              value={searchValue}
              onChange={handleSearch}
            />
            <i className="ion-search"></i>
          </div>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
