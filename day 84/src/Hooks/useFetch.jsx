import { useEffect, useState } from "react"

export function useFetch(url) {
    const [data,setData]=useState([])

    useEffect(()=>{
        const getData=async()=>{

            const res=await fetch(url)
            const apiData=await res.json()
            setData(apiData)
        }
        getData()
    },[])

  return [data]
 
}
