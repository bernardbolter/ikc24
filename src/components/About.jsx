"use client"
import { useEffect, useContext } from "react"
import { KatContext } from "@/providers/KatProvider"
import Loading from "./Loading"

const About = ({ about }) => {
    console.log(about)
    const [kat, setKat] = useContext(KatContext)

    useEffect(() => {
        if (kat.about.length === 0) {
            setKat(state => ({ ...state, about: about }))
        }
    }, [kat.about])
    
    return (
        <section className="about-container">
            {kat.about.length === 0 ? <Loading /> : <div dangerouslySetInnerHTML={{__html: kat.about}} />}
        </section>
    )
}

export default About