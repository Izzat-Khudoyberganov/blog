"use client";
import Link from "next/link";
import style from "./style.module.css";

export default function Navbar() {
    return (
        <div className={style.nav}>
            <Link className='nav-links' href='/'>
                Home
            </Link>
            <Link className='nav-links' href='/blog'>
                Blog
            </Link>
            <Link className='nav-links' href='/quiz'>
                Quiz
            </Link>
            <Link className='nav-links' href='/about'>
                Guestbook
            </Link>
        </div>
    );
}
