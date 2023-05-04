import { Component } from "react";
import styles from "./Spinner.module.css";


class Spinner extends Component {
  render () {
    return (
      <div className={styles.spinner_container}>
        <div className={styles.loading_spinner}></div>
      </div>
    );
  }

}

export default Spinner;

