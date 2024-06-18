"use client"

import { useEffect, useContext,  } from 'react'
import { KatContext } from '@/providers/KatProvider'

import Categories from './Categories'
import Tile from './TIle'
import Loading from './Loading'

const Portfolio = ({ projects }) => {
    const [kat, setKat] = useContext(KatContext)

    useEffect(() => {
        if (kat.portfolio.length === 0) {
            setKat(state => ({
                ...state, 
                portfolio: projects,
                filteredPortfolio: projects
            }))
        }
    }, [kat.portfolio])

    return (
        <section className="portfolio-container">
            {kat.categories.length !== 0 && <Categories categories={kat.categories} />}
            {kat.filteredPortfolio.length === 0 ? (
                <Loading />
            ) : (
                <div className="projects-container">
                    {kat.filteredPortfolio.map(tile => (
                        <Tile tile={tile} key={tile.slug} />
                    ))}
                </div>
            )}  
        </section>
    )
}

export default Portfolio