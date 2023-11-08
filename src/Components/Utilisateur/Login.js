import {AuthenticationContext} from "../../Context/Context";
import {useContext} from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {utilisateurApi} from "../../Api/ApiUtilisateur";
import {jwtDecode} from "jwt-decode";

const Login = () => {
    const [authState,setAuthState] = useContext(AuthenticationContext);
    const {register,handleSubmit,formState:{errors}}
        =useForm({defaultValues:{username:"",password:""}})
    const navigate =useNavigate()

    const handleLogin = (dataForm)=>{
        utilisateurApi().connexionUtilisateur(dataForm.username,dataForm.password)
            .then( resp =>{
                    // console.log(resp.data.accessToken)
                    const decodedJWT = jwtDecode(resp.data.accessToken)
                    console.log(decodedJWT)
                    setAuthState({...authState, isAuthenticated:true, username: decodedJWT.sub, roles:decodedJWT.scope, token : resp.data.accessToken});
                    if(authState.roles === "EMPLOYER"){

                    }
                    else if(authState.roles === "EMPLOYER"){

                    }
                    else {

                    }
                    navigate("employer/creeDossie")
                    console.log(authState)
                }
            ).catch(err=>{
            console.log(authState)
            console.log(err)
        })
    }
    return (
        <div className="">
            <div className=" flex flex-col justify-center min-h-screen ">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-[#a5e194] lg:max-w-lg">
                    {
                        authState && !(authState.isAuthenticated) && authState.errorMessage
                        && (
                            <div className={"alert alert-danger"}>
                                {authState.errorMessage}
                            </div>
                        )
                    }
                    <h1 className="text-3xl font-semibold text-center text-[#a5e194]">Connexion</h1>
                    <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
                        <div>
                            <label className="label">
                                <span className="text-base text-[#a5e194] label-text">Username</span>
                            </label>
                            <input type="text" placeholder="Email Address" className="w-full bg-[#a5e194] input input-bordered"
                                   {...register("username",{required:'username est obligatoire'})}
                            />
                            <span className={"text-danger"}>{errors.username?.message}</span>
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base text-[#a5e194] label-text">Password</span>
                            </label>
                            <input type="password"  placeholder="Enter Password"
                                   className="w-full input input-bordered bg-[#a5e194]"
                                   {...register("password",{required:'password est obligatoire'})}
                            />
                            <span className={"text-danger"}>{errors.password?.message}</span>
                        </div>
                        <div>
                            <button className="btn btn-block border-[#a5e194] text-[#a5e194]  mt-5" style={{backgroundColor:"#a5e194",borderColor:"#a5e194"}}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login
