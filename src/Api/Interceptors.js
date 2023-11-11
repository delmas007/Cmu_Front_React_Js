import axios from "axios";


export function useHttpClient(token){
    const http=axios.create({
        baseURL : "http://localhost:9090/v1/cmu",
        headers : {
            Accept : "application/json",
        }
    });

    http.interceptors.request.use((request)=>{
        console.log("**** request intercept *****");
        console.log(request);
        request.headers.Authorization=`Bearer ${token}`;
        console.log(request.headers)
        return request;
    },(err)=>{
        console.log(err);
        return (Promise.reject(err));
    });
    http.interceptors.response.use((response)=>{
        console.log("**** response intercept *****");
        console.log(response);
        return response
    },(err)=>{
        console.log(err);
        Promise.reject(err);
    });
    return http;
}