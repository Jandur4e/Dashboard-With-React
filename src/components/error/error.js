import { Link, useRouteError } from "react-router-dom";
import "../../css/error.css"

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <div className="error-content">
                {/* <img src="http://salehriaz.com/404Page/img/404.svg" width="300px" /> */}
                <p className="error-p">Oops! Looks like you took a wrong turn.</p>
                <Link className="link-back" to={"/"}>Go Back!!!</Link>
            </div>
            <img class="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" />
            <svg className="error-moon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fill-opacity="1" d="M0,96L96,64L192,192L288,192L384,160L480,256L576,0L672,256L768,320L864,128L960,224L1056,288L1152,320L1248,0L1344,320L1440,64L1440,320L1344,320L1248,320L1152,320L1056,320L960,320L864,320L768,320L672,320L576,320L480,320L384,320L288,320L192,320L96,320L0,320Z"></path></svg>
        </div>
    );
}

export default ErrorPage;