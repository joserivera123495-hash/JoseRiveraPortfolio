function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p>© {new Date().getFullYear()} Jose Rivera</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
