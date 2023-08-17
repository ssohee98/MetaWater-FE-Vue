<template>
    <section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 me-lg-auto mt-5" style="text-align:left">
                <MypageSidebar></MypageSidebar>
            </div>
            <div class="col-lg-9 ps-lg-5 mt-5">
                <div class> 
                  <div class="text-block" style="text-align:left">
                    <h1 class="hero-heading mb-0">{{memName}}님,</h1>
                    <h1 class="hero-heading mb-0">안녕하세요!</h1>
                    <p class="mt-2 text-muted">내게 맞는 제품관리 서비스와 활동 내역을 확인하세요.</p>
                    <!-- <h4 class="mt-5 mb-3 ml-3">사용중인 제품{{ myProducts.value.length() }}개</h4> -->
                    <div class="p-4 pt-5 shadow ms-lg-4 rounded" style="background-color:#F2F4F5; min-height:250px; 
                                                                    display: flex; align-items: center;">
                      <!-- 사용중인 제품이 없을 경우 -->
                      <div style="text-align:center; margin:auto;" v-if="state.myProducts == null">
                        <i class="fas fa-exclamation-circle fa-4x mb-4" style="color:gray;"></i>
                        <h6>사용중인 제품이 없습니다.</h6>
                      </div>
                      <div class="row">
                        <!-- place item-->
                        <div class="d-flex">
                            <h6 class="mb-2 mr-2">
                                제품 선택
                            </h6>
                            <h6 class="text-primary">사용중인 제품</h6>
                        </div>
                            <div class="col-sm-6 col-lg-4 mb-30px hover-animate" v-for="(product, index) in state.myProducts" :key="index" data-marker-id="59c0c8e33b1527bfe2abaf92">
                                <div class="card h-100 border-0 shadow">
                                    <div class="card-img-top overflow-hidden"> <img class="img-fluid" v-bind:src="product.imgUrl" alt="Modern, Well-Appointed Room"/><a class="tile-link" @click="moveToMyOrder(product.orderNo)"></a>
                                        <div class="card-img-overlay-bottom z-index-20">
                                        </div>
                                        <div class="card-img-overlay-top text-end"></div>
                                    </div>
                                    <div class="card-body d-flex">
                                        <div class="w-100">
                                            <!-- <h6 class="card-title"><a class="text-decoration-none text-dark" href="detail-rooms.html">{{product.productName}}</a></h6>
                                            <h6 class="flex-grow-1 mb-0 text-muted text-sm">{{product.productModel}}</h6> -->
                                            <h6 >{{product.productName}}</h6>
                                            <h6 class="text-muted text-sm">{{product.productModel}}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
import axios from "axios";
import {reactive} from "vue";
import { useRoute, useRouter } from 'vue-router';
import MypageSidebar from "./MypageSidebar.vue";

export default {
    setup() {
        const route = useRoute();
        const router = useRouter();
        const state = reactive({
            myProducts: [],
        });
        const moveToMyOrder = (orderNo) => {
            console.log("orderNo : " + orderNo);
            router.push({
                name: "MyProduct",
                params: {
                    orderNo: orderNo
                }
            });
        };
        
        // let memNo = 4;
        const memNo = sessionStorage.getItem('memNo');
        console.log("sessionStorage에서 가져온 값 : " + memNo);
        // memNo 임의 설정 1

        const memName = sessionStorage.getItem('memName');
      console.log("회원 이름 : " + memName);

        axios.get(`/mypage/myorder/myproducts/${memNo}`).then(({ data }) => {
            state.myProducts = data;
            console.log(" 사용중인 제품 데이터 : " + data);
        }).catch((error) => {
            console.error("API 요청 실패", error);
        });
        return { state, moveToMyOrder, memName };
    },
    components: { MypageSidebar }
}

</script>

<style>

</style>