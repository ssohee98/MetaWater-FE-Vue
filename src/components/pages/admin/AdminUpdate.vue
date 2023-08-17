<template>
    <body class="hold-transition sidebar-mini">
        <div class="wrapper">

        <Sidebar />

        <div class="content-wrapper">
            <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>제품 등록</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">제품 등록</li>
                    </ol>
                </div>
                </div>
            </div>
            </section>

            <section class="content">
            <div class="container-fluid">
                <div class="card card-default">
                     <div class="card-header">
                        <h3 class="card-title">제품 정보</h3>
                    </div>
                    <div class="card-body">
                    <form  @submit.prevent ="onSave" role="form" >
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label" >제품명</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" v-model= "product.productName">
                                    </div>  
                                </div>
                                <div class="form-group row">
                                <label class="col-sm-2 col-form-label">기능</label>
                                    <div class="col-sm-10">
                                        <select class="form-control select2" v-model= "product.productFunction">
                                            <option>냉온정수기</option>
                                            <option>냉정수기</option>
                                            <option>냉온정수기+얼음</option>
                                            <option>냉정수기+얼음</option>
                                            <option>정수전용</option>
                                        </select>
                                    </div>
                               </div> 
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">월 렌탈료</label>
                                    <div class="col-sm-10">
                                         <input type="text" class="form-control" v-model= "product.productRentalPrice">
                                    </div>  
                                </div>        
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">모델명</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control"  v-model= "product.productModel" >
                                    </div>  
                                </div>
                                <div class="form-group row">
                                 <label class="col-sm-2 col-form-label">설치형태</label>
                                    <div class="col-sm-10">
                                        <select class="form-control select2" v-model= "product.productType" style="width: 100%;">
                                            <option value="빌트인">빌트인</option>
                                            <option value="데스크탑">데스크탑</option>
                                            <option value="스탠드">스탠드</option>
                                         </select>
                                    </div>
                                 </div> 
                                 <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">구매가</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" v-model="product.productPrice">
                                    </div>
                                </div>                            
                            </div>
                            <div class="card-header">
                                <h3 class="card-title">스펙</h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label">제조사</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" v-model= "product.productCompany">
                                            </div>  
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label">정수방식</label>
                                            <div class="col-sm-10">
                                                <select class="form-control select2" v-model= "product.productMethod">
                                                    <option value="직수형">직수형</option>
                                                    <option value="탱크형">탱크형</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label">무게</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" v-model= "product.productWeight">
                                            </div>  
                                        </div>             
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label">출시년월</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" v-model= "product.productRdate">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label">색상</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" v-model= "product.productColor">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label">크기</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" v-model= "product.productSize">
                                            </div>  
                                        </div>                                            
                                    </div>
                                </div>
                            </div>
                             <div class="card-header">
                                <h3 class="card-title">제품 이미지</h3>
                            </div>
                            <div class="card-body">
                                <div id="actions" class="row">
                                    <div class="col-lg-6">
                                        <div class="btn-group w-100">
                                            <label for="mainImageInput" ref="mainInput" class="btn btn-default col fileinput-button" >
                                                대표 이미지 등록
                                            </label>
                                            <input id="mainImageInput" type="file" class="sr-only" @change="handleMainChange" >
                                            <label for="addImageInput" class="btn btn-default col fileinput-button" multiple>
                                                <span>추가 이미지 등록</span>
                                            </label>
                                            <input id="addImageInput" type="file" class="sr-only" @change="handleAddChange" multiple>
                                            <label for="detailImageInput" class="btn btn-default col fileinput-button">
                                                <span>상세 이미지 등록</span>
                                            </label>
                                            <input id="detailImageInput" type="file" class="sr-only" @change="handleDetailChange">
                                        </div>                                       
                                    </div>
                                    <div class="col-lg-6 d-flex align-items-center">
                                        <div class="fileupload-process w-100">
                                          
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer bg-white" >
                                    <ul class="mailbox-attachments d-flex align-items-stretch clearfix">
                                         <li   v-for="(image, index) in state.images" :key="index">
                                            <span class="mailbox-attachment-icon">
            
                                                <img :src="image.url" style="width: 132px; height: auto;" />
                                            </span>
                                            <div class="mailbox-attachment-info">
                                                <a href="#" class="mailbox-attachment-name" >
                                                    {{image.name}}
                                                </a>
                                                <span class="mailbox-attachment-size clearfix mt-1">                                           
                                                    <a href="#" class="btn btn-default btn-sm float-right" @click="deleteImage(index)">
                                                        <i class="fas fa-times"></i>
                                                    </a>
                                                </span>
                                            </div>
                                        </li>                                    
                                     </ul>
                                </div>
                            </div>                    
                        <div class="card-header">
                            <h3 class="card-title">사용설명서</h3>
                        </div>
                        <div class="card-body">                                
                            <div class="form-group">
                                <div class="btn btn-default btn-file">
                                    <i class="fas fa-paperclip"></i> 설명서 등록
                                    <input type="file" @change="handleFileChange" accept="application/pdf">
                                </div>
                                    <h6 class="help-block">{{product.productGuide}}</h6>
                            </div>
                        </div>
                        
                        <div class="card-header">
                            <h3 class="card-title">상세 정보</h3>
                        </div>
                        <div class="card-body">                                
                            <div class="form-group">
                                <textarea class="form-control" id="inputExperience" placeholder="상세정보 입력하세요" v-model= "product.productDetail"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="float-right">
                        <button class="btn btn-primary" :to="{name: 'AdminList'}">취소</button>
                        <button :disabled = "!todoUpdated" class="btn btn-primary">수정</button>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
            </section>
        </div>
        <aside class="control-sidebar control-sidebar-dark">
        </aside>
        </div>
    </body>
</template>

<script>
import axios from "axios";
import Sidebar from '@/components/pages/admin/Sidebar.vue';
import {useRoute,useRouter} from 'vue-router';
import {reactive,ref} from "vue";
import _ from 'lodash';
import {computed} from '@vue/reactivity';

export default {
    props: {
    products: Object 
  },

    components: {
    Sidebar
  },

    setup(props){
    const state = reactive({
      files: [],
      images:[]
      });
        const route = useRoute();
      const router = useRouter();
    const productNo =  route.params.id;
     const originalProduct = ref(null);
      const product = ref(null);


    const onSave = async() => {
        const res = await axios.patch(`/admin/product/${productNo}`,{
  
        });
    originalProduct.value = {...res.data};
        router.push({path: "/adminlist"});
    }
    const todoUpdated = computed(() => {
            return !_.isEqual(product.value, originalProduct.value);
    });

    const getProduct =async() => {
            try{ 
                 const res =  await axios.get(`/admin/product/${productNo}`);
                 product.value = {...res.data};
                 originalProduct.value={...res.data};
                 console.log(product);
                 showUploadedImage(product.value.imgUrl);
                 showUploadedImage(product.value.detailUrl);
                 const files = await axios.get(`/admin/product/getAttachList/${productNo}`);
                 state.files.push(files.data);
                 files.data.forEach((file) => {
                    console.log(file);
                showUploadedImages(file);
             });
                 
            }catch(err){
                console.log(err);         
            }
         
    };
    getProduct();

        

    //이미지 업로드 처리
    const handleImageUpload = (event, fileType) => {
        const formData = new FormData();
          if (event.target.files) {
            if (fileType !== "files") {
            const file = event.target.files[0];
            formData.append("file", file);
            }
             else {
            const files = event.target.files;
                for (const file of files) {
                    formData.append("files", file);
                }
            }
          }
        axios.post(`/upload/${fileType}`, formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
        .then((response) => {
            console.log("이미지가 등록되었습니다.");
            if(fileType == "files"){
                response.data.forEach((file) => {
                const { uuid, folderPath, fileName } = file;
                product.attachList.push({
                    uuid,
                    folderPath,
                    fileName,
                 });
             });
            }
            if(product.imgUrl == response.data.fileName){
                   product.imgUrl = response.data.folderPath +"/" + response.data.uuid+"_" + response.data.fileName; 
            }
            if( product.detailUrl == response.data.fileName){
                product.detailUrl = response.data.folderPath +"/" + response.data.uuid+"_" + response.data.fileName; 
            }

          
               showUploadedImages(response);
            
        })
        .catch(error => {
            console.log(error);
            console.log("이미지 업로드에 실패하였습니다.");
        });
    };

        const  showUploadedImages = (response) => {
            const fileCallPath = response.folderPath+"/s_"+response.uuid+"_"+response.fileName;
            const file = {
                name: response.fileName,
                url: null,
                path:fileCallPath
            };
             axios.get('/upload/display', { 
                responseType: 'blob',
                params: {  fileName: fileCallPath } })
              .then(response => {
                const reader = new FileReader();
                reader.readAsDataURL(response.data);
                reader.onload = () =>{
                     file.url = reader.result;
                     console.log(file.url);
                        state.images.push(file);
                };
            })
            .catch(error => {
                console.error(error);
            });
        }

        const  showUploadedImage = (url) => { 
            let thumbUrl = url;
            let result = url.slice(url.indexOf("_") + 1);  

            if(!thumbUrl.includes('/s_')){                
                thumbUrl = thumbUrl.replace('/', '/s_');
                console.log(thumbUrl);
                
            }
                const file = {
                name:result,
                url: thumbUrl,
            };

            
             axios.get('/upload/display', { 
                responseType: 'blob',
                params: {  fileName: url } })
              .then(response => {
                const reader = new FileReader();
                reader.readAsDataURL(response.data);
                reader.onload = () =>{
                      file.url = reader.result;
                        state.images.push(file);
                };
            })
            .catch(error => {
                console.error(error);
            });
        }

         //업로드한 이미지 삭제
         const deleteImage = (index) => {
            console.log(state.images[index].path);
            let fileName = state.images[index].path
            fileName = fileName.replaceAll("\\", "/");
            fileName = fileName.replaceAll("s_", "");
            console.log(fileName);
            axios.post(`/upload/removeFile?fileName=${fileName}`)
            state.images.splice(index, 1);
            state.images = [...state.images];
        }


      
        
    return {
        deleteImage,
        state,
        product,
        onSave,
        todoUpdated,
        }
  
    }
}
</script>

<style>
</style>