import { useEffect, useState } from "react"

import Container from "react-bootstrap/Container"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"

import data from "../data/products.json"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const get = new Promise((resolve) => {
      setTimeout(() => resolve(data), 2000)
    })

    get.then((data) => {
      if (!id) {
        setProducts(data)
      } else {
        const filtered = data.filter((p) => p.category === id)
        setProducts(filtered)
      }
    })
  }, [id])

  return (
    <Container className="mt-4">
      <h1>{greeting}</h1>
      {console.log(products)}
      <ItemList products={products} />
    </Container>
  )
}

export default ItemListContainer
