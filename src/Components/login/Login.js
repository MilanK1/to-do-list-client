import "./login.css"
const Login =()=>{

    return(
        <div className="container">
            <h1>Welcome to the Login Form</h1>
            <div className="container__item">
                <form className="form">
                    <input type="input" className="form__field" placeholder="UserName" />
                    <button type="button" className="btn btn--primary btn--inside uppercase"> </button>
                    <input type="password" className="form__field" placeholder="Password" />
                    <button type="button" className="btn btn--primary btn--inside uppercase"> </button>

                </form>

            </div>
            <br/>
            <button type="button" className="btn btn--primary btn--inside uppercase submit-btn">Login</button>
        </div>
    )
}
export default Login