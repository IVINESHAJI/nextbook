import Err from './images/404_Error.jpg';

const NotFound = () => {
    return (
        <div className="d-flex justify-content-center">
            <img src={ Err } alt="404 Error" />
        </div>
    );
}

export default NotFound;