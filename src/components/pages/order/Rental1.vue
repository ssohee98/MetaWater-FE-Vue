<template>
    <body>
      <div class="progress rounded-0 sticky-top" style="height: 8px; top: 72px;">
        <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <h1 class="h2 mb-5"> 계약자 정보 <span class="text-muted float-end">Step 1</span>      </h1>
              <div class="text-block">
              
              </div>
              <!-- <div class="text-block">
                <label class="h5" for="form_guests">Guests</label>
                <p class="text-sm text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in.</p>
                <div class="row">
                  <div class="col-lg-6 mb-3">
                    <select class="selectpicker form-control" name="guests" id="form_guests" data-style="btn-selectpicker" title=" ">
                      <option value="guests_0">1</option>
                      <option value="guests_1">2</option>
                      <option value="guests_2" selected>3</option>
                      <option value="guests_3">4</option>
                      <option value="guests_4">5</option>
                    </select>
                  </div>
                </div>
              </div> -->
              <div class="col-lg-12 ms-auto">
                <p></p>
                <label class="h5" for="form_guests">설치/배송주소</label>
                <p class="text-sm text-muted">배송지를 입력해주세요</p>
              
                <!-- Country-->
                <div class="mb-4">
                  <label class="form-label" for="form_country">수취인 이름</label>
                  <input class="form-control" name="name" id="form_street">
                </div>
                <!-- Street-->
                <div class="mb-4">
                  <label class="form-label" for="form_street">수취인 연락처</label>
                  <input class="form-control" name="name" id="form_street">
                </div>
                <!-- City + State-->
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-4">
                      <label class="form-label" for="form_city">우편번호</label>
                      <input class="form-control" name="name" id="form_city">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-4">
                      <label class="form-label" for="form_state">주소</label>
                      <input class="form-control" name="name" id="form_state">
                    </div>
                  </div>
                </div>
                <!-- ZIP Code-->
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-4">
                      <label class="form-label" for="form_zip">상세주소</label>
                      <input class="form-control" name="name" id="form_zip">
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-block">
                <h5>설치 희망일</h5>
                <ul class="list-unstyled">
                  <li>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" id="purpose_0" name="purpose">
                      <label class="form-check-label" for="purpose_0">Personal travel      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" id="purpose_1" name="purpose">
                      <label class="form-check-label" for="purpose_1">Business travel      </label>
                    </div>
                  </li>
                </ul>
                <p class="text-sm text-muted">선택하신 설치 일시와 실제 설치 확정일시가 재고 상황 등으로 변동될 수 있습니다.</p>
                <p class="text-sm text-muted">주문완료 후 알림톡으로 실제 설치 확정일시를 안내 드립니다. 설치일시 조정이 필요하신 경우 고객센터(1588-5200)로 연락 부탁드립니다.</p>
                <p class="text-sm text-muted">방문하기 전에 담당 방문 기사가 고객님께 연락을 드립니다.</p>
                <p class="text-sm text-muted">방문 당일 기상악화나 교통 상황에 따라 방문날짜와 시간의 변동이 발생할 수 있습니다.</p>
              
              </div>
              <div class="text-block">
                <div class="d-flex">
                  <div>
                    <h5>배송메모</h5>
                    <p class="text-sm text-muted">메송메모를 입력해주세요</p>
                  </div><img class="avatar avatar-md p-1 flex-shrink-0 ms-4" src="img/avatar/avatar-10.jpg" alt="Jack London">
                </div>
                <textarea class="form-control" name="hello" rows="4"></textarea>
              </div>
              <div class="row form-block flex-column flex-sm-row">
                <!-- <div class="col text-center text-sm-start"><a class="btn btn-link text-muted" href="user-booking-1.html"> <i class="fa-chevron-left fa me-2"></i>이전</a>
                </div> -->
                <div class="col text-center text-sm-end"><a class="btn btn-primary px-3" href="user-booking-3.html"> 다음<i class="fa-chevron-right fa ms-2"></i></a></div>
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