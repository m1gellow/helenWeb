import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface BlogCardProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  buttonText,
  slug,
  imageUrl
}) => {
  return (
    <Card className="blogCard p-4 flex-col flex-center">
      <Image alt="blog image" src={imageUrl} width={400} loading="lazy" height={400} objectFit="cover" className="rounded-[35px]" />
      <CardHeader className="p-4">
        <CardTitle className="heading2">{title}</CardTitle>
        <CardDescription className="body-text line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-center p-4">
        <Link href={`/post/${slug}`}>
          {" "}
          <Button>{buttonText}</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
