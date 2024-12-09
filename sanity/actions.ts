import { groq } from "next-sanity"
import { client } from "./lib/client"
import { buildQuery } from "./utils";

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
  skillsCards[]->{
            CardTitle,
            CardDescription
        },
  Button,
  ButtonLink
}[0]`
       )
       return skillsData;
    }catch(err){
        console.log(err)
    }
}


export const getReviewData = async() => {
  try{
    const reviewData = await client.fetch(
      groq`
      *[_type == "review"]{
  name,
    reviewContent,
    "image":photo.asset->url
}
      `
    )
    return reviewData;
 }catch(err){
     console.log(err)
 }
}


interface GetResorcesParams{
  query: string;
  page: string;
}


export const getBlogs = async(params: GetResorcesParams) =>{
  const {query, page} = params;

  try{
    const blogs = await client.fetch(
      groq`${buildQuery({
        type: 'blog',
        query,
        page: parseInt(page),
      })}{
       title,
     "slug":slug.current,
    "image": image.asset->url,
      smallDescription,
      content
      }`
    );

    return blogs
  }catch(err){
    console.log(err)
  }

}
export const getPostDataByTag = async(slug: string) =>{
  try{
    const blogs = await client.fetch(
      groq`*[_type == "blog" && slug.current == "${slug}"]{
    title,
     "slug":slug.current,
    "image": image.asset->url,
      smallDescription,
      content
}[0]`
    );

    return blogs
  }catch(err){
    console.log(err)
  }

}





