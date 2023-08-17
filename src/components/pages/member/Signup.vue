<template>
    <div class="container px-3">
          <div class="row min-vh-100 justify-content-center">
              <div class="d-flex" style="width:700px;">
                  <div class="w-100 py-5 px-md-5 px-xxl-6 mt-5 position-relative">
                      <div class="mb-4">
                        <img class="img-fluid mb-5" src="../../../../public/html/img/metawater-logo.png" alt="..." style="max-width: 15rem;">
                          <h2 class="mb-4">회원가입</h2>
                         
                      </div>
                      <form  @submit.prevent="signUp" class="form-validate">
                          <div class="mb-4">
                              <label class="form-label" for="memId" style="text-align:left;" autocomplete="off"> 아이디</label>
                              <div class="row">
                              <input class="form-control col-8 ml-2" name="memId" id="memId" placeholder="영어/숫자 조합 4-20글자" type="text" v-model="state.form.memId" required pattern="[A-Za-z0-9]{4,20}" autocomplete="off">
                              
                              <button class="btn btn-sm btn-secondary col-3 mx-2" @click="register" >아이디중복체크</button>
                            </div>
                            </div>
                          <div class="mb-4">
                              <label class="form-label" for="memPw" autocomplete="off"> 비밀번호 </label>
                              <input class="form-control" name="memPw" id="memPw" placeholder="최소 4글자 이상" type="password" v-model="state.form.memPw" required minlength="4">
                          </div>
                          <div class="mb-4">
                              <label class="form-label" for="memName" autocomplete="off"> 이름</label>
                              <input class="form-control" name="memName" id="memName" placeholder="" type="text" v-model="state.form.memName">
                          </div>
                           <div class="mb-4"> 
                              <label class="form-label" for="memPhone" autocomplete="off"> 전화번호</label>
                              <input class="form-control" name="memPhone" id="memPhone" placeholder="" type="tel" v-model="state.form.memPhone">
                          </div>
                          <div class="mb-4">
                              <label class="form-label" for="memEmail" autocomplete="off"> 이메일 등록</label>
                              <input class="form-control" name="memEmail" id="loginUsername" type="email" v-model="state.form.memEmail" placeholder="name@address.com">
                          </div>
                          <div class="d-grid gap-2">
                              <button class="btn btn-lg btn-primary" type="submit">가입하기</button>
                          </div>
                      </form><a class="close-absolute me-md-5 me-xl-6 pt-5" href="index.html">
                      <svg class="svg-icon w-3rem h-3rem">
                          <use xlink:href="#close-1"> </use>
                      </svg></a>
                  </div>
              </div>
          </div>
      </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
      setup(){
          const router = useRouter();
          const state = reactive({
              members: [],
              form: {
                  memId: "",
                  memPw: "",
                  memName: "",
                  memPhone: "",
                  memEmail: ""
              },
          })

          const Swal = require('sweetalert2');

          const register = () =>{
            console.log("memId확인" + state.form.memId);
            const id = state.form.memId;
            axios.get(`/auth/members/${id}`).then((response) => {
                            console.log("받아온 데이터: "+ (response.data.auth));
                            console.log("받아온 데이터: "+ (response.data.memId));
                            console.log("받아온 데이터: "+ (response.data.memPw));

                if(response.data.memId == null){
                    Swal.fire({
                            title: 'Success',
                            text: '사용할 수 있는 아이디 입니다.',
                            icon: 'success',
                            // confirmButtonText: 'OK'
                            showConfirmButton: false,
                            timer: 1800
                        })
                    }else{
                        Swal.fire({
                            title: 'Error!',
                            text: '중복된 아이디가 있습니다 다시 확인해주세요!',
                            icon: 'error',
                            // confirmButtonText: 'OK'
                            showConfirmButton: false,
                            timer: 2000
                                })
                    }
            });
        }
  
          const signUp = () => {
              console.log("memId확인" + state.form.memId);
              console.log("memPw확인" + state.form.memPw);
              console.log("memNamet확인" + state.form.memName);
              console.log("memPhone확인" + state.form.memPhone);
              console.log("memEmail확인" + state.form.memEmail);
  
              const args = JSON.parse(JSON.stringify(state.form));
              axios.post("/auth/signup", args).then(() => {
                  Swal.fire({
                        title: 'Success!',
                        text: '회원가입 완료!',
                        icon: 'success',
                        // confirmButtonText: 'OK'
                        showConfirmButton: false,
                        timer: 1500
                            }).then(() => {
                                router.push({path: "/login"})
                                // location.reload();
                                // window.location.href = '/Login'
                                    // SweetAlert(Swal)의 OK 버튼을 클릭하면 메인 페이지로 이동합니다.
                                    //router.push('/');
                            });
              })
          }
        //   router.push({path: "/login"})
          return{
              state,
              signUp,
              register
          }
      }
  }
  </script>
  
  <style>
  
  </style>