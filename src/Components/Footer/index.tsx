import './Footer.css';
import vk from '../../Img/Footer/vk.svg';
import gitHub from "../../Img/Footer/gitHub.svg";

function Footer() {
    return (
        <footer className="footer">
            <section className="footer__nav">
                <a
                    href="https://vk.com/kirich_982"
                    className="footer__link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={vk}
                        alt="icon"
                        className="footer__icons"
                        draggable={false}
                    />
                </a>
                <a
                    href="https://github.com/kirich2k"
                    className="footer__link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={gitHub}
                        alt="icon"
                        className="footer__icons"
                        draggable={false}
                    />
                </a>
            </section>
            <section className="footer__footnote">© 2023 Kirich_2K</section>
        </footer>
    );
}

export default Footer;
