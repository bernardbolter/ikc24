import Nav from "@/components/Nav"
import About from "@/components/About"
import Footer from "@/components/Footer"

async function getAbout() {
    const query = `
        {
            page(id: "cG9zdDo0Mg==") {
                content(format: RENDERED)
              }
        }
    `;

    const res = await fetch("https://backend.ingakatcoleman.com/graphql", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({ query }),
        next: { revalidate: 10}
    })

    const { data } = await res.json()

    return data
}

export default async function AboutPage() {
    const about = await getAbout()
    console.log("ab: ", about)

    return (
        <section className="ikc-container">
            <Nav />
            <About about={about.page.content} />
            <Footer />
        </section>
    )
}