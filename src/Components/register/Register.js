import "./register.css"
const Register =()=>{

    return(
        <div className="container">
            <h1>Welcome to the Register Form</h1>
            <div className="container__item">
                <form className="form">
                    <input type="input" className="form__field" placeholder="UserName" />
                    <button type="button" className="btn btn--primary btn--inside uppercase"> </button>
                    <br/>
                    <input type="input" className="form__field" placeholder="Repeat UserName" />

                    <button type="button" className="btn btn--primary btn--inside uppercase"> </button>
                    <br/>
                    <input type="password" className="form__field" placeholder="Password" />

                    <button type="button" className="btn btn--primary btn--inside uppercase"> </button>
                    <input type="password" className="form__field" placeholder="Repeat Password" />
                    <button type="button" className="btn btn--primary btn--inside uppercase"> </button>

                </form>

            </div>
            <br/>
            <button type="button" className="btn btn--primary btn--inside uppercase submit-btn">Register</button>
        </div>
    )
}
export default Register