import axios from "axios";

export function utilisateurApi(){
    return{
        connexionUtilisateur : (username,password)=>{
            return axios.post(`http://localhost:9090/v1/cmu/connexion?username=${username}&password=${password}`)
        },
        inscriptionUtilisateur : (role,utilisateur)=>{
            return axios.post(`http://localhost:9090/v1/cmu/utilisateur?role=${role}`,utilisateur)
        }
    }
}