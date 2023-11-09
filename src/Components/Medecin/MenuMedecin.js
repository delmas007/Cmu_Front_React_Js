import {useContext, useEffect} from "react";
import {AuthenticationContext} from "../../Context/Context";

const MenuMedecin = () => {
    const [authState]= useContext(AuthenticationContext);
    useEffect(()=>{
        console.log(authState)
    })
    return (
        <div className={"flex flex-row justify-center mb-[703px]"}>
            <p className="text-[#a5e194] text-center inline-block   text-7xl">Binvenue Mr  nous esperons que vous allez bien...</p>

        </div>
    )
}

export default MenuMedecin
