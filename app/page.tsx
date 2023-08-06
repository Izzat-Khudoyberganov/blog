"use client";
import Link from "next/link";
import { styled } from "styled-components";

export default function Home() {
    return (
        <MainContents>
            <Link href='/about'>About</Link>
        </MainContents>
    );
}

const Title = styled.h1`
    font-size: 50px;
    color: red;
    line-height: 120%;
`;

const MainContents = styled.main`
    background-color: #000;
    width: 100vw;
    height: 100%;
`;
