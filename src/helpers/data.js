import axios from 'axios'

export const getPosts = async () => {
    console.log("getting posts")

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
        return result.data.data.posts.nodes
    })
}