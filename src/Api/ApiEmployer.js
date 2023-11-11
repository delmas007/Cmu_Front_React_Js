

export function employerApi(http){
    return{
        supprimerDossier : (numeroCmu)=>{
            return http.delete(`/supprimer?numeroCmu=${numeroCmu}`)
        },
        creeDossier : (dossier,id)=>{
            return http.post(`/creeDossier?id=${id}`,dossier)
        }
    }
}