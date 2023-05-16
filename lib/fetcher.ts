function fetcher<T>(route: string): Promise<T> {
  /* our token cookie gets sent with this request */
  return fetch(route)
    .then(r => r.ok && r.json())
    .then(user => user || null)
}

export default fetcher
