

<template>
    <body>
    <div class="container">
    
    <div class="container-fluid py-5 px-lg-5">
      <div class="row">
        <div class="col-lg-9">
          <div class="d-flex justify-content-between align-items-center flex-column flex-md-row mb-4">
            <div class="me-3">
              <p class="mb-3 mb-md-0"><strong><span class="h5 text-primary">[ {{searchKeyword}} ]</span></strong> &nbsp;키워드로 검색한 결과입니다.</p>
              <br>
              <p class="mb-3 mb-md-0"><strong><span class="h5 text-primary">{{productTotal}}</span></strong> &nbsp;results found</p>
            </div>
          </div>


          <div class="row">
            <!-- 상품 리스트 -->
            <section class="product-section">
              <div class="product-list row">
                <div class="col-sm-6 col-xl-4 mb-5 hover-animate" data-marker-id="59c0c8e33b1527bfe2abaf92" :value="searchProduct.productNo" :key="searchProduct.productNo" v-for="searchProduct in searchProducts">
                  <div @click="moveToProductDetailPage(searchProduct.productNo)" class="card h-100 border-0 shadow">
                    <div class="card-img-top overflow-hidden"><img class="img-fluid" v-bind:src="searchProduct.imgUrl" >
                      <hr>
                      <div class="card-img-overlay-bottom z-index-20">
                      </div>
                      <!-- <div class="card-img-overlay-top text-end"><a class="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                          <svg class="svg-icon text-white">
                            <use xlink:href="#heart-1"> </use>
                          </svg></a>
                      </div> -->
                    </div>
                    <div class="card-body d-flex align-items-center">
                      <div class="w-100">
                        <br>
                        <h3 class="mb-5" style="text-align: center;">{{ searchProduct.productName }}</h3>
                        <!-- <div class="d-flex card-subtitle mb-3">
                          <p class="flex-grow-1 mb-0 text-muted text-sm">Private room</p>
                          <p class="flex-shrink-1 mb-0 card-stars text-xs text-end"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i>
                          </p>
                        </div> -->
                        <p class="card-text text-muted">기능&nbsp;&nbsp;&nbsp;&nbsp;<span class="h5 text-primary">{{ searchProduct.productFunction }}</span></p>
                        <p class="card-text text-muted">색상&nbsp;&nbsp;&nbsp;&nbsp;<span class="h5 text-primary">{{ searchProduct.productColor }}</span></p>
                        <br>
                        <hr>
                        <p class="card-text text-muted" style="text-align: right;">구매가격&nbsp;&nbsp;&nbsp;&nbsp;<span class="h5 text-primary">{{ searchProduct.productPrice.toLocaleString() }}&nbsp;원</span></p>
                        <p class="card-text text-muted" style="text-align: right;">렌탈가격&nbsp;<span class="h5 text-primary">~월&nbsp;{{ searchProduct.productRentalPrice.toLocaleString() }}&nbsp;원</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>
      </div>
    </div>
  </div>
</div>

   
  </body>

  </template>

<script>

import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    //let productList = ref(null);
    const productTotal = ref(0);
    const route = useRoute();
    const router = useRouter();
    const bestProduct = ref('');
    const bestProducts = ref([]);
    const searchProduct = ref('');
    const searchProducts = ref([]);

    //const searchKeyword = route.params.searchKeyword;
    const searchKeyword = route.query.searchKeyword;
    console.log("searchKeyword : "+searchKeyword);

    const getSearchProductList = async() => {
      console.log("검색 상품 받아와??");
      const res = await axios.get('/product/search/' +searchKeyword);
      console.log(res.data);
      searchProducts.value = res.data;
      productTotal.value = searchProducts.value.length;
    }
    

    const getBestProductList = async() => {
      console.log("베스트 상품 받아와??");
      const res = await axios.get('/product/best');
      console.log(res.data);
      bestProducts.value = res.data;
    }

    onMounted(() => {
      getSearchProductList();
      getBestProductList();
    });

    const moveToProductDetailPage = (p) => {
      console.log("param : " + p);
      router.push({
        name: 'ProductDetail',
        query: {
          pno: p
        }
      });
    }

  return {
    //productList,
    productTotal,
    searchProduct,
    searchProducts,
    searchKeyword,
    route,
    router,
    bestProduct,
    bestProducts,
    moveToProductDetailPage,
  }

  }
}

</script>

<style>

</style>