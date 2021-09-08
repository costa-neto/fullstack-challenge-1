<template>
  <v-card
    class="mx-auto my-0"
  >

    <v-toolbar
      color="indigo"
      dark
    >

      <v-toolbar-title>Products</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="product in products"
          :key="product.id"
          :cols="4"
        >
          <v-card @click="viewProduct(product.id)" elevation="10" shaped>
            <v-img
              :src="getFilePath(product.image)"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
            </v-img>

            <v-card-actions>
              <v-col cols="8">
                <p class="text-h1 text--primary">{{product.shortDescription}}</p>
              </v-col>
              <v-spacer></v-spacer>
              <v-title>R${{product.price}}</v-title>

            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  import {ALL_PRODUCTS_QUERY} from '../constants/graphql'

  export default {
    name: 'ProductList',
    data () {
      return {
        products: [],
        loading: 0
      }
    },
    computed: {
        productsByCategory(){
            function groupBy(xs, prop) {
                var grouped = {};
                for (var i=0; i<xs.length; i++) {
                    var p = xs[i][prop];
                    if (!grouped[p]) { grouped[p] = []; }
                    grouped[p].push(xs[i]);
                }
                return grouped;
            }
            return groupBy(this.products, "category");
        }
    },
    methods: {
        viewProduct(productId){
            this.$router.push(`product/${productId}`);
        },
        getFilePath(imageName){
          return require(`@/assets/images/${imageName}`);
        }
    },
    apollo: {
      products: {
        query: ALL_PRODUCTS_QUERY
      }
    }
  }
</script>