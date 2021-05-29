import { Product } from "./types"
import { Basket } from "./types"

const API_URL =
  "https://cors-anywhere.herokuapp.com/https://ioan-4r7sk1yfwf2q.runkit.sh/"

export const getProducts = (abortController: any): Promise<Product[]> => {
  return fetch(`${API_URL}/products`, { signal: abortController.signal }).then(
    (response) => response.json()
  )
}

export const getBasket = (abortController: any): Promise<Basket> => {
  return fetch(`${API_URL}/basket`, { signal: abortController.signal }).then(
    (response) => response.json()
  )
}

export const addToBasket = (id: number, data: Product): Promise<void> =>
  fetch(`${API_URL}/basket/${id}`, {
    method: "POST",
    body: JSON.stringify(data),
  }).then((resp) => {
    if (!resp.ok) return Promise.reject(resp.statusText)
  })

export const removeFromBasket = (id: number): Promise<void> =>
  fetch(`${API_URL}/basket/${id}`, { method: "DELETE" }).then((resp) => {
    if (!resp.ok) return Promise.reject(resp.statusText)
  })

export const increaseItemQuantity = (id: number): Promise<void> =>
  fetch(`${API_URL}/basket/${id}/increase`, { method: "PATCH" }).then(
    (resp) => {
      if (!resp.ok) return Promise.reject(resp.statusText)
    }
  )

export const decreaseItemQuantity = (id: number): Promise<void> =>
  fetch(`${API_URL}/basket/${id}/decrease`, { method: "PATCH" }).then(
    (resp) => {
      if (!resp.ok) return Promise.reject(resp.statusText)
    }
  )

export const getWishlist = (): Promise<Product[]> => {
  return fetch(`${API_URL}/wishlist`).then((response) => response.json())
}
