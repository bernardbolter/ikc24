"use client"

import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

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

    console.log("port: ", kat.portfolio)

    useEffect(() => {
        console.log('provider')
        if (kat.portfolio.length === 0) {
            axios({
                url: 'https://backend.ingakatcoleman.com/graphql',
                method: 'post',
                data: {
                    query: `
                    {
                      posts(first: 1000) {
                        nodes {
                          slug
                          categories {
                            nodes {
                              name
                            }
                          }
                          projects {
                            subtitle
                            tileImage {
                              node {
                                srcSet(size: MEDIUM_LARGE)
                                sourceUrl(size: MEDIUM_LARGE)
                              }
                            }
                          }
                          title(format: RENDERED)
                        }
                      }
                    }
                  `
                }
            }).then((result) => {
                console.log(result.data)
                setKat(state => ({
                    ...state,
                    portfolio: result.data.data.posts.nodes,
                    filteredPortfolio: result.data.data.posts.nodes
                }))
            })
        }
    }, [kat.portfolio])

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