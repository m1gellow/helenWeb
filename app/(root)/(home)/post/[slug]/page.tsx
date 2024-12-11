import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import { getPostDataByTag } from '@/sanity/actions';
import { BlogPost } from '@/lib/types';
import { PortableText } from 'next-sanity';
import { Metadata } from 'next';


type tParams = Promise<{slug: string}>

export async function generateMetadata(props: {
  params: tParams;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const data: BlogPost = await getPostDataByTag(slug);

  return {
    title: data.title,
    description: data.smallDescription,
  };
}

type Props = Promise<{slug: string}>

export const revalidate = 30;

const page = async({params}: {params: Props}) => {
  const {slug} = await params;
  const data: BlogPost = await getPostDataByTag(slug)

    return (
    <div className="flex-center max-w-screen-2xl mt-[200px] px-4  w-full mx-auto">
      
        <div className='flex flex-col gap-12 items-center justify-center'>
            <span className='base-regular'>Blog</span>
            <h1 className='heading1'>{data.title}</h1>
            <div className="relative w-full h-[700px] "> 
            <Image
              src={data.image}
              alt="My skills image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
            <div className='max-w-[1000px]'>
                <h3 className='base-regular prose lg:prose-xl'>
                    <PortableText value={data.content}/>
                </h3>
            </div>
            <Button  variant={"default"} >Связаться</Button>
        </div>
    </div>
  )
}

export default page