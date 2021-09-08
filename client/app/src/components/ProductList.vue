<template>
  <v-card
    class="mx-auto my-0 product"
  >
    <header>
      <h1 class="product__title"><span class="product__title--top">FULL RESTAURANT</span><span class="product__title--bottom">products</span></h1>
    </header>
    <v-container align="center" fluid>
      <v-row dense>
        <v-col
          v-for="product in products"
          :key="product.id"
          :cols="12"
        >
          <v-card @click="viewProduct(product.id)" elevation="10" shaped> 
             <v-article class="product__item">
               <v-avatar>
              <v-img :src="getFilePath(product.image)" class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px" :alt="product.shortDescription"></v-img>
              </v-avatar>
              <span class="product__description">{{product.shortDescription}}</span>
              <span class="product__price"><span>$</span>{{product.price}}</span>
            </v-article>
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
<style scoped>
.product {
	 max-width: 600px;
	 width: 100%;
	 border-radius: 12px;
}
 .product header {
	 --start: 15%;
	 height: 130px;
	 background-image: repeating-radial-gradient(circle at var(--start), transparent 0%, transparent 10%, rgba(126, 54, 219, 0.383) 10%, rgba(91, 19, 173, 0.33) 17%), linear-gradient(to right, #985bfa, #6e1fd6);
	 color: #fff;
	 position: relative;
	 border-radius: 12px 12px 0 0;
	 overflow: hidden;
}
 .product header .product__title {
	 position: absolute;
	 z-index: 2;
	 top: 50%;
	 right: calc(var(--start) * .75);
	 transform: translateY(-50%);
	 text-transform: uppercase;
	 margin: 0;
}
 .product header .product__title span {
	 display: block;
}
 .product header .product__title--top {
	 font-size: 24px;
	 font-weight: 700;
	 letter-spacing: 6.5px;
}
 .product header .product__title--bottom {
	 font-size: 13px;
	 font-weight: 500;
	 letter-spacing: 3.55px;
	 opacity: 0.65;
	 transform: translateY(-2px);
}
 .product header .product__icon {
	 fill: #fff;
	 opacity: 0.35;
	 width: 50px;
	 position: absolute;
	 top: 50%;
	 left: var(--start);
	 transform: translate(-50%, -50%);
}
 .product__items {
	 background-color: #fff;
	 border-radius: 0 0 12px 12px;
	 padding: 15px 15px 20px;
	 display: grid;
	 row-gap: 8px;
}
 .product__item {
	 display: grid;
	 grid-template-columns: 1fr 3fr 1fr;
	 align-items: center;
	 padding: 10px 30px 10px 10px;
	 overflow: hidden;
	 border-radius: 10px;
	 box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
	 cursor: pointer;
	 transition: transform 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98), box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
	 background-color: #fff;
}
 .product__item:hover {
	 transform: scale(1.2);
	 box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
}
 .product__picture {
	 max-width: 100%;
	 width: 60px;
	 border-radius: 50%;
	 box-shadow: 0 0 0 10px #ebeef3, 0 0 0 22px #f3f4f6;
}
 .product__description {
	 color: #979cb0;
	 font-weight: 600;
	 font-size: 20px;
	 letter-spacing: 0.64px;
}
 .product__price {
	 color: #9c27b0;
	 font-weight: 700;
	 font-size: 32px;
	 text-align: right;
}
 .product__price > span {
	 opacity: 0.8;
	 font-weight: 600;
	 font-size: 20px;
	 margin-left: 3px;
}
 body {
	 margin: 0;
	 background-color: #eaeaea;
	 display: grid;
	 height: 100vh;
	 place-items: center;
	 font-family: 'Source Sans Pro', sans-serif;
}
 .product {
	 box-shadow: 0 0 40px -10px rgba(0, 0, 0, .4);
}
</style>