const Product = require("../../models/products")

module.exports = {
  products: async () => {
    try {
      const productsFetched = await Product.find()
      return productsFetched.map(product => {
        return {
          ...product._doc,
        }
      })
    } catch (error) {
      throw error
    }
  },

  productDetails: async ({id}) => {
    try {
      const product = await Product.findOne({id: id})
      return product
    } catch (error) {
      throw error
    }
  }

}