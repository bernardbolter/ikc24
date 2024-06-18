"use client"

import { useState, useEffect, createContext } from 'react'

export const KatContext = createContext()

const KatProvider = ({ children }) => {
    const [kat, setKat] = useState({
        portfolio: [],
        filteredPortfolio: [],
        categories: [],
        about: '',
        project: [],
        currentCategory: ''
    })

    useEffect(() => {
        if (kat.portfolio.length !== 0) {
            var catArray = []
            kat.portfolio.map(port => {
                port.categories.nodes.map(cat => {
                    if (catArray.includes(cat.name)) {
                    } else {
                        catArray.push(cat.name)
                    }
                })
            })
            setKat(state => ({  ...state,  categories: catArray}))
        }
    }, [kat.portfolio])

    useEffect(() => {
        console.log("category: ", kat.currentCategory)
    }, [kat.currentCategory])

    return (
        <KatContext.Provider
        value={[kat, setKat]}
        >
            {children}
        </KatContext.Provider>
    )
}

export default KatProvider