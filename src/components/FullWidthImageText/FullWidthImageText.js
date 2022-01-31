// import './full-width-image-text.css';

export default function FullWidthImageText({title}) {
    return (
        <div className="fw-image-text">
            <img className="w-100" src={require("./dummy-cover.jpg")} />
            <div className="fw-text-content position-absolute">
                <h1>{title}</h1>
                <p>Feel Good | Time/Duration</p>
                <a href="#" className="watch-now btn btn-danger">Watch nows</a>
            </div>
        </div>
    );
}
