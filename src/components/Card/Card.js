import "./card.css";

export default function Card(props) {
  return (
    <div className="card position-relative">
      <div className="card-details">
        <figure className="w-100">
          <img
            src={`https://image.tmdb.org/t/p/w342/${props.imgPath}`}
            alt={props.title}
          />
        </figure>
        <div className="card-details__content position-absolute text-center px-3 py-5 d-flex justify-content-end flex-column">
          <h3 className="text-white card-title">{props.title}</h3>
          <button className="btn btn-danger" id="watchNow">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
}
