import { NavLink } from "react-router-dom";

function ErrorPage() {
    return (
        <div>
            <h1 style={{textAlign: 'center', marginTop: '10vh'}}>
                Please check your url
            </h1>
            <NavLink to='/' style={{textAlign: 'center', marginTop: '10vh'}}>
                <h2>Click here to back to Home Page</h2>
            </NavLink>
        </div>
    )
}
export default ErrorPage;