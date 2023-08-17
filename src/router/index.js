import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/components/pages/Home.vue';
import Login from '@/components/pages/member/Login.vue';
import Signup from '@/components/pages/member/Signup.vue';
import AdminRegister from '@/components/pages/admin/AdminRegister.vue';
import AdminUpdate from '@/components/pages/admin/AdminUpdate.vue';
import AdminList from '@/components/pages/admin/AdminList.vue';
// import AdminMember from '@/components/pages/admin/AdminMember.vue';
import Rental from '@/components/pages/order/Rental.vue';
import RentalResult from '@/components/pages/order/RentalResult.vue';
import Order from '@/components/pages/order/Order.vue';
import OrderResult from '@/components/pages/order/OrderResult.vue';
import Detail from '@/components/pages/product/Detail.vue';
import List from '@/components/pages/product/List.vue';
import SearchList from '@/components/pages/product/SearchList.vue';
import AdminOrder from '@/components/pages/admin/AdminOrderList.vue';
import MyProduct from '@/components/pages/mypage/MyProduct.vue';
import MyPage from '@/components/pages/mypage/MyPage.vue';
import MyOrderList from '@/components/pages/mypage/MyOrderList.vue';
import MyCancelList from '@/components/pages/mypage/MyCancelList.vue';
import MyPayList from '@/components/pages/mypage/MyPayList.vue';
import MyAccount from '@/components/pages/mypage/MyAccount.vue';

const router = createRouter({
    history: createWebHashHistory(),
    // mode: history,
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup
        },
        {
            path: '/adminregister',
            name: 'AdminRegister',
            component: AdminRegister
        },
        {
            path: '/adminUpdate/:id',
            name: 'AdminUpdate',
            component: AdminUpdate
        },
        {
            path: '/adminorder',
            name: 'AdminOrder',
            component: AdminOrder
        },
        {
            path: '/adminlist',
            name: 'AdminList',
            component: AdminList
        },

        {
            path: '/rental',
            name: 'Rental',
            component: Rental
        },
        {
            path: '/retal/check',
            name: 'RentalResult',
            component: RentalResult
        },
        {
            // path: '/order/productNo=:pno',
            path: '/order',
            name: 'Order',
            component: Order
        },
        {
            path: '/order/check',
            name: 'OrderResult',
            component: OrderResult
        },
        // {
        //     path: '/product/detail/:pno',
        //     name: 'ProductDetail',
        //     component: Detail
        // },
        {
            path: '/product/detail',
            name: 'ProductDetail',
            component: Detail
        },
        {
            path: '/productlist',
            name: 'ProductList',
            component: List
        },
        // {
        //     path: '/search/:searchKeyword',
        //     name: 'SearchList',
        //     component: SearchList
        // },
        {
            path: '/search',
            name: 'SearchList',
            component: SearchList
        },
        {
            path: '/mypage/myproduct/:orderNo',
            name: 'MyProduct',
            component: MyProduct
        },
        {
            path: '/mypage/myaccount',
            name: 'MyAccount',
            component: MyAccount
        },
        {
            path: '/mypage/myproduct',
            name: 'MyPage',
            component: MyPage
        },
        {
            path: '/myorder',
            name: 'MyOrderList',
            component: MyOrderList
        },
        {
            path: '/mycancel',
            name: 'MyCancelList',
            component: MyCancelList
        },
        {
            path: '/mylist',
            name: 'MyPayList',
            component: MyPayList
        },

    ]
});

// app.use(routes);

// app.mount('#app');

export default router;