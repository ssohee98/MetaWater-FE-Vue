<template>
<header class="header">
        <!-- Navbar-->
        <nav class="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
            <div class="container-fluid" style="width: 1400px;">
                <div class="d-flex align-items-center"><router-link class="navbar-brand py-1" :to="{name: 'Home'}"><img src="../../../public/html/img/metawater-logo.png" alt="Metawater logo" style="width:150px;"></router-link>
                    <ul class="navbar-nav ms-auto">
                        <li class="header-menu nav-item">
                            <router-link class="nav-link" :to="{name: 'ProductList'}">제품</router-link>
                        </li>
                        <!-- <li class="header-menu nav-item dropdown"><a class="nav-link" id="homeDropdownMenuLink" href="/../public/html/index.html" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            제품&nbsp;<i class="fas fa-angle-down"></i></a>
                            <div class="dropdown-menu" aria-labelledby="homeDropdownMenuLink">
                                <h6 class="dropdown-header fw-normal">정수기</h6>
                                <a class="dropdown-item" href="/../public/html/index.html">냉/온 정수기</a>
                                <a class="dropdown-item" href="/../public/index-2.html">얼음/탄산 정수기</a>
                                <a class="dropdown-item" href="index-3.html">스탠드 정수기<span class="badge badge-info-light ms-1 mt-n1">New</span></a>
                            </div>
                        </li> -->
                        <li class="header-menu nav-item"><a class="nav-link" href="/detail">Detail</a>
                        </li>
                        <li class="header-menu nav-item dropdown">
                            <a class="nav-link" id="docsDropdownMenuLink" href="index.html" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">고객지원&nbsp;<i class="fas fa-angle-down"></i></a>
                            <div class="dropdown-menu" aria-labelledby="homeDropdownMenuLink">
                                <a class="dropdown-item" href="/../public/html/index.html">사용설명서 찾기</a>
                                <a class="dropdown-item" href="/../public/index-2.html">A/S 신청</a>
                                <a class="dropdown-item" href="index-3.html">1:1 문의</a>
                            </div>
                        </li>
                        <li v-if="pageAdmin" class="header-menu nav-item dropdown">
                            <a class="nav-link" id="docsDropdownMenuLink" href="index.html" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">관리자&nbsp;<i class="fas fa-angle-down"></i></a>
                            <div class="dropdown-menu" aria-labelledby="homeDropdownMenuLink">

                                <!-- <router-link class="dropdown-item" v-if="pageAdmin" :to="{name: 'AdminRegister'}">관리자 등록 페이지</router-link>
                                <router-link class="dropdown-item" v-if="pageAdmin" :to="{name: 'AdminList'}">관리자 목록 페이지</router-link>
                                <router-link class="dropdown-item" v-if="!pageState" :to="{name: 'ProductList'}" >상품목록페이지</router-link>
                                <router-link class="dropdown-item" v-if="pageState" :to="{name: 'MyPage'}">마이페이지</router-link>
                                <router-link class="dropdown-item" v-if="pageState" :to="{name: 'MyOrderList'}">마이페이지</router-link>
                                <router-link class="dropdown-item" v-if="pageState" :to="{name: 'MyAccount'}">회원정보관리</router-link>
                                <router-link class="dropdown-item" v-if="pageAdmin" :to="{name: 'AdminOrder'}">주문관리 페이지</router-link> -->

                                <router-link class="dropdown-item" :to="{name: 'AdminRegister'}">관리자 등록 페이지</router-link>
                                <router-link class="dropdown-item" :to="{name: 'AdminList'}">관리자 목록 페이지</router-link>
                                <router-link class="dropdown-item" :to="{name: 'ProductList'}" >상품목록페이지</router-link>
                                <router-link class="dropdown-item" :to="{name: 'AdminOrder'}">주문관리 페이지</router-link>

                                
                                <!-- <router-link class="dropdown-item" :to="{name: 'Rental'}">렌탈 결제창</router-link> -->
                                <!-- <router-link class="dropdown-item" :to="{name: 'RentalResult'}">렌탈 결과창</router-link> -->
                                <!-- <router-link class="dropdown-item" :to="{name: 'Order'}">주문 결제창</router-link> -->
                                <!-- <router-link class="dropdown-item" :to="{name: 'OrderResult'}">주문 결과창</router-link> -->
                                <!-- <router-link class="dropdown-item" :to="{name: 'ProductDetail'}">상품상세페이지</router-link> -->
                                <!-- <router-link class="dropdown-item" :to="{name: 'ProductList'}">상품목록페이지</router-link> -->
                                <!-- <router-link class="dropdown-item" :to="{name: 'MyProduct'}">마이페이지 나의 정수기 상세정보</router-link> -->
                            </div>
                        </li>
                        <li class="nav-item mt-3 mt-lg-0 ms-lg-3 d-lg-none d-xl-inline-block"></li>
                    </ul>
                </div>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><i class="bi bi-list"></i></button>
                <!-- Navbar Collapse -->
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav ms-auto">


                    <!-- 검색 -->
                    <li class="mx-5 nav-item" id="headerSearch">
                    <!-- <form class="form-inline d-none d-sm-flex" action="#" id="search">
                        <div class="input-label-absolute input-label-absolute-left input-expand ms-lg-2 ms-xl-3">
                        <input class="form-control form-control-sm border-0 shadow-0 bg-gray-200" id="searchKeyword" placeholder="아이콘 정수기" aria-label="searchKeyword" type="text" v-model="searchKeyword">
                        <button class="btn btn-secondary btn-sm" @click="moveToSearchPage(searchKeyword)">search</button>
                        <label class="label-absolute" for="search_search"><i class="bi bi-search"></i><span class="sr-only"></span></label>
                        </div>
                    </form>  -->
                    <form class="form-inline d-none d-sm-flex" id="search">
                        <div class="input-label-absolute input-label-absolute-left input-expand ms-lg-2 ms-xl-3">
                        <input class="form-control form-control-sm border-0 shadow-0 bg-gray-200" id="searchKeyword" placeholder="아이콘 정수기" aria-label="searchKeyword" type="text" v-model="searchKeyword" autocomplete="off">
                        <button class="btn btn-secondary btn-sm" @click="search">search</button>
                        <label class="label-absolute" for="search_search"><i class="bi bi-search"></i><span class="sr-only"></span></label>
                        </div>
                    </form>
                    </li>
                        <li class="nav-item"><router-link class="nav-link" v-if="!pageDefault" :to="{name: 'Signup'}">회원가입</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" v-if="!pageDefault" :to="{name: 'Login'}" >로그인</router-link></li>
                        <li class="nav-item dropdown" v-if="pageState">
                            <a class="nav-link dropdown" href="index.html" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="personIcon"><i class="fas fa-user-alt fa-lg"></i></a>
                            <div class="dropdown-menu" aria-labelledby="homeDropdownMenuLink">
                                <router-link class="dropdown-item" v-if="!pageState" :to="{name: 'Login'}" >로그인</router-link>
                                <router-link class="dropdown-item" v-if="pageState" :to="{name: 'MyPage'}">마이페이지</router-link>
                                <router-link class="dropdown-item" v-if="pageState" :to="{name: ''}" @click.prevent="logout()">로그아웃</router-link>
                            </div>
                        </li>
                        <li class="nav-item dropdown" v-if="pageAdmin">
                            <a class="nav-link dropdown" href="index.html" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="personIcon"><i class="fas fa-user-alt fa-lg"></i></a>
                            <div class="dropdown-menu" aria-labelledby="homeDropdownMenuLink">
                                <router-link class="dropdown-item" v-if="pageAdmin" :to="{name: ''}" @click.prevent="logout()">로그아웃</router-link>
                            </div>
                        </li>
                        <!-- <li class="nav-item"><a class="nav-link dropdown" href="/" id="mybell"><i class="fas fa-bell fa-lg"></i></a></li> -->
                        <li class="nav-item mt-3 mt-lg-0 ms-lg-3 d-lg-none d-xl-inline-block" id="headerEmpty"></li>
                        <!-- <input type="hidden" v-model="auth"/> -->
                    </ul>
                </div>
            </div>
        </nav>
        <!-- /Navbar -->
    </header>
</template>

<script>
import axios from 'axios';  
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
// import jwt_decode from 'vue-jwt-decode';

export default {
    name: "Header",
    setup() {
        const router = useRouter();
        const searchKeyword = ref('');
        //let searchKeyword = ref(null);
        //로그인 후 로그인 상태 확인!1
        const authState = ref({
            memNo:'',
            memId:'',
            memName:'',
            memPhone:'',
            memEmail:'',
            auth:'',
            status:''
        });


        const pageAdmin = ref(false);
        const pageState = ref(false);
        const pageDefault = ref(false);

        const token = sessionStorage.getItem("token");
        console.log("로그인 후 토큰생성 확인? : " + token);
        const id = sessionStorage.getItem("id");
        console.log("로그인 후 id생성 확인 sessionStorage.getItem? : " + id);

        const checkToken = () => {
            if(token == null){
                console.log('token == null일 때 로그인 전');
            }else{
                pageState.value = true;
                pageDefault.value = true;
                console.log('-------------------------------------------------')
                console.log('로그인 후');

                    const checkAuth = () =>{
                        console.log("결과확인 id "+ id);
                        axios.get(`/auth/members/${id}`).then((response) => {
                            console.log("받아온 데이터"+ (response.data.auth));
                            
                            sessionStorage.setItem("memNo",response.data.memNo);
                            sessionStorage.setItem("memId",response.data.memId);
                            sessionStorage.setItem("memPw",response.data.memPw);
                            sessionStorage.setItem("memName",response.data.memName);
                            sessionStorage.setItem("memPhone",response.data.memPhone);
                            sessionStorage.setItem("memEmail",response.data.memEmail);

                            // console.log("memNo 데이터 확인 : " ,sessionStorage.getItem("memNo"));
                            // console.log("memNo 데이터 확인 : " ,sessionStorage.getItem("memId"));
                            // console.log("memNo 데이터 확인 : " ,sessionStorage.getItem("memPw"));
                            // console.log("memNo 데이터 확인 : " ,sessionStorage.getItem("memName"));
                            // console.log("memNo 데이터 확인 : " ,sessionStorage.getItem("memPhone"));
                            // console.log("memNo 데이터 확인 : " ,sessionStorage.getItem("memEmail"));
                            const memNo = sessionStorage.getItem("memNo");
                            console.log("memNo 데이터 확인 : " ,memNo );
                            authState.value = Object.assign({}, response.data);
                            console.log("authState 복사한 데이터: ", authState.value.auth);
                            //관리자만 확인 가능
                            if(authState.value.auth == 'ROLE_ADMIN'){
                                pageAdmin.value = true;
                                pageState.value = false;
                                pageDefault.value = true;
                            }else{
                                pageAdmin.value == true;
                            }
                           
                        });
                    }
                    checkAuth();

            
                
                // if(id.auth == "ROLE_ADMIN"){

                // }else{
                //     pageState.value= true;
                // }
            }
        }
        checkToken();

        //로그아웃
        const logout  = () =>{
            sessionStorage.clear();
            Swal.fire({
                title:'Success!',
                text: '로그아웃 되었습니다.',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
                // confirmButtonText: 'OK'
            }).then(()=>{
                router.push({
                    name: 'Home'
                })
                location.reload();
;            })
        }


        // const moveToSearchPage = (s) => {
        //     if (!s) {
        //         alert("검색어를 입력하세요.");
        //         return;
        //     }
            
        //     console.log("param : " + s);
        //     router.push({
        //         name: 'SearchList',
        //         params: {
        //         searchKeyword: s
        //         }
        //     });
        // }

        const search = () => {
    window.location.reload();
            router.push({
                name: 'ProductList',
                query: {
                    searchKeyword: searchKeyword.value
                }
            })
            // , () => {
            //     window.location.reload()
            // })
        }

        return {
            //moveToSearchPage,
            searchKeyword,
            search,
            pageState,
            token,
            logout,
            authState,
            pageAdmin,
            pageDefault
            // decodeToken,
            // userSub,
            // userRoles,
            // userId,
            // userAud,
            // tokenId
            // search,
        }
    },

    name: 'Header'
         // const {payload} = useJwt(token);
        // const tokenId = payload.id;
        //  const decodeToken = token ? jwt_decode(token) : null;
        //     const userSub = token.userId?.sub; //고유식별자
        //     const userRoles =  token.userRoles?.userRoles; 
        //     const userId =  token.userAud?.userAud;
        //     const userAud =  token.userSub?.userSub;//사용할 수 있는 대상자

        //     console.log("토큰 userSub: " + userSub );
        //     console.log("토큰 userRoles: " + userRoles);
        //     console.log("토큰 userId : " + userId);
        //     console.log("토큰 userAud : " + userAud);
        //     console.log("토큰 tokenId tokenId : " + tokenId );
    
        // const state = ref({});
        // axios.get(`/auth/members/${id}`).then(({data}) =>{
        //     state.value = data;
        //     console.log("모든 회원 데이터 " + data);
        // })
}
</script>

<style>

</style>
