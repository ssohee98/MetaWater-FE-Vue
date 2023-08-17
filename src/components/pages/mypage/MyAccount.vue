<template>
    <section class="py-5 mt-6">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 me-lg-auto mt-5" style="text-align:left">
                <MypageSidebar></MypageSidebar>
            </div>
            <div class="col-lg-9 ps-lg-5 mt-3" style="text-align:left">
                


              <div class="col-lg-7 mb-5 mb-lg-0">
            <div class="text-block"> 
              <div class="row mb-3">
                <div class="col-sm-9">
                  <h5>회원 정보 관리</h5>
                </div>
                <!-- <div class="col-sm-3 text-end">
                  <button class="btn btn-link ps-0 text-primary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#personalDetails" aria-expanded="false" aria-controls="personalDetails">Update</button>
                </div> -->
              </div>
              <p class="text-sm text-muted"><i class="fa fa-id-card fa-fw me-2"></i>{{detailMember.memName}}<br>
                <!-- <i class="fa fa-birthday-cake fa-fw me-2"></i>{{detailMember.memEmail}}<br> -->
                <i class="fa fa-envelope-open fa-fw me-2"></i> {{detailMember.memPhone}}<span class="mx-2"> | </span> 
                 <i class="fa fa-phone fa-fw me-2"></i>{{detailMember.memEmail}}</p>
              <!-- <div class="collapse" id="personalDetails"> -->

                                <form @submit.prevent="updateMember" class="form">
                                <div class="row pt-4">
                                    <div class="mb-4 col-md-6">
                                    <label class="form-label" for="memName">이름</label>
                                    <input class="form-control" type="text" name="memName"  id="memName" placeholder="최소 4글자 이상" v-model="detailMember.memName">
                                    </div>
                                    <div class="mb-4 col-md-6">
                                    <label class="form-label" for="memPhone">전화번호</label>
                                    <input class="form-control" type="tel" name="memPhone" id="memPhone" v-model="detailMember.memPhone">
                                    </div>
                                    <div class="mb-4 col-md-6">
                                    <label class="form-label" for="memEmail">이메일</label>
                                    <input class="form-control" type="email" name="memEmail" id="memEmail" v-model="detailMember.memEmail">
                                    </div>
                                </div>
                                <button class="btn btn-outline-primary mb-4" type="submit">변경사항 저장</button>
                                </form>
              <!-- </div> -->
            </div>
            <div class="text-block"> 
              <div class="row mb-3">
                <div class="col-sm-9">
                  <h5>계정삭제</h5>
                </div>
                <!-- <div class="col-sm-3 text-end">
                  <button class="btn btn-link ps-0 text-primary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#address" aria-expanded="false" aria-controls="address">Change</button>
                </div> -->
              </div>
              <div class="d-flex text-sm text-muted"> <i class="fa fa-address-book fa-fw flex-shrink-0 me-2"></i>
                <div class="mt-n1">삭제 된 계정은 복원 할 수 없습니다!! 귀하의 계정은 시스템에서 영구적으로 삭제됩니다. 다시 한 번 생각해주세요</div>
              </div>
              <!-- <div class="collapse" id="address"> -->
                <form  @submit.prevent="deleteMember" class="form">>
                  <div class="row pt-4">
                    <!-- <div class="mb-4 col-md-6">
                      <label class="form-label" for="street">Street</label>
                      <input class="form-control" type="text" name="street" id="street" value="123 Main St.">
                    </div> -->
                    <!-- <div class="mb-4 col-md-6">
                      <label class="form-label" for="apt">Apt. (optional)</label>
                      <input class="form-control" type="text" name="apt" id="apt" value="Apt #7">
                    </div>
                    <div class="mb-4 col-md-6">
                      <label class="form-label" for="city">City</label>
                      <input class="form-control" type="text" name="city" id="city" value="San Francisco">
                    </div>
                    <div class="mb-4 col-md-6">
                      <label class="form-label" for="state">State</label>
                      <select class="selectpicker form-control" name="state" id="state" data-style="btn-selectpicker">
                        <option value="state_0">Alabama    </option>
                        <option value="state_1">Alaska    </option>
                        <option value="state_2">Arizona    </option>
                        <option value="state_3">Arkansas    </option>
                        <option value="state_4" selected>California    </option>
                        
                        <option value="state_47">West Virginia    </option>
                        <option value="state_48">Wisconsin    </option>
                        <option value="state_49">Wyoming    </option>
                      </select>
                    </div> -->
                    <div class="mb-4 col-md-12">
                      <label class="form-label" for="password">보안 상의 이유로 현재 비밀번호가 필요합니다</label>
                      <input class="form-control" type="password" name="pw" id="pw" v-model="deleteState.password" >
                    </div>
                  </div>
                  <button class="btn btn-outline-primary" type="submit">회원 탈퇴</button>
                </form>
              <!-- </div> -->
            </div>
          </div>
                
                
            </div>
        </div>
    </div>
    </section>
</template>

<script>
import axios from "axios";
import {ref,onMounted} from "vue";
import { useRouter } from 'vue-router';
import MypageSidebar from "./MypageSidebar.vue";

export default {

   setup(){
    const router = useRouter();
    const detailMember = ref({
        memId:'',
        memName: '',
        memPhone: '',
        memEmail: '',
    });
    const Swal = require('sweetalert2');


    const deleteState = ref({
              form: {
                password: "",
              },
          })

    const id = sessionStorage.getItem("memId"); 
    console.log("detailMember memId확인" + sessionStorage.getItem("memId"));


    // 회원 삭제
    const deleteMember  = () => {
        console.log("이건 실행되는 건가?");
        const id = sessionStorage.getItem("memId"); 
        console.log("detailMember memId확인" + detailMember.value.memId);
               console.log("---detailMember memId확인---" + id);
        console.log(" detailMember 삭제된 데이터 " +deleteState.value.password);
        const pw = deleteState.value.password;
        //form에서 가져온 데이터!!!!????
        const data = {
            memId : id,
            memPw : pw,
      }
      // data.value.memId = id;
      // data.value.memPw = deleteState.value.password;

                  axios.post('/auth/delete',data).then((response) => {
                    Swal.fire({
                        title: 'Success!',
                        text: '탈퇴처리가 완료되었습니다.',
                        icon: 'success',
                        // confirmButtonText: 'OK'
                        showConfirmButton: false,
                        timer: 1500
                            }).then(() => {
                              sessionStorage.clear();
                                location.reload();
                                window.location.href = '/'
                                    // SweetAlert(Swal)의 OK 버튼을 클릭하면 메인 페이지로 이동합니다.
                                    //router.push('/');
                            });
                    console.log("삭제된 메서드 실행이 잘 되나교? 왜 안된는 화깅ㄴ");
                            console.log("받아온 데이터: "+ (response.data.memId));
                            console.log("받아온 데이터: "+ (response.data.memPw));
            })
            // .catch((error) => {
            //         Swal.fire({
            //             icon: 'error',
            //                 title: 'Error!',
            //                 html: '비밀번호를 잘못 입력했습니다.<br>입력하신 내용을 다시 확인해주세요',
            //                 showConfirmButton: false,
            //                 timer: 1500
            //             });
            //     });     
    }
    
    //회원 수정
    const updateMember = () => {
        console.log("이건 실행되는 건가?");
        console.log(detailMember.value)
        detailMember.value.memId = id;
        console.log("이건 실행되는 건가? memId  -- " + detailMember.value.memId)
        const data = {
            memId : detailMember.value.memId,
            memName :  detailMember.value.memName,
            memPhone :  detailMember.value.memPhone,
            memEmail :  detailMember.value.memEmail

      }
      console.log("수정된 데이터 확인" + detailMember.value.memId);
        console.log("수정된 데이터 확인" + detailMember.value.memName);
        console.log("수정된 데이터 확인" + detailMember.value.memPhone);
        console.log("수정된 데이터 확인" + detailMember.value.memEmail);

        
    axios.post("/auth/update",data).then(() =>{
    //   console.log("업데이트 된 데이터 가져오기 response "+response.value);
    //   if()
      Swal.fire({
                        title: 'Success!',
                        text: '수정이 완료되었습니다.',
                        icon: 'success',
                        // confirmButtonText: 'OK'
                        showConfirmButton: false,
                        timer: 1500
                            }).then(() => {
                                location.reload();
                                // window.location.href = '/'
                                    // SweetAlert(Swal)의 OK 버튼을 클릭하면 메인 페이지로 이동합니다.
                                    //router.push('/');
                            });
    });

    }

    
    // const id = sessionStorage.getItem("memId");

    const getMemberDetail = async() => {
            console.log("memId확인" + sessionStorage.getItem("memId"));
            axios.get(`/auth/members/${id}`).then((response) => {
                detailMember.value = {...response.data}
                console.log("받아온 데이터: "+ (response.data.memName));
                console.log("받아온 데이터: "+ (response.data.memEmail));
                console.log("받아온 데이터: "+ (response.data.memPhone));
            });
        }

        getMemberDetail();
        //상세 페이지 바로 가져오기
     onMounted(() => {
        getMemberDetail
    });
      
  

    return {
        id,
        detailMember,
        deleteState,
        getMemberDetail,
        updateMember,
        deleteMember
    }
    
  },
  components: { MypageSidebar }
}

</script>

<style>

</style>