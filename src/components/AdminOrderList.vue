<template>
        <div class="content-wrapper"> 
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1>주문관리</h1>
                            </div>
                        </div>
                    </div>
                </section>          
                <section class="content">
                    <div class="container-fluid">
                          <div class="row">
                            <div class="col-md-12">
                                <div class="card card-secondary card-tabs">
                                    <div class="card-header p-2">
                                        <ul class="nav nav-pills">
                                            <li class="nav-item">
                                             <a class="nav-link L-Affiliate-Tagged"  data-toggle="tab" href="#custom-tabs-one-home"  aria-controls="custom-tabs-one-home" >구매목록</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link L-Affiliate-Tagged"  data-toggle="tab" href="#custom-tabs-one-profile"  aria-controls="custom-tabs-one-profile" >렌탈목록</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link L-Affiliate-Tagged" data-toggle="tab" href="#custom-tabs-one-messages" >반납/해지 관리</a>
                                            </li>
                                        </ul>
                                     </div>
                                    <div class="card-body">
                                    <div class="tab-content" id="custom-tabs-one-tabContent">
                                        <div class="tab-pane fade show active" id="custom-tabs-one-home" role="tabpanel" aria-labelledby="custom-tabs-one-home-tab">
                                             <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th class="text-center">주문유형</th>
                                                        <th class="text-center">주문일시</th>
                                                        <th class="text-center">주문상품</th>
                                                        <th class="text-center">주문자</th>
                                                        <th class="text-center">주문금액</th>
                                                        <th class="text-center">주문관리</th>
                                                    </tr>
                                                 </thead>
                                                <tbody>
                                                    <tr v-for ="(order,index) in orders" :key="index">                                                       
                                                        <th class="text-center">{{order.orderType}}</th>
                                                        <td class="text-center" >{{order.orderDate}}</td>
                                                        <td class="text-center">{{order.product.productName}}</td>                     
                                                        <td class="text-center">{{order.member.memName}}</td>
                                                        <td class="text-center">{{order.product.productPrice}}</td>
                                                        <td class="text-center">
                                                            <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-lg"  @click="orderDetail(order.orderNo)">
                                                            상세
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="tab-pane fade" id="custom-tabs-one-profile" role="tabpanel" aria-labelledby="custom-tabs-one-profile-tab">
                                             <table class="table table-bordered">
                                                <thead>
                                                    <tr>                                               
                                                        <th class="text-center">주문일시</th>
                                                        <th class="text-center">주문상품</th>
                                                        <th class="text-center">주문자</th>
                                                        <th class="text-center">계약기간</th>
                                                        <th class="text-center">월 렌탈료</th>
                                                         <th class="text-center">렌탈 관리</th>
                                                    </tr>
                                                 </thead>
                                                <tbody>
                                                    <tr  v-for ="(rental,index) in rentals" :key="index">                                                       
                                                        <th class="text-center">{{rental.orderDate}}</th>
                                                        <td class="text-center">{{rental.product.productName}}</td>
                                                        <td class="text-center">{{rental.member.memName}}</td>                     
                                                        <td class="text-center">{{rental.rental.renTerm}}년</td>
                                                        <td class="text-center">{{rental.product.productRentalPrice}}</td>
                                                        <td class="text-center">
                                                            <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-lg"  @click="orderDetail(rental.orderNo)">
                                                            상세
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="tab-pane fade" id="custom-tabs-one-messages" role="tabpanel" aria-labelledby="custom-tabs-one-messages-tab">
                                            Morbi turpis dolor, vulputate vitae felis non, tincidunt congue mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum. Suspendisse ut velit condimentum, mattis urna a, malesuada nunc. Curabitur eleifend facilisis velit finibus tristique. Nam vulputate, eros non luctus efficitur, ipsum odio volutpat massa, sit amet sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare magna.
                                        </div>
                                    </div>
                                 </div>
                            </div>
                        </div> 
                    </div>
                </div>
                    <div v-if="order !== null">
                        <div class="modal fade" id="modal-lg">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">주문 상세 정보</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <p>주문번호 : {{order.orderNo}} </p>
                                        <h6>주문일시 : {{order.orderDate}} </h6>
                                          <table class="table table-bordered" >
                                            <thead>
                                                <tr>
                                                    <th class="text-center">주문상품</th>
                                                    <th class="text-center">월렌탈료</th>
                                                    <th class="text-center">렌탈 계약기간</th>
                                                    <th class="text-center">상태</th>
                                                    <th class="text-center">결제수단</th>           
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr >                                          
                                                    <td class="text-center">{{order.product.productName}}</td>
                                                    <td class="text-center">{{order.product.productPrice}}</td>                     
                                                    <td class="text-center">{{order.rental.renTerm}}년</td>
                                                    <td class="text-center">
                                                        <select class="form-select" v-model="order.orderState">
                                                            <option value="입금대기">입금대기</option>
                                                            <option value="배송 준비 중">배송 준비 중</option>
                                                            <option value="배송 중">배송 중</option>
                                                            <option value="배송 완료">배송 완료</option>
                                                            <option value="취소">취소</option>
                                                            <option value="반납">반납</option>
                                                        </select>
                                                    </td>
                                                    <td class="text-center">{{order.orderPay}}</td>
                                                 </tr>
                                            </tbody>
                                         </table>
                                        <h6 class="text-right">총 주문 금액 </h6>
                                        <br/>
                                        <h6>렌탈 정보</h6>
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th class="text-center">대여 종료일</th>
                                                    <td>2022-04-18</td>
                                                    <th class="text-center">정기결제일</th>
                                                    <td class="text-center">10일</td>                                                                                              
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th class="text-center">수취인</th>
                                                    <td class="text-center">김민기</td>   
                                                    <th class="text-center">수취인 연락처</th>
                                                    <td class="text-center">{{order.orderHopedate}}</td>                                                                                                                                
                                                </tr>
                                                <tr>
                                                    <th class="text-center" >설치희망일</th>
                                                    <td class="text-center" colspan="3">2022-04-05</td>                                                                                                                            
                                                </tr>
                                                <tr>
                                                    <th class="text-center">설치주소</th>
                                                    <td class="text-center" colspan="3">부산</td>                                                                                                                            
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                     <div class="modal-footer justify-content-between" >
                                        <button type="button" class="btn btn-default" data-dismiss="modal">닫기</button>
                                        <button type="button" class="btn btn-primary" @click="onSave(order.orderNo)"  data-dismiss="modal" >저장</button>
                                    </div>
                                </div>                              
                            </div>
                        </div>
                    </div>
            </section>           
         </div>
            
        <aside class="control-sidebar control-sidebar-dark">
        </aside>
</template>

<script>
import axios from "axios";
import {ref ,computed} from 'vue';

export default {
 props: {
    orders: Object,
    rentals: Object
 },
 setup(){
    const order = ref(null);
    const originalOrder = ref(null);

    const orderDetail= async(orderNo) => {
            await axios.get(`/admin/orders/${orderNo}`).then(({data}) =>{
                order.value = {...data};
                console.log(order.value);
            });
        }
    
    const onSave = async(orderNo) =>{
        const res = await axios.patch(`/admin/orders/${orderNo}`,{
            orderState: order.value.orderState
      });
      originalOrder.value = {...res.data};
       
    }

    const todoUpdated = computed(() => {
        return !_.isEqual(order.value, originalOrder.value);
    });

     return{
        order,
        orderDetail,
        onSave,
        todoUpdated
        }
    }
}
 
</script>

<style>

</style>