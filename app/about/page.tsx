import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Men haqimda",
    description:
        "Khudoyberganov Izzatning blog sahifasi | Dasturlash | Frontend | Next js",
};

const About = () => {
    return (
        <div>
            <h2 className='title'>About Page</h2>
            <Link href={"/"}>Home</Link>
        </div>
    );
};

export default About;
