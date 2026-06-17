function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Jose Rivera — built with React</span>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;
