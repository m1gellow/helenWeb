import { groq } from "next-sanity"
import { client } from "./lib/client"

export const getHeaderData = async() => {
    try{
       const headerData = await client.fetch(
        groq`*[_type == "header"]{
  greeting,
    title,
    headerDescription,
    mainButtonText,
    secondaryButtonText,
}[0]`
       )
       return headerData;
    }catch(err){
        console.log(err)
    }
}