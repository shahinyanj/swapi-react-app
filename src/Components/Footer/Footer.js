import React, { Component } from "react";
import styles from "./Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer_container}>
        <ul className={styles.footer_list}>
          <li>
            <a href="#!">Official Site</a>
          </li>
          <li>
            <a href="#!">Tumblr</a>
          </li>
          <li>
            <a href="#!">Twitter</a>
          </li>
          <li>
            <a href="#!">Facebook</a>
          </li>
          <li>
            <a href="#!">Instagram</a>
          </li>
          <li>
            <a href="#!">Google+</a>
          </li>
          <li>
            <a href="#!">Youtube</a>
          </li>
        </ul>

        <div>
          <p>©2022 | Developped by Jules Shahinyan </p>
        </div>
      </div>
    );
  }
}

export default Footer;
