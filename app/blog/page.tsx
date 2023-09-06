import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { allDocs } from "contentlayer/generated";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Khudoyberganov Izzatning blog sahifasi | Dasturlash | Frontend | Next js",
};
const BlogPage = () => {
    return (
        <div className='container'>
            {allDocs.map((post) => (
                <Link
                    key={post.slugAsParams}
                    className='flex flex-col space-y-1 mb-4'
                    href={`/blog/${post.slugAsParams}`}
                >
                    <div className='w-full flex flex-col'>
                        <p className='text-neutral-900 dark:text-neutral-100 tracking-tight'>
                            {post.title}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default BlogPage;
