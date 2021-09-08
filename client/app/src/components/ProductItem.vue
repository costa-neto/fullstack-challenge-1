<template>
  <v-card
      class="mx-auto"
    >
  
      <v-container>
        <v-row dense>
          <v-col cols="6">
            <v-img :src="getFilePath(productDetails.image)"></v-img>
          </v-col>
  
          <v-col
            cols="6"
          >
            <v-card
              class="my-auto w-100"
              cols="12"
            >
                <div>
                  
                  <h1
                    class="display-2 font-weight-bold mb-3"
                  >{{productDetails.shortDescription}}</h1>
                  <div class="mx-lg-auto">{{productDetails.description}}</div>
  
                  <v-chip
                    color="purple"
                    outlined
                    pill
                  >{{productDetails.category}}</v-chip>
                  <v-card-actions>
                    <v-btn
                      class="ml-2 mt-5"
                      outlined
                      rounded
                      small
                    >
                      COMPRAR
                    </v-btn>
                  </v-card-actions>
                </div>
  
                
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
</template>

<script>
import { PRODUCT_DETAILS_QUERY } from '../constants/graphql';
  export default {
    name: 'ProductItem',
    data () {
      return {
        productDetails: {},
        productId: this.$route.params.id
      }
    },
    computed: {
        
    },
    methods: {
        getFilePath(imageName){
          return require(`@/assets/images/${imageName}`);
        }
    },
    mounted(){
      console.log(this.productId)
    },
    apollo: {
      productDetails: {
        query: PRODUCT_DETAILS_QUERY,
        variables() {
          return {
            id: this.productId
          }
        },
        fetchPolicy: 'cache-and-network',
        
      },
    }
  }
</script>