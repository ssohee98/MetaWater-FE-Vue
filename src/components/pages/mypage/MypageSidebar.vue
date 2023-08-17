<template>
    <div class="mb-6 mb-lg-0">
                    <div class="card-body pl-lg-5 p-md-0" style="min-height:600px;">
                        <div class="list-group list-group-flush rounded-0 text-md my-5">
                            <h5>제품관리</h5>
                            <router-link class="mypage-menu list-group list-group-item-action text-muted" :to="{name: 'MyPage'}">내 정수기 관리하기</router-link>
                        </div>
                        <div class="list-group list-group-flush rounded-0 text-md my-5">

                                <h5>쇼핑관리</h5>
                            <router-link class="mypage-menu list-group list-group-item-action text-muted" :to="{name: 'MyOrderList'}">주문내역</router-link>
                            <router-link class="mypage-menu list-group list-group-item-action text-muted" :to="{name: 'MyCancelList'}">렌탈 반납/해지 내역</router-link>
                        </div>

                        <div class="list-group list-group-flush rounded-0 text-md my-5">

                                <h5>정보관리</h5>
                            <router-link class="mypage-menu list-group list-group-item-action text-muted" :to="{name: 'MyAccount'}">회원 정보 관리</router-link>
                        </div>
                        <br>
                    </div>
                </div>
</template>
<script>
    export default{
        name: "MypageSidebar",
    }
</script>
<style>
</style>