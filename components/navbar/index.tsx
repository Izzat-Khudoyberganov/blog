"use client";
import Link from "next/link";
import style from "./style.module.css";
import { navLinks } from "./data";

export default function Navbar() {
    return (
        <div className={style.nav}>
            {navLinks.map((el) => (
                <Link href={el.href} key={el.id} className='nav-links'>
                    {el.text}
                </Link>
            ))}
        </div>
    );
}
