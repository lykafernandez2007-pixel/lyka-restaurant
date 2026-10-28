import { Link } from "react-router-dom";

const testimonials = [
  {
    quote: "The best dining Experience I've ever had!",
    name: "Jainab Salih"
  },
  {
    quote: "The ambiance is so cozy and intimate.",
    name: "Michelle Gozum"
  },
  {
    quote: "The staff are friendly and attentive.",
    name: "Lyka Fernandez"
  },
  {
    quote: "The seafood dishes are delicious and satisfying.",
    name: "Jehan Carla Incoy"
  },
  {
    quote: "A wonderful place to enjoy good food with friends.",
    name: "Erica Mae Baron"
  }
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <h1>Welcome to Lyka's Restaurant</h1>

          <p>
            Experience the best cuisine and discover delicious seafood
            favorites in a warm and welcoming atmosphere.
          </p>

          <Link to="/menu" className="btn">
            Explore Our Menu
          </Link>
        </div>
      </section>

      <section className="Testimonials">
        <div className="container">
          <strong><h1>Customer Testimonials</h1></strong>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article
                className="testimonial-card"
                key={item.name}
              >
                <p>"{item.quote}"</p>
                <span>{item.name}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}