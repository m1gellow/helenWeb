"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery } from "@/sanity/utils";

const SearchForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
        let newUrl = "";

        if(search) {
          newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: 'query',
            value: search
          })
        } else {
          newUrl = formUrlQuery({
              params: searchParams.toString(),
              keysToRemove: ['query'],
              key: 'newKey', // Replace with the actual key you want to set
              value: 'newValue' // Replace with the actual value you want to set
     
          })
        }

      router.push(newUrl, {scroll: false})
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return (
    <form className="flex-center mx-auto mt-10 w-full" onSubmit={handleSubmit}>
      <label className="flex-center relative w-full max-w-3xl">
        <Input
          placeholder="Искать по названию"
          value={search}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </form>
  );
};

export default SearchForm;
