<template>

<div id="app">
<body>
    <div class="container py-5">
      <div class="row">
            <div class="col-lg-3 me-lg-auto">
              <MypageSidebar></MypageSidebar>
            </div>
            <div class="col-lg-9 ps-lg-5 mt-5">
        <div class> 
          <div class="text-block">
            <h1>사용 중인 제품</h1>
            <div class="p-4 shadow ms-lg-4 rounded" style="background-color:#F2F4F5;">
              <div class="d-flex p-3 row">
                <div class="col-2">
                  <img class="img-fluid" v-bind:src="myProduct.imgUrl">
                </div>
                <div class="col-10">
                  <h6>{{ myProduct.productModel }}</h6>
                  <h5>{{ myProduct.productName }}</h5>
                </div>
              </div>
            </div>

            <!-- rentalTerm이 3년이고, 계약 만료일 까지 7일이 남았을 경우 -->
            <div v-if="myProduct.rentalTerm == 3 && myProduct.remainDay <= 7">
            <div class="py-4 ms-lg-4 rounded d-flex">
              <button class="btn btn-warning"  @click="showReturnModal = true">계약 기간이 얼마 남지 않았습니다! 반납 정보를 확인하세요</button>
            </div>
            </div>
          </div>

          <!-- 렌탈인 경우 -->
          <div v-if="myProduct.rentalTerm != null">
            <div class="text-block pt-4">
              <div class="d-flex"><h4 class="mb-0">계약정보</h4>
              <p class="subtitle text-sm text-primary mb-0 pl-2 mt-1">렌탈요금제</p></div>
              
              <div class="row"> 
                <div class="col-md-10"> </div>
                <div class="col-md-2">
                  <a class="list-unstyled text-muted" @click="showCancelModal = true" style="cursor: pointer;" v-if="myProduct.rentalTerm == 6 || myProduct.remainDay > 7">해지신청&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-angle-right"></i>
                  </a>
                  <!-- <a class="list-unstyled text-muted" @click="showReturnModal = true" style="cursor: pointer;" v-if="myProduct.rentalTerm == 3 && myProduct.remainDay <= 7">
                    반납신청&nbsp&nbsp&nbsp<i class="fas fa-angle-right"></i>
                  </a> -->
                </div>
                <div class="col-md-1">
                </div>
                <div class="col-md-4">
                  <ul class="list-unstyled text-muted">
                    <li class="mb-2"><span class="text-sm">약정기간</span></li>
                    <li class="mb-2"><span class="text-sm">의무사용기간</span></li>
                    <li class="mb-2"><span class="text-sm">소유권 도래일</span></li>
                    <li><span class="text-sm">설치주소</span></li>
                    <li class="mb-2"><span class="text-sm">&nbsp;</span></li>
                    <li class="mb-2"><span class="text-sm">설치처 연락처</span></li>
                    <li class="mb-2"><span class="text-sm">설치일</span></li>
                  </ul>
                </div>
                <div class="col-md-7">
                  <ul class="list-unstyled text-muted">  
                    <li class="mb-2"><span class="text-sm">{{new Date(myProduct.deliveryDate).toLocaleDateString() }} ~ {{ new Date(myProduct.expireDate ).toLocaleDateString() }}</span></li>
                    <li class="mb-2"><span class="text-sm">{{new Date(myProduct.deliveryDate).toLocaleDateString() }} ~ {{ new Date(myProduct.expireDate ).toLocaleDateString() }}</span></li>
                    <li class="mb-2"><span class="text-sm">{{ new Date(myProduct.expireDate ).toLocaleDateString() }}</span></li>
                    <li><span class="text-sm">{{ myProduct.orderAddress}}&nbsp;{{ myProduct.orderAddDetail}}</span></li>
                    <li class="mb-2"><span class="text-sm">{{ myProduct.orderAddNumber}}</span></li>
                    <li class="mb-2"><span class="text-sm">{{ myProduct.orderPhone}}</span></li>
                    <li class="mb-2"><span class="text-sm">{{new Date(myProduct.deliveryDate).toLocaleDateString() }}</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="text-block">
              <h4 class="mb-4">납부정보</h4>
              <div class="row"> 
                <div class="col-md-1">
                </div>
                <div class="col-md-4">
                  <ul class="list-unstyled text-muted">
                    <li class="mb-2"><span class="text-sm">결제수단</span></li>
                    <li class="mb-2"><span class="text-sm">청구일자</span></li>
                    <li class="mb-2"><span class="text-sm">청구금액</span></li>
                  </ul>
                </div>
                <div class="col-md-7">
                  <ul class="list-unstyled text-muted">
                    <li class="mb-2"><span class="text-sm">{{ myProduct.orderPay}}</span></li>
                    <li class="mb-2"><span class="text-sm">매월 {{ myProduct.rentalPayDate}}</span></li>
                    <li class="mb-2"><span class="text-sm">{{ myProduct.rentalPrice}}원</span></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>

         <!-- 해지 신청 눌렀을 때 모달 -->
        <div v-if="showCancelModal" class="modal">
          <div class="cancel-modal-content card border-primary mb-3">
              <span class="close" @click="showCancelModal = false">&times;</span>
              <div class="card-header">
                <h3 class="card-title mr-3 text-danger text-bold">잠깐!</h3>
                <h3 class="card-title text-bold">정말 해지하시게요?</h3>
              </div>
              <div class="card-body row align-items-center">
                <h5 class="card-title">지금 해지하신다면,</h5>
                <div>
                <h5 class="card-title">위약금</h5><h5 class="card-title text-danger">{{myProduct.rentalFee}}원</h5><h5 class="card-title">이 청구됩니다.</h5>
                <div class="text-muted mt-5" style="font-size:7px;">※ 상기 위약금의 경우 {(월렌탈료 / 30일) X (의무사용일수 - 실제사용일수)} X 10%로 산정됩니다.</div>
              </div>
              </div>
              <div class="text-right" style="right:0">
              <button class="btn btn-primary btn-sm mt-3" @click="continueCancel = true, showCancelModal = false">그래도 해지하기</button>
            </div>
          </div>
        </div>

        <!-- 그래도 해지하기 모달. 해지 정보 입력-->
        <div v-if="continueCancel" class="continue-cancel-modal">
          <form @submit.prevent="saveCancel" novalidate>
          <div class="continue-cancel-modal-content card">
              <span class="close" @click="continueCancel = false">&times;</span>
              <div class="card-header pl-0">
                <h2 class="card-title text-bold">정수기 반납을 위한 수거지 정보를 입력해주세요</h2>
              </div>
              <h6 class="card-title text-bold text-muted mt-3">방문 일자 선택</h6>
              <!-- DatePicker -->
              <div class="container">
                <div class="my-2" style="width: 100%">
                  <div class="date">
                    <Datepicker
                      v-model="cancel.returnDate"
                      :ref="inputs.dp1"
                      class="datepicker mb-3"
                      :locale="locale"
                      :weekStartsOn="0"
                      :inputFormat="inputFormat"
                      :clearable="true"
                      placeholder="수거일자를 선택해주세요"
                      @change="getCalValue('dp1')"
                    />
                    <!-- <button type="button" @click="getCalValue('dp1')">Get Value</button> -->
                  </div>
                </div>
              </div>
                <div>
                <h6 class="card-title text-bold text-muted">방문 시간 선택</h6>
              </div>
                <div>
                <select class="form-control mb-3 ml-2" v-model="cancel.returnTime" name="deliveryDate" id="deliveryDate" data-style="btn-selectpicker" style="width:150px;">
                  <option>선택</option>
                  <option>오전 10 ~ 11시</option>
                  <option>오전 11 ~ 12시</option>
                  <option>오후 01 ~ 02시</option>
                  <option>오후 02 ~ 03시</option>
                  <option>오후 03 ~ 04시</option>
                  <option>오후 04 ~ 05시</option>
                  <option>오후 05 ~ 06시</option>
                  <option>오후 06 ~ 07시</option>
                </select>
              </div>
              
              <h6 class="card-title text-bold text-muted">위약금 납부 금액</h6>
              <h6 class="mb-3 card-title">{{ myProduct.rentalFee }}원</h6>
              <!-- <input type="hidden" name="rentalFee" v-model="cancel.returnPrice">  -->
              <!-- <input type="hidden" v-bind:name="inputName" v-bind:value="cancel.returnPrice"> -->
              <h6 class="card-title text-bold text-muted">위약금 결제 수단</h6>
              <button class="btn btn-link btn-collapse ps-0 text-muted" type="button" data-bs-toggle="collapse" data-bs-target="#addNewCard" aria-expanded="false" aria-controls="addNewCard" data-expanded-text="닫기" data-collapsed-text="카드">카드</button>
          <div class="row collapse" id="addNewCard">
            <div class="mb-4 col-md-6">
              <label class="form-label" for="card-name">카드선택</label>
              <select class="form-control mb-3" v-model="cancel.returnMethod" name="payment" id="form_payment" data-style="btn-selectpicker" placeholder="카드 선택">
                <option>선택</option>
                <option>BC카드</option>
                <option>삼성카드</option>
                <option>국민카드</option>
                <option>롯데카드</option>
                <option>비자(하나카드포함)</option>
                <option>현대카드</option>
                <option>신한카드</option>
                <option>NH카드</option>
              </select>
            </div>
            <div class="mb-4 col-md-6">
              <label class="form-label" for="card-number">카드번호</label>
              <input class="form-control" type="text" name="card-number" placeholder="Card number" id="card-number">
            </div>
            <div class="mb-4 col-md-6">
              <label class="form-label" for="expiry-date">카드 유효기간</label>
              <input class="form-control" type="text" name="expiry-date" placeholder="MM/YY" id="expiry-date">
            </div>
            <div class="mb-4 col-md-6">
              <label class="form-label" for="cvv">카드소유주</label>
              <input class="form-control" type="text" name="cvv" placeholder="" id="cvv">
            </div>
            <div class="mb-4 col-md-6">
              <label class="form-label" for="zip">생년월일</label>
              <input class="form-control" type="text" name="zip" placeholder="" id="zip">
            </div>

            
          </div>
        <!-- </form> -->

        <!-- <form action="#"> -->
          <button class="btn btn-link btn-collapse ps-0 text-muted" type="button" data-bs-toggle="collapse" data-bs-target="#addBankCard" aria-expanded="false" aria-controls="addBankCard" data-expanded-text="닫기" data-collapsed-text="계좌">계좌</button>
          <div class="row collapse" id="addBankCard">
            
            <div class="mb-4 col-md-6">
              <label class="form-label" for="card-name">은행명</label>
              <select class="form-control mb-3" name="payment" id="form_payment" data-style="btn-selectpicker">
                <option value="">선택</option>
                <option value="">산업은행</option>
                <option value="">기업은행</option>
                <option value="">국민은행</option>
                <option value="">외환은행</option>
                <option value="">수협중앙회</option>
                <option value="">유안타증권</option>
                <option value="">농협중앙회</option>
                <option value="">지역농협(12)</option>
                <option value="">현대증권</option>
                <option value="">우리은행</option>
                <option value="">제일은행</option>
                <option value="">한국시티은행</option>
                <option value="">대구은행</option>
                <option value="">부산은행</option>
                <option value="">광주은행</option>
                <option value="">제주은행</option>
                <option value="">전북은행</option>
                <option value="">대우은행</option>
                <option value="">경남은행</option>
              </select>
            </div>
          
          </div>
          <button class="btn btn-primary btn-sm" @click="continueCancel = true" type="submit">반납 신청</button>
        </div>
        </form>
        </div>

        <!-- 반납 신청 눌렀을 때 모달 -->
        <div v-if="showReturnModal" class="modal">
          <div class="cancel-modal-content card border-primary mb-3">
            <span class="close" @click="showReturnModal = false">&times;</span>
              <div class="card-header row align-items-center">
                <h3 class="card-title mr-3 text-danger text-bold">잠깐! 반납 전에</h3>
                <h3 class="card-title mr-3 text-bold">렌탈기간 연장은 어떠세요?</h3>
              </div>
              <div class="card-body row align-items-center">
                <h6 class="card-title text-primary">혜택 1.</h6>
              <h5 class="card-title">렌탈 기간 3년 연장 시 ,</h5>
              <h5 class="card-title">렌탈 기간 만료 후에도</h5>
              <h5 class="card-title">정수기를 계속 사용 하실 수 있어요!</h5>
                <h6 class="card-title text-primary mt-4">혜택 2.</h6>
              <h5 class="card-title">1년치 필터를 무료로 드려요!</h5>
              <div class="text-muted fs-xs">(3개월 1회 교체 기준)</div>
              </div>
              <div class="text-right" style="right:0">
              <button class="btn btn-primary btn-sm mt-3" @click="continueReturn = true, showReturnModal = false">그래도 반납하기</button>
            </div>
          </div>
        </div>

        <!-- 그래도 반납하기 모달. 해지 정보 입력-->
        
        <div v-if="continueReturn" class="continue-cancel-modal">
          <form @submit.prevent="saveCancel" novalidate>
          <div class="continue-cancel-modal-content card">
              <span class="close" @click="continueReturn = false">&times;</span>
              <div class="card-header pl-0">
              <h2 class="card-title text-bold">정수기 반납을 위한 수거지 정보를 입력해주세요</h2>
            </div>
              <h6 class="card-title text-bold text-muted mt-4">방문 일자 선택</h6>
              <!-- DatePicker -->
              <div class="container">
                <div class="my-2" style="width: 100%">
                  <div class="date">
                    <Datepicker
                      v-model="cancel.returnDate"
                      :ref="inputs.dp1"
                      class="datepicker mb-3"
                      :locale="locale"
                      :weekStartsOn="0"
                      :inputFormat="inputFormat"
                      :clearable="true"
                      placeholder="수거일자를 선택해주세요"
                      @change="getCalValue('dp1')"
                    />
                    <!-- <button type="button" @click="getCalValue('dp1')">Get Value</button> -->
                  </div>
                </div>
              </div>
                <h6 class="card-title text-bold text-muted">방문 시간 선택</h6>
                <div></div>
                <select class="form-control mb-3 ml-2" v-model="cancel.returnTime" name="deliveryDate" id="deliveryDate" data-style="btn-selectpicker" style="width:150px;">
                  <option>선택</option>
                  <option>오전 10 ~ 11시</option>
                  <option>오전 11 ~ 12시</option>
                  <option>오후 01 ~ 02시</option>
                  <option>오후 02 ~ 03시</option>
                  <option>오후 03 ~ 04시</option>
                  <option>오후 04 ~ 05시</option>
                  <option>오후 05 ~ 06시</option>
                  <option>오후 06 ~ 07시</option>
                </select>
                <div style="text-align:right">
                  <button class="btn btn-primary btn-sm" type="submit">반납 신청</button>
                </div>
              </div>
            </form>
        </div>

        <!-- 구매인 경우 -->
        <div v-if="myProduct.rentalTerm == null">
          <div class="text-block pt-4">
            <div class="d-flex"><h4>구매정보</h4></div>
            
            <div class="row"> 
              <div class="col-md-1">
              </div>
              <div class="col-md-4">
                <ul class="list-unstyled text-muted">
                  <li class="mb-2"><span class="text-sm">구매 날짜</span></li>
                  <li><span class="text-sm">설치주소</span></li>
                  <li class="mb-2"><span class="text-sm">&nbsp;</span></li>
                  <li class="mb-2"><span class="text-sm">설치처 연락처</span></li>
                  <li class="mb-2"><span class="text-sm">설치일</span></li>
                  <li class="mb-2"><span class="text-sm">결제수단</span></li>
                  <li class="mb-2"><span class="text-sm">구매금액</span></li>
                </ul>
              </div>
              <div class="col-md-7">
                <ul class="list-unstyled text-muted">  
                  <li class="mb-2"><span class="text-sm">{{ new Date(myProduct.orderDate).toLocaleDateString() }}</span></li>
                  <li><span class="text-sm">{{ myProduct.orderAddress}}&nbsp;{{ myProduct.orderAddDetail}}</span></li>
                  <li class="mb-2"><span class="text-sm">{{ myProduct.orderAddNumber}}</span></li>
                  <li class="mb-2"><span class="text-sm">{{ myProduct.orderPhone}}</span></li>
                  <li class="mb-2"><span class="text-sm">{{ new Date(myProduct.deliveryDate).toLocaleDateString() }}</span></li>
                  <li class="mb-2"><span class="text-sm">{{ myProduct.orderPay}}</span></li>
                  <li class="mb-2"><span class="text-sm">{{ myProduct.orderPrice}}원</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
              </div>
            </div>
          </div>
        </div>
</body>
</div>
</template>

<script>
  import axios from "axios";
  import { reactive } from "vue";
  import { useRoute, useRouter } from 'vue-router';
  import {ref} from '@vue/reactivity';
  import Swal from "sweetalert2";

  import Datepicker from 'vue3-datepicker';
  import { ko } from 'date-fns/locale';
  import { defineRefs } from '../order/helper.js';
  import MypageSidebar from "./MypageSidebar.vue";
  
  export default {
    components:{
      Datepicker,
      MypageSidebar
    },
    data() {
      return {
        showModal: false,
        showCancelModal: false,
        showReturnModal: false,
        continueCancel: false,
        continueReturn: false,
        expireDate: '',
        remainDay: '',
      };
    },
    setup() {
      const route = useRoute();
      const router = useRouter();
      const orderNo = route.params.orderNo;
      const myProduct = ref(null);
      console.log("orderNo 확인 : " + orderNo);

      // &&& DatePicker 부분 &&&
    // :weekStartsOn="0" 'Sunday' is first
    const picked = ref(new Date());
    const locale = reactive(ko); // 한글 달력
    const inputFormat = ref('yyyy-MM-dd');

    // refs
    // const datepicker1 = ref(null);
    // dynamic refs
    
    const inputs = defineRefs(['dp1']);

   
    // FontAwesome 아이콘 클릭 시, datepicker 나타남
    const clickCalIcon = (refId) => {
      const dp = inputs[refId].value;
      // console.log(dp);
      dp.inputRef.focus();
    };

    //Get Value 버튼 클릭 시, input 데이터(YYYY-MM-DD 나타남)
    const getCalValue = (refId) => {
      console.log("뭔지모르겠는값 : " + refId);
      // console.log(datepicker1.value.input);
      // ref="datepicker1"

      const dp = inputs[refId].value;
      // console.log(dp);
      console.log("해당 날짜 값: " + dp.input);
      
      alert(dp.input);
    };
    // &&& DatePicker 부분 끝 &&&

      const cancel = ref({
        returnNo: '',
        returnDate: '',
        returnTime: '',
        returnPrice: '',
        returnMethod: '',
        returnTrue: '',
        orderNo: '',
        memNo: '',
        productNo: ''
      })
      
      const getMyProductDetail = async() => {
        const res = await axios
        .get(`/mypage/myorder/myproduct/${orderNo}`);
        myProduct.value = {...res.data};
        console.log(myProduct.value);
        const myDate = myProduct.value.deliveryDate;
        console.log("계약 시작 시간: " + myDate);
        const startDate = new Date(myDate);
        startDate.setFullYear(startDate.getFullYear()+3);
        const expireDate = startDate.toISOString();
        console.log("계약 만료 일 : " + expireDate);
        myProduct.value.expireDate = expireDate;
        // 상품 번호 내보내기
        
        // 위약금 계산
        const minusDate = new Date(expireDate.replace('Z', '')).getTime() 
                          - new Date(myDate).getTime();
        console.log("minusDate" + minusDate);
        const DAY_IN_MS = 1000 * 60 * 60 * 24; // 1일을 밀리초로 나타낸 값
        const minusDay = Math.floor(minusDate/DAY_IN_MS);
        const rentalFee = (myProduct.value.rentalPrice/30)*(minusDay)*0.1;
        console.log("위약금 : " + rentalFee);
        myProduct.value.rentalFee = rentalFee;

        const remain = new Date(expireDate.replace('Z', '')).getTime() 
                          - new Date();
        const remainDay = Math.floor(remain/DAY_IN_MS);
        console.log("remain" + remain);
        console.log("남은 계약일 수 : " + remainDay);
        myProduct.value.remainDay = remainDay;
      }
      
      // let memNo = 4; // memNo 임의 설정 1
      
      const memNo = sessionStorage.getItem('memNo');
        console.log("sessionStorage에서 가져온 값 : " + memNo);
      // productNum 뽑아오기..
      // let productNum = getMyProductDetail();
      // console.log("이거야!" + productNum);


      const saveCancel = async() => {
        try {
          const data = {
            // returnTime: 'cancel.value.returnTime',
            returnTime: '오후 01 ~ 02시',
            returnDate: cancel.value.returnDate,
          // returnPrice: 11233,
          // returnPrice: cancel.value.returnPrice,
          // returnMethod: 'cancel.value.returnMethod',
          returnMethod: '카드',
          // returnTrue: 'cancel.value.returnTrue',
          orderNo: orderNo,
          // memNo: 'cancel.value.memNo',
          memNo: memNo,
          productNo: myProduct.value.productNo,
          // productNo: 1
              }
            console.log(data);
            await axios.post('/mypage/myproduct/myorder/cancel', data).then(() =>{
              Swal.fire({
                icon: 'success',
                title: '수거 신청을 완료하였습니다!'
              }).then(() => {
                window.location.href = '/mypage/myproduct'
              })
            });
        } catch(error){
          console.log(error);
        }

          try{
            await axios.patch(`/mypage/myproduct/myorder/cancel/${orderNo}`).then(()=>{
              Swal.fire({
                icon: 'success',
                title: '반납 신청을 완료하였습니다!'
              }).then(() => {
                window.location.href = '/#/mypage/myproduct'
              })
            });
            console.log("성공했습니다!")
          }catch(error){
            console.log(error);
          }
      };

      const saveExtend = async() => {
        try {
          await axios.patch(`myorder/extend/${orderNo}`);
            console.log("연장을 성공했습니다!")
        } catch (error) {
          console.log(error)
        }
      }
        getMyProductDetail();

        return{
          myProduct,
          getMyProductDetail,
          saveCancel,
          cancel,
          saveExtend,
          //&&& DatePicker &&&
          picked,
          locale,
          inputFormat,
          inputs,
          clickCalIcon,
          getCalValue,
          selectedDate: new Date(),
          //&&& DatePicker 끝 &&&
        }
    }
  };
</script>
<style>
   /* 모달 스타일링 */
   .modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 40%;
    position: relative; /* close 버튼과의 위치 조정을 위해 */
  }
  
  .close {
    color: #aaa;
    position: absolute; /* 위치 조정 -> modal-content와 */
    float: right;
    right: 16px;
    top: 11px;
    font-size: 36px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  .cancel-modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }
  /* 해지 신청 페이지 */
  .cancel-modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 40px;
    border: 1px solid #888;
    border-radius: 10px;
    width: 30%;
    position: relative; /* close 버튼과의 위치 조정을 위해 */
  }

  .continue-cancel-modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);

  }
  /* 그래도!해지 신청 페이지 */
  .continue-cancel-modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 30px;
    border: 1px solid #888;
    border-radius: 10px;
    width: 30%;
    position: relative; /* close 버튼과의 위치 조정을 위해 */
  }
</style>