

export function patientApi(http){
    return{
        voirConsultation : (numero_CMU)=>{
            return http.get(`/voirConsultation?numero_CMU=${numero_CMU}`)
        }
    }
}