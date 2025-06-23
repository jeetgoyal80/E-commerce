import './Footer.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
    return (
        <footer className="footer__main">
            <div className="footer__content">
                <div className="footer__section">
                    <h2>Customer Support</h2>
                    <ul>
                        <li><a href="/">Shipping Info</a></li>
                        <li><a href="/">Returns & Refunds</a></li>
                        <li><a href="/">FAQs</a></li>
                        <li><a href="/">Accessibility</a></li>
                    </ul>
                </div>

                <div className="footer__section">
                    <h2>Contact Us</h2>
                    <ul className="footer__contact">
                        <li><LocalPhoneIcon /> <span>+91 98765 43210</span></li>
                        <li><EmailIcon /> <span>support@snapverse.com</span></li>
                        <li><LocationOnIcon /> <span>New Delhi, India</span></li>
                    </ul>
                </div>

                <div className="footer__section">
                    <h2>Follow Us</h2>
                    <div className="footer__socials">
                        <a href="/"><TwitterIcon /></a>
                        <a href="/"><InstagramIcon /></a>
                        <a href="/"><YouTubeIcon /></a>
                        <a href="/"><TelegramIcon /></a>
                        <a href="/"><PinterestIcon /></a>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <p>© {new Date().getFullYear()} Snapverse. All rights reserved.</p>
                <div className="footer__policies">
                    <a href="/">Privacy Policy</a>
                    <span>|</span>
                    <a href="/">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
