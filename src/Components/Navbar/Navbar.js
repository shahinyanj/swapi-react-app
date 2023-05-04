import React, {Component} from 'react';
import styles from './Navbar.module.css';



class Navbar extends Component {
    render () {
        return (
            <>
                <ul className={styles.navbar}>
                <img className={styles.logo} src={`https://pngimg.com/uploads/stormtrooper/stormtrooper_PNG33.png`} alt='storm trooper'/>
                    <li className={styles.span}><img alt=''/>Star Wars</li>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Logout</a></li>
                </ul>
            </>
          
        );
    }
}

export default Navbar;