
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { buttonVariants } from '@/lib/types';



interface LinkButtonProps{
    href?: string;
    text: string;
    variant: buttonVariants;
}

const LinkButton: React.FC<LinkButtonProps> = ({href, text, variant}) => {
 
    if(href){
        return (
            <Link href={href}>
            <Button variant={variant}>{text}</Button>
            </Link>
        )
    }else{
        return (
            <Button variant={variant}>{text}</Button>
        )
    }

}

export default LinkButton