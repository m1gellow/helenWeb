import React from 'react'
import SectionName from './SectionName'
import BlogCard from './BlogCard'


const posts = [
  {title: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", buttonText: "Читать"},
  {title: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", buttonText: "Читать"},
  {title: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", buttonText: "Читать"},
]

const Blog = () => {
  return (
    <div className='max-w-screen-2xl mx-auto px-4  flex-center w-full sectionMargins'>
      <div className="flex-col flex  gap-[100px]">
         <div>
            <SectionName variant='center' sectionName='Blog' title='Посдение новости и проекты!' description='Enjoy team diversity and increase their networks among others people in various fields by'/>
        </div>
      <div className='flex flex-wrap gap-10 flex-center'>
          {posts.map((post, idx) => (
            <div key={idx}>
            <BlogCard title={post.title} buttonText={post.buttonText} description={post.description}/>
            </div>
         
          ))}
      </div>
      </div>
       
    </div>
  )
}

export default Blog