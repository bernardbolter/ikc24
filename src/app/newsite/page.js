"use client"

import Nav from "@/components/Nav"
import Portfolio from "@/components/Portfolio"
import Footer from "@/components/Footer"

const Home = () => {
    return (
        <section className="ikc-container">
            <Nav />
            <Portfolio />
            <Footer />
        </section>
    )
}

export default Home