<template>
    <body>
     <section class="d-flex align-items-center bg-cover" style="background-image: url(/../html/img/main3.jpg);">
       <div class="container py-6 py-lg-7 text-white overlay-content text-center"> 
         <div class="row">
           <div class="col-xl-10 mx-auto">
             <h1 class="display-3 fw-bold text-shadow">MetaWater Shop</h1>
             <p class="text-lg text-shadow">The Best nutrient is Clean Water. Find purifier will satisfy you</p>
           </div>
         </div>
       </div>
     </section>
     <section class="py-6 bg-gray-100"> 
       <div class="container">
         <div class="text-center pb-lg-4">
        

          
           <p class="subtitle text-secondary">Best Items 5</p>
           <h2 class="mb-5">베스트 상품 No.5</h2>
         </div>
       </div>
       <div class="container">
         <!-- Slider main container-->
         <div class="swiper-container swiper-container-mx-negative items-slider px-lg-5 pt-3">
           <!-- Additional required wrapper-->
           <div class="swiper-wrapper pb-5">
             <!-- Slides-->
           <div class="swiper-slide h-auto px-2" style="width:216px;" :value="bestProduct.productNo" :key="bestProduct.productNo" v-for="bestProduct in bestProducts">
             <!-- best item-->
             <div class="w-100 h-100 hover-animate" data-marker-id="59c0c8e33b1527bfe2abaf92">
               <div class="card h-100 border-0 shadow" @click="moveToProductDetailPage(bestProduct.productNo)">
                 <div class="card-img-top overflow-hidden bg-cover"><img class="img-fluid" v-bind:src="bestProduct.imgUrl" > 
                  <hr>
                 </div>
                 <div class="card-body">
                   <p class="text-sm text-muted text-uppercase mb-1" style="text-align: center;"><span class="text-primary"><strong>{{ bestProduct.productName }}</strong></span></p>
                   <br>
                   <p class="text-sm mb-0" style="text-align: center;">구매&nbsp;&nbsp;&nbsp;{{ bestProduct.productPrice.toLocaleString() }}원</p>
                   <p class="text-sm mb-0" style="text-align: center;">렌탈&nbsp;&nbsp;월&nbsp;&nbsp;{{ bestProduct.productRentalPrice.toLocaleString() }}원</p>
                 </div>
               </div>
             </div>
           </div>
           </div>
         </div>
         <div class="text-center mt-5"><router-link class="btn btn-outline-primary" :to="{name: 'ProductList'}">See all Items</router-link></div>
       </div>
     </section>

     <!-- Divider Section-->
     <section class="py-6 py-lg-7 position-relative dark-overlay"><img class="bg-image" src="/../html/img/main2.jpg" alt="">
       <div class="container">
         <div class="overlay-content text-white py-lg-5 text-center">
           <p class="subtitle text-white letter-spacing-4 mb-4">Find the best Items</p>
           <h3 class="display-3 fw-bold text-serif text-shadow mb-5">Clean & Safety</h3>
           <p class="lead text-shadow mb-5">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</p>
           <router-link class="btn btn-primary" :to="{name: 'ProductList'}">상품 둘러보기</router-link>
         </div>
       </div>
     </section>


 </body>
 </template>
 
 <script>
 import axios from 'axios';
 import { ref, onMounted } from 'vue';
 import { useRoute, useRouter } from 'vue-router';

 export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const bestProduct = ref('');
    const bestProducts = ref([]);

    const getBestProductList = async() => {
    console.log("베스트 상품 받아와??");
    const res = await axios.get('/product/best');
    console.log(res.data);
    bestProducts.value = res.data;
  }

  const moveToProductDetailPage = (p) => {
    console.log("param : " + p);
    router.push({
      name: 'ProductDetail',
      query: {
        pno: p
      }
    });
  }

  onMounted(() => {
    getBestProductList();
  });

  return {
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