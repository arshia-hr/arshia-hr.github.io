import axios from "axios";

const client = axios.create({
    baseURL: 'http://localhost:8001/'
})
export async function getProduct() {
    const {data} = await client('/product')
   return data
}
export async function getSingleProduct(id: string  ){
    const {data} = await client(`/product/${id}`)
    return data
}
export async function getAuthentication(username:string,password:string){
    const {data} = await client({
        baseURL: '/login',
        method: 'post',
        data:{username: username,
        password: password}
    })
    return data
}