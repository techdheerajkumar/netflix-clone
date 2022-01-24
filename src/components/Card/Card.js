import './card.css';

export default function Card() {
    return (
        <div className = "card">
            <div className="card-details">
                <h3>Title of movie</h3>
                <button className="btn btn-danger" id="watchNow">Watch Now</button>
            </div>
        </div>
    );
}
