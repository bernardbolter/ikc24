import Nav from "@/components/Nav"
import Project from "@/components/Project"
import Footer from "@/components/Footer"

async function getProject(slug) {
    const query = `
    {
        post(id: "${slug}", idType: SLUG) {
                title
                categories {
                    nodes {
                        name
                    }
                }
                content(format: RENDERED)
                projects {
                subtitle
                projectImage1 {
                    node {
                        srcSet(size: LARGE)
                        sourceUrl(size: MEDIUM_LARGE)
                    }
                }
                projectImage10 {
                    node {
                        srcSet(size: LARGE)
                    }
                }
                projectImage2 {
                    node {
                        srcSet(size: LARGE)
                    }
                }
                projectImage3 {
                    node {
                        srcSet(size: LARGE)
                    }
                }
                projectImage4 {
                    node {
                        srcSet(size: LARGE)
                    }
                }
                projectImage5 {
                    node {
                        srcSet(size: LARGE)
                    }
                }
                projectImage6 {
                    node {
                        srcSet(size: LARGE)
                    }
                }
                projectImage7 {
                    node {
                        srcSet(size: LARGE)
                    }
                }
                projectImage8 {
                    node {
                        srcSet(size: LARGE)
                    }
                }
                projectImage9 {
                    node {
                        srcSet(size: LARGE)
                    }
                }
            }
          }
      }
    `;

  const res = await fetch("https://backend.ingakatcoleman.com/graphql/", {
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

export default async function ProjectPage({params}) {
const { slug } = params
const project = await getProject(slug)

  return (
    <section className="ikc-container">
        <Nav />
        <Project project={project.post} />
        <Footer />
    </section>
  )
}

export async function generateStaticParams() {
    const query = `
        {
            posts(first: 1000) {
                nodes {
                    slug
                }
            }
        }
    `
    const res = await fetch("https://backend.ingakatcoleman.com/graphql/", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({ query })
    })

    const { data } = await res.json()
  
    return data.posts.nodes.map((post) => ({
      slug: post.slug,
    }))
}