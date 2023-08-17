<template>
  <div class="container-fluid px-3">
        <div class="row min-vh-100">
            <div class="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
                <div class="w-100 py-5 px-md-5 px-xxl-6 position-relative">
                    <div class="mb-4"><img class="img-fluid mb-4" src="img/logo-square.svg" alt="..." style="max-width: 4rem;">
                        <h2>회원가입</h2>
                        <p class="text-muted">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.</p>
                    </div>
                    <form  @submit.prevent="signUp" class="form-validate">
                        <div class="mb-4">
                            <label class="form-label" for="memId"> 아이디<span class='fs-sm text-muted'>&nbsp;&nbsp;영어/숫자&nbsp;조합&nbsp;4-20글자</span></label>
                            <input class="form-control" name="memId" id="memId" placeholder="" type="text" v-model="state.form.memId" required pattern="[A-Za-z0-9]{4,20}" autocomplete="off">
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="memPw"> 비밀번호 <span class='fs-sm text-muted'>&nbsp;&nbsp;최소 4글자 이상</span></label>
                            <input class="form-control" name="memPw" id="memPw"  type="password" v-model="state.form.memPw" required minlength="4">
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="memName"> 이름</label>
                            <input class="form-control" name="memName" id="memName" placeholder="" type="text" v-model="state.form.memName">
                        </div>
                         <div class="mb-4"> 
                            <label class="form-label" for="memPhone"> 전화번호</label>
                            <input class="form-control" name="memPhone" id="memPhone" placeholder="" type="tel" v-model="state.form.memPhone">
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="memEmail"> 이메일 등록</label>
                            <input class="form-control" name="memEmail" id="loginUsername" type="email" v-model="state.form.memEmail" placeholder="name@address.com">
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-lg btn-primary" type="submit">가입하기</button>
                        </div>
                        <hr class="my-3 hr-text letter-spacing-2" data-content="OR">
                        <div class="d-grid gap-2">
                            <button class="btn btn btn-outline-primary btn-social"><i class="fa-2x fa-facebook-f fab btn-social-icon"> </i>Connect <span class="d-none d-sm-inline">with Facebook</span></button>
                            <button class="btn btn btn-outline-muted btn-social"><i class="fa-2x fa-google fab btn-social-icon"> </i>Connect <span class="d-none d-sm-inline">with Google</span></button>
                        </div>
                        <hr class="my-4">
                        <p class="text-sm text-muted">By signing up you agree to Directory's <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.</p>
                    </form><a class="close-absolute me-md-5 me-xl-6 pt-5" href="index.html">
                    <svg class="svg-icon w-3rem h-3rem">
                        <use xlink:href="#close-1"> </use>
                    </svg></a>
                </div>
            </div>
            <div class="col-md-4 col-lg-6 col-xl-7 d-none d-md-block">
                <!-- Image-->
                <div class="bg-cover h-100 me-n3" style="background-image: url(img/photo/photo-1497436072909-60f360e1d4b1.jpg);"></div>
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

        const signUp = () => {
            console.log("memId확인" + state.form.memId);
            console.log("memPw확인" + state.form.memPw);
            console.log("memNamet확인" + state.form.memName);
            console.log("memPhone확인" + state.form.memPhone);
            console.log("memEmail확인" + state.form.memEmail);

            const args = JSON.parse(JSON.stringify(state.form));
            axios.post("/auth/signup", args).then(() => {
                alert("회원가입 완료!");
                router.push({path: "/login"})
            })
        }

        return{
            state,
            signUp
        }
    }
}
</script>

<style>

</style>