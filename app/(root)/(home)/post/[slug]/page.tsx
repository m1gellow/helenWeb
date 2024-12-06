import Image from 'next/image';
import React from 'react';
import Helen from '../../../../Helen.jpg'
import { Button } from '@/components/ui/button';




const page = async() => {
  
    return (
    <div className="flex-center max-w-screen-2xl mt-[200px] px-4  w-full mx-auto">
      
        <div className='flex flex-col gap-12 items-center justify-center'>
            <span className='base-regular'>Blog</span>
            <h1 className='heading1'>World’s Most Famous App
            Developers and Designers.</h1>
            <div className="relative w-full h-[700px] "> 
            <Image
              src={Helen}
              alt="My skills image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
            <div className='max-w-[1000px]'>
                <p className='base-regular'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam provident, eum earum tenetur, nisi nihil unde necessitatibus ipsa quae vero est laboriosam dolore iste molestias exercitationem libero et pariatur accusamus ab minus praesentium? Corporis recusandae tempora fugiat aliquam laboriosam maxime in voluptatum obcaecati ut omnis temporibus repellendus asperiores ducimus, et cum molestiae dicta repellat? Nihil beatae magni alias dolorum mollitia!
                </p>
            </div>
            <Button  variant={"default"} >Связаться</Button>
        </div>
    </div>
  )
}

export default page