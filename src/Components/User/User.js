import { Component } from "react";
import styles from "./User.module.css";
import UserDetails from "./UserDetails/UserDetails";

class User extends Component {
  render() {
    return (
      <div className={styles.user_sidebar}>
        <div className={styles.user_image}>
          <img
            src={`https://pngimg.com/uploads/stormtrooper/stormtrooper_PNG33.png`}
            alt="storm trooper"
          />
        </div>
        <div>
          <UserDetails />
        </div>
      </div>
    );
  }
}

export default User;
