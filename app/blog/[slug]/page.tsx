import React, { FC } from "react";
import { notFound } from "next/navigation";
import { allDocs } from "../../../.contentlayer/generated";
import { Mdx } from "@/components/mdx/mdx";

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
    return <Mdx code={doc.body.code} />;
};

export default page;
