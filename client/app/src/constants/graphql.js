import gql from 'graphql-tag'

// 2
export const ALL_PRODUCTS_QUERY = gql`
  query AllProductsQuery {
    products {
      id
      shortDescription
      price
      category
      image
    }
  }
`

export const PRODUCT_DETAILS_QUERY = gql`
  query ProductDetails($id: String!) {
    productDetails(id: $id) {
      id
      shortDescription
      description
      lastUpdate
      price
      category
      image
    }
  }
`