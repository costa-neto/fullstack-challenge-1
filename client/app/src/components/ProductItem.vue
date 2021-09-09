<template>
  <v-card class="mx-auto">
    <section id="welcome" class="hide-overflow">
      <v-layout>
        <v-flex hidden-sm-and-down md6>
          <v-img
            :src="getFilePath(productDetails.image)"
            height="100vh"
          />
        </v-flex>

        <v-flex xs12 md6 my-auto align-content-space-between fill-height layout :pa-5="$vuetify.breakpoint.smAndDown" wrap>
          <v-layout align-center justify-center >
            <v-flex xs10 md >
              <h3 class="display-2 v-heading mb-3 font-weight-light">{{productDetails.shortDescription}}</h3>
              <p class="title font-weight-light" style="line-height: 1.7 !important; ">
                {{productDetails.description}}
              </p>
              <div class="my-4 display-1 v-heading mb-3 font-weight-light">
                $ • {{productDetails.price}}
              </div>
              <v-chip color="purple" outlined pill >{{productDetails.category}}</v-chip>
                <v-btn @click="bought = true" class="mx-2" fab dark large color="purple">
                  <v-icon dark>
                    mdi-cart
                  </v-icon>
                </v-btn>
                <v-snackbar v-model="bought">
                  Parabéns por comprar um {{productDetails.shortDescription}}

                  <template v-slot:action="{ attrs }">
                    <v-btn color="pink" text v-bind="attrs" @click="bought = false"
                    >
                      Fechar
                    </v-btn>
                  </template>
                </v-snackbar>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </section>
  </v-card>
</template>

<script>
import { PRODUCT_DETAILS_QUERY } from '../constants/graphql';
  export default {
    name: 'ProductItem',
    data () {
      return {
        productDetails: {},
        productId: this.$route.params.id,
        bought: false
      }
    },
    computed: {
        
    },
    methods: {
        getFilePath(imageName){
          return require(`@/assets/images/${imageName}`);
        }
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