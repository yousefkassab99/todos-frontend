export const url = "http://localhost:3000/api"

export const setHeaders =()=>{
    const header = {
        headers: {
            "x-auth-token" : localStorage.getItem("token")
        }
    }
    return header
}