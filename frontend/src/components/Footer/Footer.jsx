const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <aside>
                <p>Copyright © {currentYear} - All rights reserved by Online course management system</p>
            </aside>
        </footer>
    );
};

export default Footer;
