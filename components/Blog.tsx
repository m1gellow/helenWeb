import React from 'react'
import SectionName from './SectionName'
import BlogCard from './BlogCard'
import SearchForm from './SearchForm'
import { BlogPost } from '@/lib/types'

interface Blog{
  posts: BlogPost[]
}

const Blog: React.FC<Blog> = async(props) => {

  const {posts} = props
  

  return (
    <div className='max-w-screen-2xl mx-auto px-4  flex-center w-full sectionMargins'>
      <div className="flex-col flex  gap-[100px]">
         <div>
            <SectionName variant='center' sectionName='Blog' title='Посдение новости и проекты!' description='Enjoy team diversity and increase their networks among others people in various fields by'/>
        </div>
        <SearchForm/>
      <div className='flex flex-wrap gap-10 flex-center'>
          {posts.map((post, idx) => (
            <div key={idx}>
            <BlogCard slug={post.slug} imageUrl={post.image} title={post.title} buttonText={"read more"} description={post.smallDescription}/>
            </div>
         
          ))}
      </div>
      </div>
       
    </div>
  )
}

export default Blog