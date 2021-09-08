import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/ProductList.vue'
import ProductItem from '@/components/ProductItem.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Product List',
      component: ProductList
    },
    {
      path: '/product/:id',
      name: 'Product Page',
      component: ProductItem
    }
  ]
})
