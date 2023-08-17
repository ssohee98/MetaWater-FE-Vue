<template>
  <body>
  <div class="container">
  <div class="container-fluid pt-5 pb-3 border-bottom px-lg-5" style=" width: 120%; margin-left: -10%;">
    <div class="row">
    <section class="py-6 mb-5 bg-gray-100"> 
     <div class="container">
       <div class="text-center pb-lg-4">
         <p class="subtitle text-secondary">Best Items 5</p>
         <h2 class="mb-5">베스트 상품</h2>
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
     </div>
   </section>
    </div>
    <div class="row">
      <!-- 왼쪽 사이드 바 필터 -->
      <div class="col-lg-3 pt-3">
        <form class="pe-xl-3" action="#" autocomplete="off">
          <div class="mb-4">
            <label class="form-label" for="form_dates">Dates</label>
            <div class="datepicker-container datepicker-container-left">
              <input class="form-control" type="text" name="bookingDate" id="form_dates" placeholder="Choose your dates">
            </div>
          </div>
          <div class="mb-4">
            <label class="form-label" for="form_guests">기능</label>
            <select class="selectpicker form-control" name="guests" id="form_guests" multiple data-style="btn-selectpicker" title=" ">
              <option value="guests_0">냉정수기</option>
              <option value="guests_1">냉온정수기</option>
              <option value="guests_2">얼음</option>
              <option value="guests_3">탄산</option>
              <option value="guests_4">정수전용</option>
            </select>
          </div>
          <div class="mb-4">
            <label class="form-label" for="form_type">설치 타입</label>
            <select class="selectpicker form-control" name="type" id="form_type" multiple data-style="btn-selectpicker" title="">
              <option value="type_0">데스크탑</option>
              <option value="type_1">언더싱크</option>
              <option value="type_2">스탠드</option>
            </select>
          </div>

            <div class="mb-4">
              <button class="btn btn-primary" type="submit"><i class="fas fa-filter me-1"></i>Filter</button>
            </div>
        </form>
      </div>
      <div class="col-lg-9">
        <div class="d-flex justify-content-between align-items-center flex-column flex-md-row mb-4">
          <div class="me-3">
            <p class="mb-3 mb-md-0" v-if="searchKeyword"><strong><span class="h5 text-primary">[{{searchKeyword}}]</span></strong> &nbsp;키워드 검색 결과</p>
            <p class="mb-3 mb-md-0"><strong><span class="h5 text-primary">{{productTotal}}</span></strong> &nbsp;results found</p>
          </div>
          <div>
            <label class="form-label me-2" for="form_sort">Sort by</label>
            <select class="selectpicker" name="sort" id="form_sort" data-style="btn-selectpicker" title="" v-model="sortBy">
              <option value="pSales">판매량순</option>
              <option value="pDate">신상품순</option>
              <option value="rPrice">낮은 가격순</option>
              <option value="hPrice">높은 가격순</option>
            </select>
          </div> 
        </div>

        <div class="row">
          <!-- 상품 리스트 -->
          <section class="product-section">
            <div class="product-list row">
              <div class="col-sm-6 col-xl-4 mb-5 hover-animate" data-marker-id="59c0c8e33b1527bfe2abaf92" :value="product.productNo" :key="product.productNo" v-for="product in sortedProducts">
                <div @click="moveToProductDetailPage(product.productNo)" class="card h-100 border-0 shadow">
                  <div class="card-img-top overflow-hidden"><img class="img-fluid" v-bind:src="product.imgUrl" >
                    <hr>
                    <div class="card-img-overlay-bottom z-index-20">
                    </div>
                  </div>
                  <div class="card-body d-flex align-items-center">
                    <div class="w-100">
                      <br>
                      <h3 class="mb-5" style="text-align: center;">{{ product.productName }}</h3>
                      <p class="card-text text-muted">기능&nbsp;&nbsp;&nbsp;&nbsp;<span class="h5 text-primary">{{ product.productFunction }}</span></p>
                      <p class="card-text text-muted">색상&nbsp;&nbsp;&nbsp;&nbsp;<span class="h5 text-primary">{{ product.productColor }}</span></p>
                      <br>
                      <hr>
                      <p class="card-text text-muted" style="text-align: right;">구매가격&nbsp;&nbsp;&nbsp;&nbsp;<span class="h5 text-primary">{{ product.productPrice.toLocaleString() }}&nbsp;원</span></p>
                      <p class="card-text text-muted" style="text-align: right;">렌탈가격&nbsp;<span class="h5 text-primary">~월&nbsp;{{ product.productRentalPrice.toLocaleString() }}&nbsp;원</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
        <!-- Pagination -->
        <!-- <nav aria-label="Page navigation example">
          <ul class="pagination pagination-template d-flex justify-content-center">
            <li class="page-item"><a class="page-link" href="#"> <i class="fa fa-angle-left"></i></a></li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#"> <i class="fa fa-angle-right"></i></a></li>
          </ul>
        </nav> -->
      </div>
    </div>
  </div>
</div>
  </div>

 
  </body>
</template>

<script>
import axios from 'axios';
import { ref, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  data() {
    return {
      sortBy: '',   // 정렬 방식 선택을 위한 변수
      products: [], // 불러온 상품 목록
    };
  },
  computed: {   // 선택한 정렬방식에 따라 정렬하고 return
    sortedProducts() {
      if (this.sortBy === 'pSales') {
        return this.products.sort((a, b) => b.productSales - a.productSales);
      } else if (this.sortBy === 'pDate') {
        return this.products.sort((a, b) => new Date(b.regDate) - new Date(a.regDate));
      } else if (this.sortBy === 'rPrice') {
        return this.products.sort((a, b) => a.productPrice - b.productPrice);
      } else if (this.sortBy === 'hPrice') {
        return this.products.sort((a, b) => b.productPrice - a.productPrice);
      } else {
        return this.products;
      }
    },
  },
  watch: {  // 정렬된 값에 따라 sortedProducts 바꿔주기
    sortBy() {
      this.sortedProducts;
    },
  },

setup(props) {
  //let productList = ref(null);
  //const productTotal = ref(0);
  const route = useRoute();
  const router = useRouter();
  const product = ref('');
  //const products = ref([]);
  const bestProduct = ref('');
  const bestProducts = ref([]);
  //const searchKeyword = ref('');
  
  //헤더 검색창에서 넣은 searchKeyword가 있으면 쿼리로 받아서 해당 상품 조회
  const searchKeyword = ref(route.query.searchKeyword || '');
    const products = ref([]);
    const productTotal = ref(0);

    const getProductList = async() => {
      console.log("검색 상품 받아와??");
      const res = await axios.get('/product/search/' +searchKeyword.value);
      products.value = res.data;
      productTotal.value = products.value.length;
      console.log(res.data);
    };

    //watch 속성으로 searchKeyword가가 있으면 상품개수 바꾸고
    watch(searchKeyword, () => {
      getProductList();
    });

    //searchKeyword가 없으면 모든 상품 조회
    if (searchKeyword.value) {
      getProductList();
    } else {
      const getProductList = async() => {
        console.log("상품 받아와??");
        const res = await axios.get('/product/products');
        console.log(res.data);
        products.value = res.data;
        productTotal.value = products.value.length;
      };
      getProductList();
    }

  // if(route.query.searchKeyword) {
  //   searchKeyword.value = route.query.searchKeyword;
  //   const getProductList = async() => {
  //     console.log("검색 상품 받아와??");
  //     const res = await axios.get('/product/search/' +searchKeyword.value);
  //     products.value = res.data;
  //     productTotal.value = products.value.rength;
  //     console.log(res.data);
  //   }; getProductList();
  // } else {
  //   const getProductList = async() => {
  //     console.log("상품 받아와??");
  //     const res = await axios.get('/product/products');
  //     console.log(res.data);
  //     products.value = res.data;
  //     productTotal.value = products.value.length;
  //   }; getProductList();
  // }

  // const getProductList = async() => {
  //   console.log("상품 받아와??");
  //   const res = await axios.get('/product/products');
  //   console.log(res.data);
  //   products.value = res.data;
  //   productTotal.value = products.value.length;
  // }

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
    //getProductList();
    getBestProductList();
  });

return {
  //productList,
  productTotal,
  products,
  product,
  route,
  router,
  bestProduct,
  bestProducts,
  moveToProductDetailPage,
  searchKeyword,
}

}
}

</script>

<style>

</style>