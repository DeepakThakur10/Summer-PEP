import "./cardComponent.css"
function CardComponent({ image, title, instructor, price, level }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>Instructor: {instructor}</p>
      <p>Price: ₹{price}</p>
      <p>Level: {level}</p>
    </div>
  );
}

export default CardComponent;