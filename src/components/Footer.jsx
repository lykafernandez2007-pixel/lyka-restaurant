export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Lyka's Restaurant.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}