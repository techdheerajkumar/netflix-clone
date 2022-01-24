// import './full-width-image-text.css';

export default function FullWidthImageText() {
    return (
        <div className="fw-image-text">
            <img className="w-100" src={require("./dummy-cover.jpg")} />
            <div className="fw-text-content">
                <h1>Movie Title</h1>
                <p>Feel Good | Time/Duration</p>
                <a href="javascript:void(0)" className="watch-now btn btn-danger">Watch now</a>
            </div>
        </div>
    );
}
