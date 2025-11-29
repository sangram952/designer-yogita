"use strict";
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.brand}>
                    <h3>Designer Yogita</h3>
                    <p>Elegant designs for your special moments.</p>
                </div>
                <div className={styles.contact}>
                    <h4>Contact Us</h4>
                    <p>Email: contact@luxegowns.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
                <div className={styles.social}>
                    <h4>Follow Us</h4>
                    <p>Instagram | Facebook | Pinterest</p>
                </div>
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Designer Yogita. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
