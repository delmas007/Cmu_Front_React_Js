

export function utilisateurApi(http){
    return{
        connexionUtilisateur : (username,password)=>{
            return http.post(`/connexion?username=${username}&password=${password}`)
        },
        inscriptionUtilisateur : (role,utilisateur)=>{
            return http.post(`/utilisateur?role=${role}`,utilisateur)
        }
    }
}