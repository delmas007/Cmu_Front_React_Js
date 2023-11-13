import {useForm} from "react-hook-form";
import {useContext, useState} from "react";
import {AuthenticationContext} from "../../Context/Context";
import {useHttpClient} from "../../Api/Interceptors";
import {employerApi} from "../../Api/ApiEmployer";
import CustomModalAlert from "../Modal/CustomModalAlert";


const CreeDossier = () => {
    const [alertState, setAlertState] = useState({
        show : false,
        title:"",
        message:"",
        close : handleCloseModal
    });
    const {register,handleSubmit,formState:{errors}}=useForm()
    const [authState,setAuthState] = useContext(AuthenticationContext);
    let httpClient = useHttpClient(authState.token)
    const dossier = employerApi(httpClient);

    function handleCloseModal(){
        setAlertState({...alertState, show: false});
    }
    const submit = (dataForm)=>{
        const { id, ...rest } = dataForm;
        rest.masculin === "on" ? rest.masculin = true : rest.masculin = false;
        rest.masculin === "on" ? rest.feminin = true : rest.feminin = false;
        rest.masculin === "on" ? rest.enceinte = true : rest.enceinte = false;
        console.log(id)
        console.log(rest)
        dossier.creeDossier(rest,id)
            .then(resp =>{
                setAlertState({
                    ...alertState, show: true,
                    message: JSON.stringify(resp.data),
                    title: "Dossier Cree"
                })
            })
            .catch(err => {
                console.log('AxiosError:', err)
            })
    }


    return (
        <div className={"h-screen"}>
            <section className="max-w-4xl p-6 mx-auto bg-[#a5e194] rounded-md shadow-md dark:bg-[#a5e194] my-20 ">
                <h1 className="text-xl font-bold text-white capitalize dark:text-white">Dossier Patient</h1>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                        <div>
                            <label className="text-white dark:text-gray-200" form="username">identifiant</label>
                            <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                   {...register("id", {required:"veiller rentrer un identifiant"})}/>
                            <span className={"text-danger"}>
                            {errors.id?.message}
                          </span>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" form="username">Ville</label>
                            <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                   {...register("ville", {required:"veiller rentrer une ville"})}/>
                            <span className={"text-danger"}>
                            {errors.ville?.message}
                          </span>
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" form="emailAddress">Age</label>
                            <input id="emailAddress" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                   {...register("age", {required:"veiller rentrer l'age"})}/>
                            <span className={"text-danger"}>
                            {errors.age?.message}
                          </span>
                        </div>
                        <div className="form-control h-full">
                            <label className="label cursor-pointer">
                                <span className="label-text">Homme</span>
                            </label>
                            <input type="radio" name="radio-8" className="radio radio-[#a5e194] checked:bg-[#a5e194]"
                                   {...register("masculin")}/>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Femme</span>
                            </label>
                            <input type="radio" name="radio-8" className="radio radio-[#a5e194] checked:bg-[#a5e194]"
                                   {...register("masculin")}/>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Femme enceinte</span>
                            </label>
                            <input type="radio" name="radio-8" className="radio radio-[#a5e194]  checked:bg-[#a5e194]"
                                   {...register("masculin")}/>
                        </div>

                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-[#FFFFFF] rounded-md hover:bg-[#a5e194] focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>

            </section>
            <CustomModalAlert
                show={alertState.show}
                close={alertState.close}
                messsage={alertState.message}
                title={alertState.title}
            >

            </CustomModalAlert>

        </div>
    )
}
export default CreeDossier
