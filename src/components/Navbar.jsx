export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a className="brand" href="#home">ZA</a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
