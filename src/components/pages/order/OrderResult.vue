<template>
  <body>
  <div class="progress rounded-0 sticky-top" style="height: 8px; top: 72px;">
    <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <section class="py-5 my-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <h1 class="h2 mb-5 text-bold"> 주문 확인 <span class="text-muted float-end">Step 3</span>      </h1>
          <div class="text-block"> 
            
            <!-- <h5 class="text-bold">계약자 정보</h5>
            <br>
            <div class="row mb-4" style="text-align: left;">
              <div class="col-sm-8 mx-3">
                <p class="my-0">{{detailOrder.member.memName}}</p>
                <p class="my-0">{{detailOrder.member.memPhone}}</p>
              </div>
            </div> -->

            <div class="row">
              <div class="col-sm-12">
                <h5 class="text-bold">계약자 정보</h5>
                <br>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <p class="text-sm">계약자</p>
                </div>
                <div class="col-sm-6">{{detailOrder.member.memName}}</div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <p class="text-sm">계약자 연락처</p>
                </div>
                <div class="col-sm-6">{{detailOrder.member.memPhone}}</div>
              </div>
            </div>

<!-- =============== -->
            <hr>
            <div class="row">
              <div class="col-sm-12">
                <h5 class="text-bold">설치/배송정보</h5>
                <br>
              </div>
              
              <div class="row row mb-4">
                <div class="col-sm-6">
                  <p class="text-sm">배송지</p>
                </div>
              <!-- <p class="col-sm mb-0">{{detailOrder.orderAddNumber}} | </p> -->
              <!-- <p class="col-sm mb-0">{{detailOrder.orderAddress}}</p> -->
              <!-- <p class="col-sm">{{detailOrder.orderAddDetail}}</p> -->
                <div class="col-sm-6">
                  <div>{{detailOrder.orderAddNumber}}</div>
                  <div>{{detailOrder.orderAddress}}</div>
                  <div>{{detailOrder.orderAddDetail}}</div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <p class="text-sm">인수자</p>
                </div>
                <div class="col-sm-6">{{detailOrder.orderName}}</div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <p class="text-sm">인수자 연락처</p>
                </div>
                <div class="col-sm-6">{{detailOrder.orderPhone}}</div>
              </div>

              <br>

              <div class="row">
                <div class="col-sm-6">
                  <p class="text-sm">설치제품</p>
                </div>
                <div class="col-sm-6">{{detailOrder.product.productName}}</div>
              </div>
         
              <div class="row">
                <div class="col-sm-6">
                  <p class="text-sm">설치희망일</p>
                </div>
                <div class="col-sm-6">{{new Date(detailOrder.deliveryDate).toLocaleDateString()}}</div>
                <div class="col-sm-6">
                  <p class="text-sm">설치희망시간</p>
                </div>
                <div class="col-sm-6">{{detailOrder.deliveryTime}}</div>
              </div>
            </div>
            <br>
            <hr/>

            <div class="row">
              <div class="col-sm-12">
                <h5 class="text-bold">구매금액 정보</h5>
                <br>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <p class="text-sm">결제수단</p>
                </div>
                <div class="col-sm-6">{{detailOrder.orderPay}}</div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <p class="text-sm">일시불액</p>
                </div>
                <div class="col-sm-6">{{detailOrder.orderPrice.toLocaleString() }} 원</div>
              </div>
            </div>

            <!-- <div class="row">
                <h5 class="text-bold">렌탈료 납부정보</h5>
                <br>
                <div class="col-sm-8">
                  <p class="col-sm mb-0">결제수단</p>
                </div>
                <div class="col-sm-4">{{detailOrder.orderPay}}</div>
                <div class="col-sm-8">
                  <p class="col-sm mb-0">청구금액</p>
                </div>
                <div class="col-sm-4">월 {{detailOrder.rentalPrice.toLocaleString() }} 원</div>
                <div class="col-sm-8">
                  <p class="col-sm">자동이체일</p>
                </div>
                <div class="col-sm-4">매월 {{detailOrder.rentalPayDate}}</div>
                <div class="col-sm-8">
                  <p class="col-sm">계약기간</p>
                </div>
                <div class="col-sm-4">{{detailOrder.rentalTerm}}년</div>
            </div> -->

          </div> 
          <!-- <div class="text-block"> -->
          
            <div class="row form-block flex-column flex-sm-row">
              <!-- <div class="col text-center text-sm-start"><a class="btn btn-link text-muted" href="user-booking-1.html"> <i class="fa-chevron-left fa me-2"></i>이전</a>
              </div> -->
              <div class="col text-center text-sm-end"><button class="btn btn-primary px-3" @click="order()">주문<i class="fa-chevron-right fa ms-2"></i></button></div>
        </div>
      <!-- </div> -->
      </div>
      
      <div class="col-lg-5 ps-xl-5">
            <div class="card border-0 shadow">
              <div class="card-body p-4">
                <div class="text pb-3">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="col-lg-12 col-6 px-1 mb-2"><img class="img-fluid" v-bind:src="detailOrder.product.imgUrl"></div>
                      <h4><strong>{{detailOrder.product.productName}}</strong></h4><br>
                      <h4 class="text-sm">모델명 {{ detailOrder.product.productModel }}</h4>
                      <h4 class="text-sm"><strong>구매</strong> |  {{ detailOrder.product.productFunction}} | {{ detailOrder.product.productColor }}</h4>
                    </div>
                    <!-- <div class="flex-shrink-0" href="detail-rooms.html"><img class="ms-3 rounded" src="img/photo/photo-1512917774080-9991f1c4c750.jpg" alt="" width="100"></div> -->
                  </div>
                </div>
                <div class="text-block pt-3 pb-0">
                  <table class="w-100">
                    <tfoot>
                      <tr class="border-top">
                        <th class="fw-bold text-start pt-3"><h4>구매금액</h4></th>
                        <!-- <td class="fw-bold text-end pt-3 text-primary h5 pr-2">{{ product.productRentalPrice.toLocaleString() }} 원</td> -->
                        <!-- <td class="fw-bold text-end pt-3 text-primary h4 pr-2">월 &nbsp;&nbsp;{{ (rentalLength === '3') ? product.productRentalPrice.toLocaleString() : (product.productRentalPrice - 4000).toLocaleString() }} 원</td> -->
                        <td class="fw-bold text-end pt-3 text-primary h4 pr-2">{{ detailOrder.orderPrice.toLocaleString() }} 원</td>
                        <!-- <input type="hidden" v-model="rental.rentalPrice" :value="(length === '3') ? product.productRentalPrice : ((length === '6') ? (product.productRentalPrice - 4000) : '')">  -->
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div class="card-footer bg-primary-light py-4 border-0">
                <div class="d-flex align-items-center">
                  <div>
                    <h6 class="text-primary">배송 전 [주문완료] 상태까지 취소가 가능합니다.</h6>
                    <p class="text-sm text-primary opacity-8 mb-0">You can cancel up to the [Order Complete] status before shipping.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
  </body>
</template>

<script>
import axios from 'axios';
import { ref, onMounted, mounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Swal from 'sweetalert2';


export default {
setup() {
  const route = useRoute();
  const router = useRouter();
  const Swal = require('sweetalert2');

  const detailOrder = ref({
    orderNo: '',
    productNo: '',
    memberNo: '',
    orderState: '',
    deliveryDate: '',
    deliveryTime: '',
    orderAddNumber: '',
    orderAddress: '',
    orderName: '',
    orderPhone: '',
    orderDate: '',
    orderPrice: '',
    member: {
      memName: '',
      memPhone: '',
    },
    product: {
      productName: '',
      productModel: '',
      productFunction: '',
      imgUrl: '',
      productColor: '',
    }
  });

  const orderNo = route.query.ono;
  console.log("orderNo : " + orderNo);

  const getOrderDetail = async () => {
    console.log("주문 상세 받아와??");
    try {
      const res = await axios.get('/order/check/' + orderNo);
      detailOrder.value = {...res.data};
      console.log(detailOrder.value);
      console.log(detailOrder.value.orderName);
      console.log(detailOrder.value.member.memName);
    } catch (error) {
      console.error(error);
    }
  }

  onMounted(() => {
    getOrderDetail();
  });

  const order = () => {
    //alert("주문이 완료되었습니다 :)");
    Swal.fire({
      icon: 'success',
      title: '주문이 완료되었습니다.'
    })
    router.push({
      name: 'Home'
    })

  }

  return {
    route,
    router,
    detailOrder,
    order,
  }

  }
}
</script>

<style>

</style>