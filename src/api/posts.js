export const getPosts = async (queryParams) => {
  const params = new URLSearchParams(queryParams)
  const res = await fetch(`/api/v1/posts?${params}`)
  if (!res.ok) {
    throw new Error(`Unable to load posts (${res.status})`)
  }
  return res.json()
}

export const createPost = async (post) => {
  const res = await fetch('/api/v1/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  })
  if (!res.ok) {
    throw new Error(`Unable to create post (${res.status})`)
  }
  return res.json()
}
