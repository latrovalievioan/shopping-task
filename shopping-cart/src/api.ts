import { Product } from "./types"

const API_URL =
  "https://cors-anywhere.herokuapp.com/https://ioan-4r7sk1yfwf2q.runkit.sh/"

export const getProducts = (abortController: any): Promise<Product[]> => {
  return fetch(`${API_URL}/products`, { signal: abortController.signal }).then(
    (response) => response.json()
  )
}

export const getWishlist = (): Promise<Product[]> => {
  return fetch(`${API_URL}/wishlist`).then((response) => response.json())
}

export const addToBasket = (id: number): Promise<void> =>
  fetch(`${API_URL}/basket/${id}`, { method: "POST" }).then((resp) => {
    if (!resp.ok) return Promise.reject(resp.statusText)
  })
