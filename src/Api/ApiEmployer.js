

export function employerApi(http){
    return{
        supprimerDossier : (numeroCmu)=>{
            return http.delete(`/supprimer?numeroCmu=${numeroCmu}`)
        },
        creeDossier : (dossier)=>{
            return http.post(`/creeDossier`,dossier)
        }
    }
}