import {useForm} from "react-hook-form";
import {useContext} from "react";
import {AuthenticationContext} from "../../Context/Context";
import {useHttpClient} from "../../Api/Interceptors";
import {employerApi} from "../../Api/ApiEmployer";


const CreeDossier = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const [authState,setAuthState] = useContext(AuthenticationContext);
    let httpClient = useHttpClient(authState.token)
    const dossier = employerApi(httpClient);

    const submit = (dataForm)=>{
        const { id, ...rest } = dataForm;
        rest.masculin === "on" ? rest.masculin = true : rest.masculin = false;
        rest.masculin === "on" ? rest.feminin = true : rest.feminin = false;
        rest.masculin === "on" ? rest.enceinte = true : rest.enceinte = false;
        console.log(id)
        console.log(rest)
        dossier.creeDossier(rest,id)
            .then(resp =>{
                console.log(resp +"reussite")
            })
            .catch(err => {
                console.log('AxiosError:', err)
            })
    }


    return (
        <>
            <section className="max-w-4xl p-6 mx-auto bg-[#a5e194] rounded-md shadow-md dark:bg-[#a5e194] my-20 mb-[320px]">
                <h1 className="text-xl font-bold text-white capitalize dark:text-white">Dossier Patient</h1>
                <form onClick={handleSubmit(submit)}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white dark:text-gray-200" form="username">identifiant</label>
                            <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                   {...register("id", {required:"veiller rentrer un identifiant"})}/>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" form="username">Ville</label>
                            <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                   {...register("ville", {required:"veiller rentrer une ville"})}/>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" form="emailAddress">Age</label>
                            <input id="emailAddress" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                   {...register("age", {required:"veiller rentrer l'age"})}/>
                        </div>
                        <div className="form-control h-full">
                            <label className="label cursor-pointer">
                                <span className="label-text">Homme</span>
                                <input type="radio" name="radio-10"  className="radio checked:bg-[#a5e194] " defaultChecked={true}
                                    {...register("masculin")}/>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Femme</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-[#a5e194]"
                                    {...register("feminin")}/>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Femme enceinte</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-[#a5e194]"
                                    {...register("enceinte")}/>
                            </label>
                        </div>

                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-[#FFFFFF] rounded-md hover:bg-[#a5e194] focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>

            </section>


        </>
    )
}
export default CreeDossier
