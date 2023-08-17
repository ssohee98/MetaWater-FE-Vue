<template>
      <body class="hold-transition sidebar-mini">
        <div class="wrapper">
             <Sidebar />
            <AdminOrderList :orders ="state.orders"
            @order-detail ="orderDetail" />  
        </div>
    </body>
</template>

<script>
import axios from "axios";
import {reactive} from "vue";
import Sidebar from '@/components/pages/admin/Sidebar.vue';
import AdminOrderList from '@/components/AdminOrderList.vue';
export default {
  components: {
    Sidebar,
    AdminOrderList
  },
   setup(){
    const state = reactive({
      orders:[]
    })

    axios.get("/admin/orders").then(({data}) => {
      state.orders = data;
      console.log(data);
    });

    return {
      state
    }
  }
}
</script>

<style>

</style>