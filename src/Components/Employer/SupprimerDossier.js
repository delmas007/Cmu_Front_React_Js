import {useForm} from "react-hook-form";
import {useContext, useState} from "react";
import {AuthenticationContext} from "../../Context/Context";
import {useHttpClient} from "../../Api/Interceptors";
import {employerApi} from "../../Api/ApiEmployer";

const SupprimerDossier = () =>{
    const {register,handleSubmit,formState:{errors}}=useForm()
    const [authState,setAuthState] = useContext(AuthenticationContext);
    let httpClient = useHttpClient(authState.token)
    const dossier = employerApi(httpClient);
    const [alertState, setAlertState] = useState({
        show : false,
        title:"",
        close : handleCloseModal
    });
    const supp = (dataForm)=>{
        dossier.supprimerDossier(dataForm)
            .then(resp=>{
                setAlertState({
                    ...alertState, show: true,
                    title: "Supprimer dossier"
                })
            })
    }
    function handleCloseModal(){
        setAlertState({...alertState, show: false});
    }
    return (
        <>
            <div className={" fex flex-col mb-[518px]"}>
                <div className={" flex justify-center"}>
                    <p className="text-[#a5e194]  inline-block   text-6xl">Veillez entrer le numero cmu du dossier a supprimer</p>
                </div>

                <div className={"w-full flex justify-center mt-20"}>
                    <form className="w-full max-w-sm" onSubmit={handleSubmit(supp)}>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-[#a5e194] font-bold md:text-right mb-1 md:mb-0 pr-4"
                                       htmlFor="inline-full-name">
                                    Numero Cmu
                                </label>
                            </div>
                            <div className="md:w-[700px]">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-[#dddada] rounded w-full py-2 px-4 text-[#a5e194] leading-tight focus:outline-none focus:bg-white focus:border-[#a5e194]"
                                    id="inline-full-name" type="text" placeholder={"52bfd7cf-a451-4779-8b10-b47db12cdc3f"}
                                    {...register("numeroCmu", {required:"Veillez entrer le numero cmu"})}/>
                            </div>
                            <span className={"text-danger"}>
                            {errors.numeroCmu.message}
                          </span>
                        </div>

                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3"></div>
                            <div className="md:w-2/3">
                                <button
                                    className="shadow bg-[#dddada] hover:bg-[#a5e194] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                    type="button">
                                    Entrer
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SupprimerDossier;