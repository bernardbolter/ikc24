const API_URL = process.env.GRAPHQL_API_URL;

export async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();

  if (json.errors) {
    console.log(json.errors);
    console.log("error details", query, variables);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getLatestPostsLinks() {
    const data = await fetchAPI(`
            query LatestPostsLinks {
                posts {
                    nodes {
                        title
                        slug
                    }
                }
            }
        `);
    return data?.posts;
}