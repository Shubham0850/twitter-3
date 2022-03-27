import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: "8w9brjmm",
  dataset: 'production',
  apiVersion: 'v1',
  token: "skNx3hMNYQ5o5MIfOAq3QOWfxgK4CdXMgPuKAUt6i7R0URzOE1erymVWRqbQZDd3br7Wo84NU2wFrKgIwsQrYvWFMZJmWuHgRi13DbNyGKJdyUQaNm0UqNqYrC8OnLNxHHUY6dT2KdIHe9cOtgDbmm72FZpX5QdgmXymiKohW4tYVWNSEsx5",
  useCdn: false,
})
