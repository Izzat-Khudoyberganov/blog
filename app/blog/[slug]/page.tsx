import React from "react";
import { notFound } from "next/navigation";
import { allDocs } from "contentlayer/generated";
import Balancer from "react-wrap-balancer";
import { Metadata } from "next/types";
import { Mdx } from "components/mdx/mdx";

interface PageProps {
    params: {
        slug: string;
    };
}

async function getDocFromParams(slug: string) {
    const doc = allDocs.find((doc) => doc.slugAsParams === slug);

    if (!doc) {
        notFound();
    }

    return doc;
}

const page = async ({ params }: PageProps) => {
    const doc = await getDocFromParams(params.slug);

    return (
        <section className='container'>
            <h1 className='font-bold text-2xl tracking-tighter max-w-[650px]'>
                <Balancer>{doc.description}</Balancer>
            </h1>
            <Mdx code={doc.body.code} />
        </section>
    );
};

export default page;
