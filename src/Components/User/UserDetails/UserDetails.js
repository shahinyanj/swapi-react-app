import { Component } from 'react';
import styles from './UserDetails.module.css';

class UserDetails extends Component {
    render () {
        return (
                <div className={styles.user_details}>
                    <span>Name Firstname</span>
                    <span className={styles.line}></span>
                    <span>Username</span>
                    <span className={styles.line}></span>
                    <span>email address</span>
                    <span className={styles.line}></span>
                    <span>place of living</span>
                </div>
        );
    }
}

export default UserDetails;