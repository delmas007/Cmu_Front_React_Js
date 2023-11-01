import {AuthenticationContext} from "../../Context/Context";
import {useContext} from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {utilisateurApi} from "../../Api/ApiUtilisateur";


const Login = () => {
    const [authState,setAuthState] = useContext(AuthenticationContext);
    const {register,handleSubmit,formState:{errors}}
        =useForm({defaultValues:{id:"",password:""}})
    const navigate =useNavigate()

    const handleLogin = (dataForm)=>{
        utilisateurApi().connexionUtilisateur()
    }
    return (
        <div className="">
            <div className=" flex flex-col justify-center min-h-screen ">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-[#a5e194] lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-center text-[#a5e194]">Connexion</h1>
                <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
                    <div>
                        <label className="label">
                            <span className="text-base text-[#a5e194] label-text">Username</span>
                        </label>
                        <input type="text" placeholder="Email Address" className="w-full bg-[#a5e194] input input-bordered"
                               {...register("id",{required:'username est obligatoire'})}
                        />
                        <span className={"text-danger"}>{errors.id?.message}</span>
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
                        <button className="btn btn-block border-[#a5e194] text-[#a5e194] bg-slate-50 mt-5">Login</button>
                    </div>
                </form>
            </div>
            </div>
            {/*Qu'est-ce que le Lorem Ipsum?*/}
            {/*Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.*/}

            {/*Pourquoi l'utiliser?*/}
            {/*On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).*/}


            {/*D'où vient-il?*/}
            {/*Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.*/}

            {/*L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).*/}


        </div>
    )
}
export default Login
