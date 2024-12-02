import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Teacher from "../app/Teacher.jpg"
import Image from "next/image";
import { Button } from "./ui/button";


interface BlogCardProps {
    imageUrl?: string;
    title: string;
    description: string;
    buttonText: string;
    onButtonClick?: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, buttonText }) => {
    return (
        <Card className="blogCard p-4 ">
            <Image alt="blog image" src={Teacher} className="rounded-[35px]"/>
            <CardHeader className="p-4">
                <CardTitle className="heading2">{title}</CardTitle>
                <CardDescription className="body-text line-clamp-3">{description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center p-4">
              <Button>{buttonText}</Button>
            </CardFooter>
        </Card>
    );
};

export default BlogCard;
