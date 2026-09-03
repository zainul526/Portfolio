export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Zainul Abideen</p>
        <p>Built with React and plain CSS.</p>
      </div>
    </footer>
  );
}
