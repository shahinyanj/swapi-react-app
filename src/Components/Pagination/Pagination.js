import React, { Component } from "react";
import Pagination from "react-js-pagination";
import styles from "./Pagination.module.css";
import SwapiService from "../../Services/SwapiService";

class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
  }
  swapi = new SwapiService();

  async handlePageChange(pageNumber) {
    this.props.handleDataUpdate(pageNumber);
  }

  render() {
    return (
      <div className={styles.page_list}>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={82}
          pageRangeDisplayed={6}
          onChange={this.handlePageChange.bind(this)}
          itemClass={styles.item_style}
          linkClass={styles.link_style}
        />
      </div>
    );
  }
}

// manual pagination

export default Pages;
