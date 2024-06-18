"use client"

import Link from "next/link"
import IKClogo from "@/svg/ikc_logo"

const Nav = () => {
    return (
        <section className="nav-container">
            <Link 
                href="/"
                className="nav-logo"
            >
                <IKClogo />
            </Link>
            <div className="nav-links">
                <Link href="/">
                    Portfolio
                </Link>
                <Link href="about">
                    About
                </Link>
            </div>
        </section>
    )
}

export default Nav