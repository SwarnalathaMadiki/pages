import { Link } from 'react-router-dom';
export function Menu(){
    return(
        <div>
            <Link to="/register">Registration page</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}