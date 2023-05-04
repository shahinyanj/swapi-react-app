import { Component } from "react";
import styles from "./UserDetails.module.css";

class UserDetails extends Component {
  render() {
    return (
      <div className={styles.user_details}>
        <span>Username</span>
        <span className={styles.line}></span>
        <span>Email</span>
        <span className={styles.line}></span>
        <span>Location</span>
        <span className={styles.line}></span>
        <span className={styles.settings}>Settings</span>
      </div>
    );
  }
}

export default UserDetails;
