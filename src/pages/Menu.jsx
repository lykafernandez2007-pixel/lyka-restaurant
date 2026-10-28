const dishes = [
  {
    name: "Grilled Salmon",
    price: "₱200.00",
    image: "/img/grilled-salmon.jpg",
    description:
      "Tender salmon grilled to perfection for a flavorful and satisfying seafood meal."
  },
  {
    name: "Juicy Shrimps",
    price: "₱180.00",
    image: "/img/juicy-shrimps.jpg",
    description:
      "Succulent shrimps prepared with savory seasoning to bring out their delicious natural flavor."
  },
  {
    name: "Calamari Rings",
    price: "₱170.00",
    image: "/img/calamari-rings.jpg",
    description:
      "Golden calamari rings with a crispy coating and a tender, delicious center."
  }
];

export default function Menu() {
  return (
    <section className="menu">
      <div className="container">
        <strong><h1>Our Menu</h1></strong>

        <div className="menu-section">
          <strong><h2>Main Courses</h2></strong>

          <ul>
            {dishes.map((dish) => (
              <li className="menu-item" key={dish.name}>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="dish-img"
                />

                <div className="details">
                  <div className="title-row">
                    <span className="dish">{dish.name}</span>
                    <span className="price">{dish.price}</span>
                  </div>

                  <p>{dish.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}