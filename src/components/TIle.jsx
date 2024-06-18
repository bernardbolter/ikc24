import Image from "next/image"
import Link from "next/link"

const Tile = ({ tile }) => {
    console.log("tile: ", tile)
    const imageLoader = tile.projects.tileImage.node.sourceUrl

    return (
        <Link 
            className="tile-container"
            href={`/${tile.slug}`}
        >
            <h1>{tile.title}</h1>
            <Image
                src={imageLoader}
                alt={`Tile image from ${tile.title}`}
                fill={true}
                className="tile-image"
            />
            <p>{tile.projects.subtitle}</p>
            <div class="tile-categories">
                {tile.categories.nodes.map(cat => (
                    <p key={cat.name}>{cat.name}</p>
                ))}
            </div>
        </Link>
    )
}

export default Tile