import { getStoredCart } from "./FakeDB"

const productsAndCartData = async () => {
  const productsData = await fetch('jobdata.json')
  const products = await productsData.json()

  const savedCart = getStoredCart()
  const initialCart = []
  for (const id in savedCart) {
    const foundProduct = products.find(product => product.id === id)
    if (foundProduct) {
      const quantity = savedCart[id]
      foundProduct.quantity = quantity
      initialCart.push(foundProduct)
    }
  }

  return { products, initialCart }
}
export default productsAndCartData;