import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setStatus(
      `Thank you, ${formData.name}! Your form was submitted for this demo.`
    );

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <section className="contact">
      <div className="container">
        <strong><h1>Contact Us</h1></strong>

        <p className="section-intro">
          Have questions or feedback? We'd love to hear from you.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Enter your name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>

          {status && (
            <p className="form-status" role="status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}