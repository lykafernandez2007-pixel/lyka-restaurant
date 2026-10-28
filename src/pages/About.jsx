import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="about">
        <div className="container">
          <strong><h1>About Us</h1></strong>

          <p>
            Welcome to Lyka's Restaurant, where delicious food and
            a welcoming atmosphere come together. We are passionate
            about serving satisfying meals and creating memorable
            dining experiences.
          </p>

          <p>
            Our menu features three seafood favorites: Grilled Salmon,
            Juicy Shrimps, and Calamari Rings. Each dish offers
            distinctive flavors for seafood lovers to enjoy.
          </p>

          <p>
            We believe that food brings people together. Whether
            you're spending time with family, catching up with friends,
            or enjoying a meal on your own, we want every visit to
            feel special.
          </p>

          <p>
            At Lyka's Restaurant, our goal is to provide enjoyable food
            and a comfortable place where guests can relax and share
            good moments.
          </p>

          <Link to="/menu" className="btn">
            View Our Menu
          </Link>
        </div>
      </section>

      <section className="banner">
        <img
          src="/img/images (3).jpg"
          alt="Lyka's Restaurant"
          className="about-photo"
        />
      </section>
    </>
  );
}