import style from './Footer.module.css'; // You can style the footer in a separate CSS file

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={`${style['grid-container']} center`}>
                <div className={style["grid-item"]}>
                    <h2>
                        © surau al-iman 2023
                    </h2>
                </div>
                {/* <div className={style["grid-item"]}>
                    <h2>LINKS</h2>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;
