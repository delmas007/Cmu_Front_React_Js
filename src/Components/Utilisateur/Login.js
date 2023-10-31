

const Login = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <form className="w-25">
                <h1 className="h3 mb-3 fw-normal " style={{color:"#198754"}}>Please sign in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput" style={{color:"#198754"}}>Email address</label>
                </div>

                <div className="form-floating mt-3 ">
                    <input type="password" className="form-control" style={{color:"#198754"}} id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword" style={{color:"#198754"}}>Password</label>
                </div>
                <button className="btn w-100 py-2 mt-4" style={{background :"#198754",color:"white"}} type="submit">Sign in</button>
            </form>


        </div>
    )
}
export default Login
