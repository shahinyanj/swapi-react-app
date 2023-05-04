import { Component } from "react";
import styles from "./Character.module.css";

class Character extends Component {
  state = {
    loading: false,
  };

  render() {
    const {
      name,
      birth_year,
      eye_color,
      gender,
      skin_color,
      height,
      hair_color,
    } = this.props.character;

    return (
      <div className={styles.details_container}>
        <h2 className={styles.title}>{name}</h2>
        <ul className={styles.character_details}>
          <li>
            Birth Year: <strong>{birth_year}</strong>
          </li>
          <span className={styles.line}></span>
          <li>
            Gender: <strong>{gender}</strong>
          </li>
          <span className={styles.line}></span>
          <li>
            Height: <strong>{height}</strong>
          </li>
          <span className={styles.line}></span>
          <li>
            Skin Color: <strong>{skin_color}</strong>
          </li>
          <span className={styles.line}></span>
          <li>
            Hair Color: <strong>{hair_color}</strong>
          </li>
          <span className={styles.line}></span>
          <li>
            Eye Color: <strong>{eye_color}</strong>
          </li>
        </ul>
      </div>
    );
  }
}

export default Character;
