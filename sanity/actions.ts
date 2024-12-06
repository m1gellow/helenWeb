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
       "image": headerImage.asset->url,
}[0]`
       )
       return headerData;
    }catch(err){
        console.log(err)
    }
}


export const getAboutMeData = async() => {
    try{
       const aboutData = await client.fetch(
        groq`
        *[_type == "about"]{
sectionTitle,
  sectionDescription,
  "image": aboutImage.asset->url,
    title,
  description,
  aboutButton,
  ButtonLink
}[0]`
       )
       return aboutData;
    }catch(err){
        console.log(err)
    }
}
export const getSkillsData = async() => {
    try{
       const skillsData = await client.fetch(
        groq`
        *[_type == "skills"]{
sectionTitle,
  sectionDescription,
   "image": skillsImage.asset->url,
  title,
  description,
  Button,
  ButtonLink
}[0]`
       )
       return skillsData;
    }catch(err){
        console.log(err)
    }
}


export const getSkillCards = async() => {
    try{
       const skillsCards = await client.fetch(
        groq`
        
       *[_type == "skills"]{

        skillsCards[]->{
            CardTitle,
            CardDescription
        }
    }[0]`
       )
       return skillsCards;
    }catch(err){
        console.log(err)
    }
}






