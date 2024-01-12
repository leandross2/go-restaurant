import { RequestInit } from "next/dist/server/web/spec-extension/request"

interface ResponseFetchApi<T=any>{
  body: T
  status?:number
}

interface FetchApiProps{
  url: string
  options?:RequestInit
}

export const fetchApi = async <T>({ url, options }:FetchApiProps):Promise<ResponseFetchApi<T>> =>{
  try{
    const response = await fetch(`http://localhost:3000/api${url}`, options)
    const data = await response.json()

    return {
      status: response.status,
      body: data
    } 

  }catch(err: any){
    console.error({ err })
    return {
      status: err.status,
      body: err.message
    }
  }
}