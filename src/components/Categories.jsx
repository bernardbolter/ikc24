import { useContext } from "react"
import { KatContext } from "@/providers/KatProvider"

const Categories = ({ categories }) => {
    const [kat, setKat] = useContext(KatContext)

    return (
        <section className="categories-container">
            <p onClick={() => setKat(state => ({...state, currentCategory: ''}))}>
                All
            </p>
            {categories.map(category => (
                <p
                    key={category}
                    onClick={() => setKat(state => ({...state, currentCategory: category}))}        
                >{category}</p>
            ))}
        </section>
    )
}

export default Categories