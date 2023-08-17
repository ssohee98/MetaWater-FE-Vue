<template>
    <body>
  
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-7">
            <div class="text-block">
              <div class="row gallery mb-3 ms-n1 me-n1">

                <!-- 이미지 URL -->
                <div class="col-lg-12 col-6 px-1 mb-2"><img class="img-fluid" v-bind:src="detailProduct.imgUrl"></div>
                <!-- <div class="col-lg-4 col-6 px-1 mb-2"><a href="/../../../../html/img/photo/photo-1512917774080-9991f1c4c750.jpg" data-fancybox="gallery" title="Outside"><img class="img-fluid" src="/../../../../html/img/photo/photo-1512917774080-9991f1c4c750.jpg" alt="..."></a></div>
                <div class="col-lg-4 col-6 px-1 mb-2"><a href="/../../../../html/img/photo/photo-1494526585095-c41746248156.jpg" data-fancybox="gallery" title="Rear entrance"><img class="img-fluid" src="/../../../../html/img/photo/photo-1494526585095-c41746248156.jpg" alt="..."></a></div>
                <div class="col-lg-4 col-6 px-1 mb-2"><a href="/../../../../html/img/photo/photo-1494526585095-c41746248156.jpg" data-fancybox="gallery" title="Rear entrance"><img class="img-fluid" src="/../../../../html/img/photo/photo-1494526585095-c41746248156.jpg" alt="..."></a></div>
                 -->
                <!-- <div class="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/photo-1484154218962-a197022b5858.jpg" data-fancybox="gallery" title="Kitchen"><img class="img-fluid" src="img/photo/photo-1484154218962-a197022b5858.jpg" alt="..."></a></div> -->
                <!-- <div class="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/photo-1522771739844-6a9f6d5f14af.jpg" data-fancybox="gallery" title="Bedroom"><img class="img-fluid" src="img/photo/photo-1522771739844-6a9f6d5f14af.jpg" alt="..."></a></div>
                <div class="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/photo-1488805990569-3c9e1d76d51c.jpg" data-fancybox="gallery" title="Bedroom"><img class="img-fluid" src="img/photo/photo-1488805990569-3c9e1d76d51c.jpg" alt="..."></a></div> -->
              </div>
            </div>   

            
          </div>

          <!-- 상품 상세 -->
          <div class="col-lg-5">
            <div class="p-4 shadow ms-lg-4 rounded sticky-top" style="top: 200px;">
              <p class="text-primary" style="text-align: center;">New 프로모션 진행중</p>
              <br>
              <p class><span class="text h1">{{detailProduct.productName}}</span></p>
              <br><br>
              <div class="row" style="text-align: left;">
                <div class="col-sm-6">
                  <div class="mb-4">
                    <label class="form-label" for="model">모델명 |</label>
                    &nbsp;&nbsp;<label>{{detailProduct.productModel}}</label>
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="color">색&nbsp;&nbsp;&nbsp;상 |</label>
                    &nbsp;&nbsp;<label>{{detailProduct.productColor}}</label>
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="function">기&nbsp;&nbsp;&nbsp;능 |</label>
                    &nbsp;&nbsp;<label>{{detailProduct.productFunction}}</label>
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="company">제조사 |</label>
                    &nbsp;&nbsp;<label>{{detailProduct.productCompany}}</label>
                  </div>
                  <div class="mb-4">
                    <label><i class="fa fa-xs fa-star text-primary"></i>&nbsp;{{ avgStar }}&nbsp;({{reviewTotal}}+)</label>
                  </div>
                </div>
              </div>
              <hr class="my-4">
              <form class="form" id="order-form" method="get" action="#" autocomplete="off">
                <div class="mb-4">
                  <label class="form-label" for="orderType">렌탈/구매 *</label>
                  <select class="form-control" name="orderType" id="orderType" v-model="orderType">
                    <option value="1">렌탈</option>
                    <option value="2">구매</option>
                  </select>
                </div>
                <div class="mb-4" v-if="showContractLength">
                  <label class="form-label" for="contractLength">약정기간 *</label>
                  <select class="form-control" name="contractLength" id="contractLength" v-model="contractLength">
                    <option value="3">3년</option>
                    <option value="6">6년</option>
                  </select>
                </div>
                <!-- <hr class="my-4"> -->
                <br>
                <div class="mb-4" style="text-align: right;" id="purchasePrice" v-if="showPurchasePrice">
                  <label class="form-label h5">구매금액</label> &nbsp;&nbsp;
                  <strong class="text-primary h3">{{ detailProduct.productPrice.toLocaleString() }}원</strong>
                </div>
                <div class="mb-4" style="text-align: right;" id="rentalPrice" v-if="showRentalPrice">
                  <label class="form-label h5" name="orderPrice">렌탈금액</label> &nbsp;&nbsp;
                  <strong class="text-primary h3">{{ rentalPrice }}</strong>
                </div>

                <!-- 선택 옵션 -->
                <hr class="my-4">
                <div class="mb-4" style="text-align: center;" id="order" v-if="isAllOptionsSelected">
                  <label>[{{ orderType === '1' ? '렌탈' : '구매' }}] &nbsp;</label>
                  <label v-if="showContractLength">| &nbsp; [기간 : {{ contractLength === '3' ? '3년' : '6년' }}] &nbsp;</label>
                  <span>옵션을 선택 하셨습니다</span>
                </div>
                <div v-if="showOrderButton" class="d-grid mb-4">
                  <button v-if="orderType === '1'" class="btn btn-primary" @click="orderRental">렌탈하기</button>
                  <button v-else class="btn btn-primary" @click="orderPurchase">구매하기</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="py-6 bg-gray-100 text-left"> 
        <div class="container">
            <!-- 스펙 -->
            <div class="text-block">
              <div class="row" data-bs-toggle="collapse" data-bs-target="#Details" aria-expanded="false" aria-controls="Details">
                <div class="col-md-11">
                  <h2>상품 스펙</h2>
                </div>
                <div class="col-md-1">
                  <h2>+</h2>
                </div>
              </div>

              <!-- ============== -->
              <!-- <section class="item-section"> -->
                <div class="collapse mt-4 Details" id="Details">
                  <h4 class="text-primary mb-4">상품 스펙</h4>
                  <table border="1" style="border-collapse: collapse; width: 100%;">
                    <colgroup>
                      <col style="width: 16%;">
                      <col style="width: 30%;">
                      <col style="width: 20%;">
                      <col style="width: 34%;">
                    </colgroup>
                    <tr>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">모델명*</td>
                      <td h5 class="mt-2 mb-1" style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productModel}}</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">주요 기능*</td>
                      <td h5 class="mt-2 mb-1" style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productFunction}}</td>
                    </tr>
                    <tr>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">색상</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productColor}}</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">크기 (가로x세로x높이)</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productSize}}</td>
                    </tr>
                    <tr>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">무게</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productWeight}}</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">직수 방식*</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productMethod}}</td>
                    </tr>
                    <tr>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">설치 형태*</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productType}}</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">출시 년월</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{new Date(detailProduct.productRdate).toLocaleDateString() }}</td>
                    </tr>
                    <tr>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">제조사</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productCompany}}</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">제조 국가</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">made in KOREA</td>
                    </tr>
                  </table>
                </div>
            </div>


            <!-- 가격 -->
            <div class="text-block">
              <div class="row" data-bs-toggle="collapse" data-bs-target="#Price" aria-expanded="false" aria-controls="Price">
                <div class="col-md-11">
                  <h2>가격 혜택</h2>
                </div>
                <div class="col-md-1">
                  <h2>+</h2>
                </div>
              </div>

              <!-- <section class="price-section"> -->
                <div class="collapse mt-4 Price" id="Price">
                  <h4 class="text-primary mb-4">렌탈료</h4>
                  <table border="1" style="border-collapse: collapse; width: 100%;">
                    <tr>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">모델명</td>
                      <td h5 class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">관리방식</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">약정기간</td>
                      <td h5 class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">렌탈료</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">신상품 재렌탈</td>
                      <td h5 class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">일시불액</td>
                    </tr>
                    <tr>
                      <td rowspan="2" class="mt-2 mb-1" style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productModel}} &nbsp;({{detailProduct.productColor }})</td>
                      <td rowspan="2" style="text-align: center; border: 1px solid black; padding: 10px;">방문관리</td>
                      <td class="mt-2 mb-1" style="text-align: center; border: 1px solid black; padding: 10px;">3년 약정</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{(detailProduct.productRentalPrice).toLocaleString()}}원</td>
                      <td class="mt-2 mb-" style="text-align: center; border: 1px solid black; padding: 10px;">{{(detailProduct.productRentalPrice - 4700).toLocaleString()}}원</td>
                      <td rowspan="2" style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productPrice.toLocaleString()}}원</td>
                    </tr>
                    <tr>
                      <td class="mt-2 mb-1" style="text-align: center; border: 1px solid black; padding: 10px;">6년 약정</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{(detailProduct.productRentalPrice - 4000).toLocaleString()}}원</td>
                      <td class="mt-2 mb-1" style="text-align: center; border: 1px solid black; padding: 10px;">{{(detailProduct.productRentalPrice - 4000 - 4300).toLocaleString()}}원</td>
                    </tr>
                  </table>
                  <br><br>

                  <h4 class="text-primary mb-4">렌탈료 총액</h4>
                  <table border="1" style="border-collapse: collapse; width: 100%;">
                    <tr>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">모델명</td>
                      <td h5 class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">관리방식</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">약정기간</td>
                      <td h5 class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">총액</td>
                    </tr>
                    <tr>
                      <td rowspan="3" class="mt-2 mb-1" style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productModel}} &nbsp;({{detailProduct.productColor }})</td>
                      <td rowspan="3" style="text-align: center; border: 1px solid black; padding: 10px;">방문관리</td>
                      <td class="mt-2 mb-1" style="text-align: center; border: 1px solid black; padding: 10px;">3년 (의무사용기간)</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{(detailProduct.productRentalPrice*36+100000).toLocaleString()}}원</td>
                    </tr>
                    <tr>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">5년 (소유권 이전)</td>
                      <td class="mt-2 mb-1" style="text-align: center; border: 1px solid black; padding: 10px;">{{((detailProduct.productRentalPrice-2000)*60).toLocaleString()}}원</td>
                    </tr>
                    <tr>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">6년 (의무사용기간/ 소유권 이전)</td>
                      <td class="mt-2 mb-1" style="text-align: center; border: 1px solid black; padding: 10px;">{{((detailProduct.productRentalPrice-4000)*72).toLocaleString()}}원</td>
                    </tr>
                  </table>
                  <br>
                  <!-- <h4 class="text-primary mb-4">소유권 이전 및 재렌탈 안내</h4>
                  <table border="1" style="border-collapse: collapse; width: 100%;">
                    <tr>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">모델명</td>
                      <td h5 class="mt-2 mb-1" style="text-align: center; border: 1px solid black; padding: 10px;">관리방식</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">약정기간</td>
                      <td h5 class="mt-2 mb-1" style="text-align: center; border: 1px solid black; padding: 10px;">렌탈료</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">신상품 재렌탈</td>
                      <td h5 class="mt-2 mb-1" style="text-align: center; border: 1px solid black; padding: 10px;">일시불액</td>
                    </tr>
                    <tr>
                      <td rowspan="2" class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productModel}} &nbsp;({{detailProduct.productColor }})</td>
                      <td rowspan="2" style="text-align: center; border: 1px solid black; padding: 10px;">방문관리</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">3년 약정</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{(detailProduct.productRentalPrice).toLocaleString()}}원</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">{{(detailProduct.productRentalPrice - 4700).toLocaleString()}}원</td>
                      <td rowspan="2" style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productPrice.toLocaleString()}}원</td>
                    </tr>
                    <tr>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">6년 약정</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{(detailProduct.productRentalPrice - 4000).toLocaleString()}}원</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">{{(detailProduct.productRentalPrice - 4000 - 4300).toLocaleString()}}원</td>
                    </tr>
                  </table> -->
                </div>
            </div>
            
  
            <!-- 리뷰 -->
            <div class="text-block">
              <div class="row" data-bs-toggle="collapse" data-bs-target="#Reviews" aria-expanded="false" aria-controls="Reviews">
                <div class="col-md-11">
                  <h2>리뷰 (<span class="h2 text-primary">{{reviewTotal}}</span>)</h2>
                </div>
                <div class="col-md-1">
                  <h2>+</h2>
                </div>
              </div>
              <!-- <h2 data-bs-toggle="collapse" data-bs-target="#Reviews" aria-expanded="false" aria-controls="Reviews">+ Reviews (<i class="fa fa-xs fa-star text-primary"></i>&nbsp;{{ avgStar }})</h2>--> 
               
              <!-- <p class="mb-3 mb-md-0" style="text-align: center;"><strong><span class="h5 text-primary">{{reviewTotal}}</span></strong> &nbsp;개의 리뷰가 있습니다</p> 
              <h3 class="mb-4" style="text-align: center;">리뷰 평점 <i class="fa fa-xs fa-star text-primary"></i>&nbsp;{{ avgStar }}</h3> 
              <br>
              <button class="btn btn-outline-primary" type="button" style="text-align: center;">리뷰 남기기</button> -->

              <!-- 리뷰 작성 ============== -->
              <!-- <div>
                <button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#leaveReview" aria-expanded="false" aria-controls="leaveReview">Leave a review</button>
                <div class="collapse mt-4" id="leaveReview">
                  <h5 class="mb-4">Leave a review</h5>
                  <form class="form" id="contact-form" method="get" action="#">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="mb-4">
                          <label class="form-label" for="name">Your name *</label>
                          <input class="form-control" type="text" name="name" id="name" placeholder="Enter your name" required="required">
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="mb-4">
                          <label class="form-label" for="rating">Your rating *</label>
                          <select class="form-select focus-shadow-0" name="rating" id="rating">
                            <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733; (5/5)</option>
                            <option value="4">&#9733;&#9733;&#9733;&#9733;&#9734; (4/5)</option>
                            <option value="3">&#9733;&#9733;&#9733;&#9734;&#9734; (3/5)</option>
                            <option value="2">&#9733;&#9733;&#9734;&#9734;&#9734; (2/5)</option>
                            <option value="1">&#9733;&#9734;&#9734;&#9734;&#9734; (1/5)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="mb-4">
                      <label class="form-label" for="email">Your email *</label>
                      <input class="form-control" type="email" name="email" id="email" placeholder="Enter your  email" required="required">
                    </div>
                    <div class="mb-4">
                      <label class="form-label" for="review">Review text *</label>
                      <textarea class="form-control" rows="4" name="review" id="review" placeholder="Enter your review" required="required"></textarea>
                    </div>
                    <button class="btn btn-primary" type="submit">Post review</button>
                  </form>
                </div>
              </div> -->

              <!-- ============== -->
              <!-- <section class="review-section"> -->
              <div class="collapse mt-4 review" id="Reviews">
                <div style="text-align: center;">
                <br>
                <h3 class="mb-4">사용자 리뷰 평점</h3> 
                <h3><i class="fa fa-xs fa-star text-primary"></i>&nbsp;{{ avgStar }}</h3><br>
                <!-- <button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#leaveReview">리뷰 남기기</button> -->
                <div class="collapse mt-4" id="leaveReview">
                  <h5 class="mb-4">Leave a review</h5>
                  <form class="form" id="contact-form" method="get" action="#">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="mb-4">
                          <label class="form-label" for="name">Your name *</label>
                          <input class="form-control" type="text" name="name" id="name" placeholder="Enter your name" required="required">
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="mb-4">
                          <label class="form-label" for="rating">Your rating *</label>
                          <select class="form-select focus-shadow-0" name="rating" id="rating">
                            <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733; (5/5)</option>
                            <option value="4">&#9733;&#9733;&#9733;&#9733;&#9734; (4/5)</option>
                            <option value="3">&#9733;&#9733;&#9733;&#9734;&#9734; (3/5)</option>
                            <option value="2">&#9733;&#9733;&#9734;&#9734;&#9734; (2/5)</option>
                            <option value="1">&#9733;&#9734;&#9734;&#9734;&#9734; (1/5)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="mb-4">
                      <label class="form-label" for="email">Your email *</label>
                      <input class="form-control" type="email" name="email" id="email" placeholder="Enter your  email" required="required">
                    </div>
                    <div class="mb-4">
                      <label class="form-label" for="review">Review text *</label>
                      <textarea class="form-control" rows="4" name="review" id="review" placeholder="Enter your review" required="required"></textarea>
                    </div>
                    <button class="btn btn-primary" type="submit">Post review</button>
                  </form>
                </div>
              </div>

                <!-- <div class="text-block" :value="review.reviewNo" :key="review.reviewNo" v-for="review in reviews">
                  <div class="text-md-center flex-shrink-0 me-4 me-xl-5"><img class="d-block avatar avatar-xl p-2 mb-2" v-bind:src="review.reImageUrl"><span class="text-uppercase text-muted text-sm">{{new Date(review.reDate).toLocaleDateString()}}</span></div>

                  <div>
                    <h6 class="mt-2 mb-1">{{review.member.memName}}</h6>
                    <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i></div>
                    <div class="mb-2"><i v-for="n in review.reStar" :key="n" class="fa fa-xs fa-star text-primary"></i></div>
                    <p class="text-muted text-sm">{{ review.reContent }}</p>
                  </div>
                </div> -->

                <!-- <div class="text-block" :value="review.reviewNo" :key="review.reviewNo" v-for="review in reviews">
                  <div class="row">
                    <div class="col-md-4 mb-3 mb-md-0"><img class="d-block avatar avatar-xl p-2 mb-2" v-bind:src="review.reImageUrl"></div>
                    <div class="col-md-8">
                      <h6 class="mt-2 mb-1">{{review.member.memName}}</h6>
                      <div class="mb-2"><i v-for="n in review.reStar" :key="n" class="fa fa-xs fa-star text-primary"></i></div>
                      <span class="text-uppercase text-muted text-sm">{{new Date(review.reDate).toLocaleDateString()}}</span>
                      <p class="text-muted text-sm">{{ review.reContent }}</p>
                    </div>
                  </div>
                </div> -->

                <div class="text-block d-flex row align-items-start mb-4" :value="review.reviewNo" :key="review.reviewNo" v-for="review in reviews">
                  <div class="row">
                    <div class="col-md-4 mb-3 mb-md-0"><img class="d-block avatar rounded-0" v-bind:src="review.reImageUrl" alt="avatar" style="width: 200px; height: 260px;"></div>
                    <div class="col-md-8">
                      <h6 class="mt-2 mb-1">{{review.member.memName}}</h6>
                      <div class="mb-2">
                        <i v-for="n in parseInt(review.reStar)" :key="n" class="fa fa-star text-primary"></i>
                        <i v-if="parseFloat(review.reStar) !== parseInt(review.reStar)" class="fa fa-star-half-o text-primary"></i>
                      </div>
                    <span class="text-uppercase text-muted text-sm">{{new Date(review.reDate).toLocaleDateString()}}</span>
                    <p class="text-muted text-sm">{{ review.reContent }}</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>

            <!-- 문의 -->
            <div class="text-block">
              <div class="row" data-bs-toggle="collapse" data-bs-target="#Questions" aria-expanded="false" aria-controls="Questions">
                <div class="col-md-11">
                  <h2>상품 문의 (<span class="h2 text-primary">{{inquiryTotal}}</span>)</h2>
                </div>
                <div class="col-md-1">
                  <h2>+</h2>
                </div>
              </div>
              <!-- <h2 data-bs-toggle="collapse" data-bs-target="#Questions" aria-expanded="false" aria-controls="Questions">+ Questions</h2> -->
              <!-- <p class="mb-3 mb-md-0"><strong><span class="h5 text-primary">{{inquiryTotal}}</span></strong> &nbsp;개의 문의가 있습니다</p> -->
            
              <!-- ============== -->
              <!-- 문의 작성 ============== -->
              <div class="collapse mt-4 question" id="Questions" >
                <br>
                <div class="mb-5 pb-3" style="text-align: center;">
                  <button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#leaveQuestion" aria-expanded="false" aria-controls="leaveQuestion" >문의하기</button>
                </div>
                <div class="collapse mt-4" id="leaveQuestion" style="text-align: center; width: 50%; margin: 0 auto;">
                    <!-- <h5 class="mb-4">문의하실 제목과 내용을 작성하신 후 [작성하기] 버튼을 클릭하세요 :)</h5> -->
                    <div>
                    <form @submit.prevent="submitInquiry" class="form" name="inquiry-register" id="inquiry-form">
                      <div class="mb-4">
                        <label class="form-label" for="questiontitle" style="font-weight: bold; font-size: 16px;">문의 제목</label>
                        <input class="form-control" v-model="qna.proqTitle" name="questionTitle" type="text" id="questionTitle" placeholder="문의 제목" required="required" autocomplete="off"/>
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="questionContent" style="font-weight: bold; font-size: 16px;">문의 내용</label>
                        <textarea class="form-control" v-model="qna.proqContent" rows="4" name="questionContent" type="text" id="questionContent" placeholder="문의 내용" required="required" autocomplete="off"></textarea>
                      </div>
                      <!-- <div class="row" style="text-align: left;">
                        <div class="col-sm-6">
                          <div class="mb-4">
                            <label class="form-label" for="name">작성자 |</label>
                            &nbsp;&nbsp;&nbsp;<label>메타몽</label>
                          </div>
                          <div class="mb-4">
                            <label class="form-label" for="email">이메일 |</label>
                            &nbsp;&nbsp;&nbsp;<span>metamong@naver.com</span>
                          </div>
                          <div class="mb-4">
                            <label class="form-label" for="phone">휴대폰 |</label>
                            &nbsp;&nbsp;&nbsp;<span>010-2685-2139</span>
                          </div>
                        </div>
                      </div> -->
                      <div class="row" style="text-align: left;">
                        <div class="col-sm-6">
                          <div class="mb-4">
                            <label class="form-label" for="name">작성자 |</label>
                            &nbsp;&nbsp;&nbsp;<label>{{memName}}</label>
                          </div>
                          <div class="mb-4">
                            <label class="form-label" for="email">이메일 |</label>
                            &nbsp;&nbsp;&nbsp;<span>{{memEmail}}</span>
                          </div>
                          <div class="mb-4">
                            <label class="form-label" for="phone">휴대폰 |</label>
                            &nbsp;&nbsp;&nbsp;<span>{{memPhone}}</span>
                          </div>
                        </div>
                      </div>
                      <div class="mb-5 pb-3" style="text-align: center;">
                        <button type="submit" class="btn btn-primary">문의 작성하기</button>
                      </div>
                    </form>
                  </div>
                </div>
                <br>
                <div class="text-block" :value="inquiry.proqNo" :key="inquiry.proqNo" v-for="inquiry in inquirys">
                  <div class="row">
                    <div class="col-md-2">
                      <p class="text-muted text-sm">문의 상태</p>
                    </div>
                    <div class="col-md-5">
                      <p class="text-muted text-sm">문의 제목</p>
                    </div>
                    <div class="col-md-2">
                      <p class="text-muted text-sm">작성자</p>
                    </div>
                    <!-- <div class="col-md-4">
                      <p class="text-muted text-sm">{{ inquiry.proqContent }}</p>
                    </div> -->
                    <div class="col-md-3">
                      <p class="text-muted text-sm">문의 일시</p>
                      <!-- <p class="text-muted text-sm">{{ formattedDate(inquiry.proqDate) }}</p> -->
                    </div>
                  </div>
      
                  <div class="row">
                    <div class="col-md-2">
                      <h5 class="mt-2 mb-1 text-primary">{{ inquiry.proqState }}</h5>
                    </div>
                    <div class="col-md-5">
                      <h5 class="mt-2 mb-1">{{ inquiry.proqTitle }}</h5>
                    </div>
                    <div class="col-md-2">
                      <h6 class="mt-2 mb-1">{{inquiry.member.memName}}</h6>
                    </div>
                    <!-- <div class="col-md-4">
                      <p class="text-muted text-sm">{{ inquiry.proqContent }}</p>
                    </div> -->
                    <div class="col-md-3">
                      <h5 class="mt-2 mb-1 text-muted text-sm">{{ new Date(inquiry.proqDate).toLocaleDateString() }}</h5>
                      <!-- <p class="text-muted text-sm">{{ formattedDate(inquiry.proqDate) }}</p> -->
                    </div>
                    <br><br>
                    <!-- <h5 style="text-align: center" data-bs-toggle="collapse" data-bs-target="#QuestionDetail" aria-expanded="false" aria-controls="QuestionDetail">+ 더보기</h5>
                      <div class="collapse mt-4 questionDetail" id="QuestionDetail">
                        <div class="row">
                          <div class="col-md-4">
                            <p class="text-muted text-sm">문의 상세 내용</p>
                          </div>
                          <div class="col-md-8">
                            <h5 class="mt-2 mb-1">{{ inquiry.proqContent }}</h5>
                          </div>
                        </div>
                      </div> -->
  
                      <div class="col-md-2">
                        <p class="text-muted text-sm">문의 상세 내용</p>
                      </div>
                      <div class="col-md-10">
                        <h6 class="mt-2 mb-1">{{ inquiry.proqContent }}</h6>
                      </div>
                  </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
  
      </body>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref, onMounted, mounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import Swal from 'sweetalert2';
  
  export default {
  data() {
    return {
      orderType: '2', // 구매타입 default는 렌탈
      contractLength: '3', // 약정기간 default는 3년
      };
    },

  //v-if 로 orderType, contractLength 선택에 따라 다른 값 보여주기
  computed: {
    showOrderButton() {
      return this.orderType === '1' || this.orderType === '2'
    },
    showPurchasePrice() {
      //타입을 구매로 선택하면 구매금액만 보여주기
      return this.orderType === '2'; 
    },
    showContractLength() {
      //타입을 렌탈로 선택하면 약정기간 선택란 보여주기
      return this.orderType === '1'; 
    },
    showRentalPrice() {
      //타입으로 렌탈을 선택하고 약정기간까지 선택하면 해당 렌탈금액 보여주기
      return this.orderType === '1' && this.contractLength !== ''; 
    },
    rentalPrice() {
      //약정기간을 선택하지 않으면 가격은 default
      if (this.contractLength === '') {
        return '';
      }

      const rentalPrice = this.detailProduct.productRentalPrice;
      const contractLength = Number(this.contractLength);

      if (contractLength === 3) { //3년
        return `월 ~ ${rentalPrice.toLocaleString()}원`;
      } else if (contractLength === 6) { //6년
        return `월 ~ ${(rentalPrice - 4000).toLocaleString()}원`;
      } else {
        return '';
      }
    },
    isAllOptionsSelected() {
      return this.orderType && this.contractLength
    },
  },

  setup() {
    const route = useRoute();
    const router = useRouter();
    const Swal = require('sweetalert2');

    //const detailProduct = ref(null);
    //const detailProduct = ref([]);
    const review = ref('');
    const reviews = ref([]);
    const inquiry = ref('');
    const inquirys = ref([]);
    const reviewTotal = ref(0);
    const inquiryTotal = ref(0);
    const qna = ref([]);
    const detailProduct = ref({
      productName: '',
      productModel: '',
      productFunction: '',
      productPrice: 0,
      productRentalPrice: 0,
    });
    
    const productNo = route.query.pno;
    console.log("detail page : "+productNo);
    const memNo = sessionStorage.getItem('memNo');
    console.log("sessionStorage에서 가져온 값 : " + memNo);
    const memName = sessionStorage.getItem('memName');
    const memEmail = sessionStorage.getItem('memEmail');
    const memPhone = sessionStorage.getItem('memPhone');

    const getProductDetail = async() => {
      console.log("해당 상품 받아와??");
      console.log("상품 번호: "+productNo);
      //const res = await axios.get('/product/' +productNo);
      const res = await axios.get(`/product/${productNo}`);
      console.log(res.data);
      detailProduct.value = {...res.data};
      
      console.log("11111");
      console.log(detailProduct.value);
    }

    const getReviewList = async() => {
      console.log("리뷰 받아와??");
      //const res = await axios.get('/product/' +productNo+ '/reviews');
      const res = await axios.get(`/product/${productNo}/reviews`);
      console.log(res.data);
      reviews.value = res.data;
      reviewTotal.value = reviews.value.length;
    }

    const avgStar = ref(0);

    const getReviewStar = async() => {
      //const avg = await axios.get('/product/' +productNo+ '/reviewStar');
      const avg = await axios.get(`/product/${productNo}/reviewStar`);
      console.log(avg.data);
      avgStar.value = avg.data;
    } 

    const getInquiryList = async() => {
      console.log("문의 받아와??");
      //const res = await axios.get('/product/' +productNo+ '/proQna');
      const res = await axios.get(`/product/${productNo}/proQna`);
      console.log(res.data);
      inquirys.value = res.data;
      inquiryTotal.value = inquirys.value.length;
      console.log("문의 개수:" +inquiryTotal.value);
    }

    const submitInquiry = async() => {
      console.log(qna.value);
      console.log(productNo);
      const data = {
        proqTitle : qna.value.proqTitle,
        proqContent: qna.value.proqContent
      }
      console.log("data" + data.proqTitle);
      //if(data=null) alert("문의를 작성해주세요");
      try{  ///{productNo}/{memNo}/qnaInsert
        //const res = await axios.post('/product/' +productNo+ '/qnaInsert', data);
        //const res = await axios.post('/product/' +productNo+ '/' +memNo+ '/qnaInsert', data);
        const res = await axios.post(`/product/${productNo}/${memNo}/qnaInsert`, data);
        if(res != null) {
          //alert("문의가 등록되었습니다");
          Swal.fire({
            icon: 'success',
            title: '문의가 등록되었습니다',
          })
          //router.push(route.path)
          window.location.reload();  //현재 페이지 reload
        } 
      } catch(error) {
        console.error(error);
        //alert("문의 등록에 실패하였습니다.")
        Swal.fire({
          icon: 'error',
          title: '문의 내용을 모두 입력하세요',
        })
      }
    }

    //구매 페이지로 선택한 상품번호 갖고 이동
    const orderPurchase = async() => {
      router.push({
        name: 'Order',
        query: {
          pno: productNo
        }
      })
    }

    //렌탈 페이지로 선택한 상품번호/계약기간 갖고 이동
    const orderRental = async() => {
      router.push({
        name: 'Rental',
        query: {
          pno: productNo,
          length: contractLength.value
        }
      })
    }
    
    //상품 상세 페이지 렌더링시 상품정보/리뷰/리뷰평점/문의 바로 가져오기
    onMounted(() => {
      getProductDetail();
      getReviewList();
      getReviewStar();
      getInquiryList();
    });
    
  return {
    route,
    router,
    detailProduct,
    review,
    reviews,
    reviewTotal,
    avgStar,
    inquiry,
    inquirys,
    inquiryTotal,
    qna,
    submitInquiry,
    orderRental,
    orderPurchase,
    memNo,
    memName,
    memEmail,
    memPhone,
  }

  }
}
  </script>
  
  <style>
  
  </style>