<template>
        <div class="content-wrapper">
            <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="container-fluid">
                    <form action="enhanced-results.html">
                        <div class="row">
                            <div class="col-md-10 offset-md-1">                               
                                <div class="form-group">
                                    <div class="input-group input-group-lg">
                                        <input type="search" class="form-control form-control-lg" placeholder="제품 검색">
                                        <div class="input-group-append">
                                            <button type="submit" class="btn btn-lg btn-default">
                                                <i class="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                     </div>
                        <div class="col-sm-6">
                            <h1>제품 목록</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">제품 목록</li>
                            </ol>
                        </div>
                        </div>
                    </div><!-- /.container-fluid -->
                    </section>

            <!-- Main content -->
            <section class="content">

            <!-- Default box -->
            <div class="card">
                <div class="card-header">
                <h3 class="card-title"></h3>
                    <div class="card-tools">
                        <router-link class="btn btn-block btn-secondary" :to="{name: 'AdminRegister'}">제품등록</router-link>
                    </div>
                </div>
                <div class="card-body p-0">
                <table class="table table-striped projects">
                    <thead>
                        <tr>
                            <th style="width: 5%" class="text-center">
                                번호
                            </th>
                            <th style="width: 20%" class="text-center">
                                상품명
                            </th>
                            <th style="width: 30%" class="text-center">
                                설치형태/정수방식
                            </th>
                            <th class="text-center">
                                판매량
                            </th>
                            <th style="width: 8%" class="text-center">
                                등록일
                            </th>
                            <th style="width: 20%" >
                            </th>
                        </tr>
                    </thead>
                    <tbody v-for="(product) in products" :key="product.productNo">
                        <tr>
                            <td>
                               {{product.productNo}}
                            </td>
                            <td>
                                <li class="list-inline-item" >                          
                                        <!-- <img :src="imgSrc(product.imgUrl)" /> -->
                                       <div class="product-image-thumb"> 
                                         <!-- <img :src="image.url" /> -->
                                         
                                         <img :src='`http://localhost:8082/upload/display?fileName=${product.imgUrl}`' />
                                     </div>                                    
                                </li>
                                <a >
                                    {{product.productName}}
                                </a>
                            </td>
                            <td class="text-center">
                                <ul class="list-inline">
                                    <a>
                                    {{product.productType}}
                                    </a>
                                    <a>
                                    / {{product.productMethod}}
                                    </a>
                                </ul>
                            </td>
                            <td class="text-center">
                                <a>{{product.productSales}}</a>                             
                            </td>
                            <td class="project-state">
                                <span>{{new Date(product.regDate).toLocaleDateString()}}</span>
                            </td>
                            <td class="project-actions text-right">
                                <button type="button" class="btn btn-default"  @click="updateProduct(product)" >
                                    수정
                                </button>
                                <button type="button" class="btn btn-danger" @click.stop="deleteProduct(product.productNo)" >
                                    삭제
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                 <div class="card-footer">
                    <nav aria-label="Contacts Page Navigation">
                        <ul class="pagination justify-content-center m-0">
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">4</a></li>
                        <li class="page-item"><a class="page-link" href="#">5</a></li>
                        <li class="page-item"><a class="page-link" href="#">6</a></li>
                        <li class="page-item"><a class="page-link" href="#">7</a></li>
                        <li class="page-item"><a class="page-link" href="#">8</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            </section>
        </div>
        <aside class="control-sidebar control-sidebar-dark">
        </aside>
</template>

<script>
import { reactive} from 'vue';
import axios from "axios";
import {useRoute, useRouter} from 'vue-router';

export default {
    props: {
        products: Object,
        default: () => {
            return {
                imgUrl:'',
                productNo:'',
                    productName:'',
                   regDate:'',
                   productType:'',
                   productMethod:''};
        }
    },

      emits: ['delete-product','update-product'],
    setup(props,  {emit}){
           
        const router = useRouter();

        const state = reactive({
            images: [],
        });

    
         const deleteProduct = (productNo) => {
            emit('delete-product', productNo);
         }

        const updateProduct = (product) => {   
            console.log(product);        
            router.push({
                name: 'AdminUpdate',
                params: {
                    id: product.productNo
                },
                props: {
                    products: product
                }
            })
        }

        // const imgSrc =(product) => {
        //     let path = product.imageUrl.replaceAll("\\", "/");
        //     console.log(path);
        //      const file = {
        //         name: product.productName,
        //         url: null,
        //         path: path,
        //     };
        //     axios.get(`/upload/display?fileName=${path}`, {
        //         responseType: 'blob',
        //      })
        //      .then(response => {
        //         const reader = new FileReader();
        //         reader.readAsDataURL(response.data);
        //         reader.onload = () =>{
        //             file.url = reader.result;
        //             console.log(file.url);
        //             state.images.push(file);
        //         };
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
                      
        // };

        // onBeforeMount(() => {
        //         // imgSrc 함수 실행
        //     props.products.forEach((product) => {
        //         imgSrc(product);
        //         });
        //     });
      return{
                state,
                deleteProduct,
                updateProduct,
            }
    }
}
   
</script>

<style>

</style>