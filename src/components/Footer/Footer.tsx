import style from './Footer.module.css'; // You can style the footer in a separate CSS file

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style["newsletter"]}>
                <h2>Subscribe to our Newsletter</h2>
                <input style={{
                    width:"70%"
                }} type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
            <div className={style["links"]}>
                <h2>Important Links</h2>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    {/* Add more links as needed */}
                </ul>
            </div>
            <div className={style["contact"]}>
                <h2>Contact Us</h2>
                <p>Phone: 123-456-7890</p>
                <p>Email: contact@example.com</p>
            </div>
        </footer>
    );
};

export default Footer;
