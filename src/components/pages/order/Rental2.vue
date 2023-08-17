<template>
  <body>

    <div class="progress rounded-0 sticky-top" style="height: 8px; top: 72px;">
      <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <h1 class="h2 mb-5"> 렌탈료 납부 정보 <span class="text-muted float-end">Step 2</span>      </h1>
            <div class="text-block">
              
            </div>
            <div class="text-block">
              <form action="#">
                <div class="d-flex justify-content-between align-items-end mb-4">
                  <h5 class="mb-0">Pay with your card</h5>
                  <div class="text-muted"><i class="fab fa-cc-amex fa-2x me-2"> </i><i class="fab fa-cc-visa fa-2x me-2"> </i><i class="fab fa-cc-mastercard fa-2x"></i></div>
                </div>
               
                <button class="btn btn-link btn-collapse ps-0 text-muted" type="button" data-bs-toggle="collapse" data-bs-target="#addNewCard" aria-expanded="false" aria-controls="addNewCard" data-expanded-text="닫기" data-collapsed-text="카드">카드</button>
                <div class="row collapse" id="addNewCard">
                   
                  <div class="mb-4 col-md-6">
                    <label class="form-label" for="card-name">카드선택</label>
                    <select class="selectpicker form-control mb-3" name="payment" id="form_payment" data-style="btn-selectpicker">
                      <option value="">선택</option>
                      <option value="">BC카드</option>
                      <option value="">삼성카드</option>
                      <option value="">국민카드</option>
                      <option value="">롯데카드</option>
                      <option value="">비자(하나카드포함)</option>
                      <option value="">현대카드</option>
                      <option value="">신한카드</option>
                      <option value="">NH카드</option>
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

                  <div class="mb-4 col-md-6">
                    <label class="form-label" for="zip">자동이체일</label>
                    <ul class="list-unstyled">
                      <li>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" id="purpose_0" name="purpose">
                          <label class="form-check-label" for="purpose_0">10일    </label>
                        </div>
                      </li>
                      <li>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" id="purpose_1" name="purpose">
                          <label class="form-check-label" for="purpose_1">20일</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                </div>
              </form>

              <form action="#">
                <button class="btn btn-link btn-collapse ps-0 text-muted" type="button" data-bs-toggle="collapse" data-bs-target="#addBankCard" aria-expanded="false" aria-controls="addBankCard" data-expanded-text="닫기" data-collapsed-text="계좌">계좌</button>
                <div class="row collapse" id="addBankCard">
                   
                  <div class="mb-4 col-md-6">
                    <label class="form-label" for="card-name">은행명</label>
                    <select class="selectpicker form-control mb-3" name="payment" id="form_payment" data-style="btn-selectpicker">
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
                 
                  <div class="mb-4 col-md-12">
                    <label class="form-label" for="expiry-date">계좌번호</label>
                    <input class="form-control" type="text" name="expiry-date" placeholder="계좌번호를 입력해 주세요." id="expiry-date">
                  </div>
                  <div class="mb-4 col-md-4">
                    <label class="form-label" for="cvv">계좌소유주</label>
                    <input class="form-control" type="text" name="cvv" placeholder="" id="cvv">
                  </div>
                  <div class="mb-4 col-md-4">
                    <label class="form-label" for="zip">생년월일</label>
                    <input class="form-control" type="text" name="zip" placeholder="" id="zip">
                  </div>

                  <div class="mb-4 col-md-4">
                    <label class="form-label" for="zip">자동이체일</label>
                    <ul class="list-unstyled">
                      <li>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" id="purpose_0" name="purpose">
                          <label class="form-check-label" for="purpose_0">10일    </label>
                        </div>
                      </li>
                      <li>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" id="purpose_1" name="purpose">
                          <label class="form-check-label" for="purpose_1">20일</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>

              <form action="#">
                <button class="btn btn-link btn-collapse ps-0 text-muted" type="button" data-bs-toggle="collapse" data-bs-target="#addKakao" aria-expanded="false" aria-controls="addKakao" data-expanded-text="닫기" data-collapsed-text="카카오페이">카카오페이</button>
                <div class="row collapse" id="addKakao">
       
                 
                  <div class="mb-4 col-md-12">
                    <label class="form-label" for="expiry-date">카카오페이</label>
                  </div>

                  <div class="mb-4 col-md-4">
                    <label class="form-label" for="zip">자동이체일</label>
                    <ul class="list-unstyled">
                      <li>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" id="purpose_0" name="purpose">
                          <label class="form-check-label" for="purpose_0">10일    </label>
                        </div>
                      </li>
                      <li>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" id="purpose_1" name="purpose">
                          <label class="form-check-label" for="purpose_1">20일</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
           
            </div>
            <div class="text-block">
              <h6>Cancellation policy</h6>
              <p class="text-sm text-muted">계약자 명의의 납부 정보를 등록하셔야 합니다. 계약자와 납부자가 상이한 경우, 계약자는 미납, 연체 등에 더욱 주의하셔야 합니다.</p>
              <p class="text-sm text-muted">카카오페이/네이버페이로 제휴카드 등록 후 렌탈료 납부시에도 카드혜택은 동일하게 적용됩니다.(단, NEW코웨이 우리카드는 네이버페이 간편결제 등록시 제휴혜택이 제공되지 않습니다.</p>
            </div>
            <div class="row form-block flex-column flex-sm-row">
              <div class="col text-center text-sm-start"><a class="btn btn-link text-muted" href="user-booking-2.html"> <i class="fa-chevron-left fa me-2"></i>이전</a>
              </div>
              <div class="col text-center text-sm-end"><a class="btn btn-primary px-3" href="user-booking-4.html"> 다음<i class="fa-chevron-right fa ms-2"></i></a></div>
            </div>
          </div>
          <div class="col-lg-5 ps-xl-5">
            <div class="card border-0 shadow">
              <div class="card-body p-4">
                <div class="text-block pb-3">
                  <div class="d-flex align-items-center">
                    <div>
                      <h6> <div class="text-reset" href="detail-rooms.html">아이콘 얼음정수기</div></h6>
                      <p class="text-muted text-sm mb-0">렌탈 * 방문관리6년 * 약정냉정수기+얼음아이스 * 화이트</p>
                      <div class="mt-n1"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i>
                      </div>
                    </div><div class="flex-shrink-0" href="detail-rooms.html"><img class="ms-3 rounded" src="img/photo/photo-1512917774080-9991f1c4c750.jpg" alt="" width="100"></div>
                  </div>
                </div>
                <div class="text-block py-3">
                  <ul class="list-unstyled mb-0">
                    <li class="mb-3"><i class="fas fa-users fa-fw text-muted me-2"></i>3 guests</li>
                    <li class="mb-0"><i class="far fa-calendar fa-fw text-muted me-2"></i>Apr 17, 2019 <i class="fas fa-arrow-right fa-fw text-muted mx-3"></i>Apr 18, 2019</li>
                  </ul>
                </div>
                <div class="text-block pt-3 pb-0">
                  <table class="w-100">
                    <tbody>
                      <tr>
                        <th class="fw-normal py-2">$432.02 x 1 night</th>
                        <td class="text-end py-2">$432.02</td>
                      </tr>
                      <tr>
                        <th class="fw-normal pt-2 pb-3">적립금</th>
                        <td class="text-end pt-2 pb-3">$67.48</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr class="border-top">
                        <th class="pt-3">렌탈료</th>
                        <td class="fw-bold text-end pt-3">49999원</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div class="card-footer bg-primary-light py-4 border-0">
                <div class="d-flex align-items-center">
                  <div>
                    <h6 class="text-primary">Flexible – free cancellation</h6>
                    <p class="text-sm text-primary opacity-8 mb-0">Cancel within 48 hours of booking to get a full refund. <a href="#" class="text-reset ms-3">More details</a></p>
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
export default {

}
</script>

<style>

</style>