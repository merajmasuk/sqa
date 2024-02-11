const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <aside>
                <p>Copyright © {currentYear} - All rights reserved by Bangladesh Police Service Association</p>
            </aside>
        </footer>
    );
};

export default Footer;
