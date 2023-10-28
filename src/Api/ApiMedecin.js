
export function medecinApi(http){
    return{
        modifierDossier : (dossier)=>{
            return http.put(`/modifier`,dossier)
        },
        consulterDossier : (numeroCmu)=>{
            return http.get(`/consulter?numeroCmu=${numeroCmu}`)
        },
        faireConsultation : (numeroCmu,consultation)=>{
            return http.post(`/consultation?numeroCmu=${numeroCmu}`,consultation)
        }
    }
}