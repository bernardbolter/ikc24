import Nav from "@/components/Nav"
import Portfolio from "@/components/Portfolio"
import Footer from "@/components/Footer"

async function getPosts() {
  const query = `
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
    `;

  const res = await fetch("https://backend.ingakatcoleman.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 10}
  })

  const { data } = await res.json();

  return data.posts.nodes;
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <section className="ikc-container">
      <Nav />
      <Portfolio projects={posts} />
      <Footer />
    </section>
  )
}