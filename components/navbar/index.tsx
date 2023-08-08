"use client";
import Link from "next/link";
import { navLinks } from "./data";
import style from "./style.module.css";

export default function Navbar() {
    return (
        <div className={style.nav}>
            {navLinks.map((el) => (
                <Link href={el.href} key={el.id}>
                    {el.text}
                </Link>
            ))}
        </div>
    );
}
