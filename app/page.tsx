import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Khudoyberganov`s blog",
    description:
        "Khudoyberganov Izzatning blog sahifasi | Dasturlash | Frontend | Next js",
};
export default function Home() {
    return (
        <div className='container'>
            <h1 className='text-3xl font-style: italic; underline'>
                Hello world!
            </h1>
        </div>
    );
}
