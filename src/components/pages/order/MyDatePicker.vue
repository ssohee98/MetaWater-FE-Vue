<template>
  <div class="container">
    <div class="my-2" style="width: 100%">
      <div class="date">
        <font-awesome-icon
          icon="fa-solid fa-calendar-days"
          transform="down-2.5 right-20"
          style="z-index: 1; cursor: default"
          @click="clickCalIcon('dp1')"
        />
        <Datepicker
          v-model="picked"
          :ref="inputs.dp1"
          class="datepicker"
          :locale="locale"
          :weekStartsOn="0"
          :inputFormat="inputFormat"
          :clearable="true"
          @change="getCalValue('dp1')"
        />
        <button type="button" @click="getCalValue('dp1')">Get Value</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, defineComponent } from 'vue';
// vue3-datepicker
import Datepicker from 'vue3-datepicker';
import { ko } from 'date-fns/locale';
import { defineRefs } from './helper.js';

export default defineComponent({
  name: 'MyDatePicker',
  components: {
    Datepicker,
  },
  
  setup() {
    // :weekStartsOn="0" 'Sunday' is first
    const picked = ref(new Date());
    const locale = reactive(ko); // 한글 달력
    const inputFormat = ref('yyyy-MM-dd');

    // refs
    // const datepicker1 = ref(null);
    // dynamic refs
    
    const inputs = defineRefs(['dp1']);

   
    // FontAwesome 아이콘 클릭 시, datepicker 나타남
    const clickCalIcon = (refId) => {
      const dp = inputs[refId].value;
      // console.log(dp);
      dp.inputRef.focus();
    };

    //Get Value 버튼 클릭 시, input 데이터(YYYY-MM-DD 나타남)
    const getCalValue = (refId) => {
      console.log("뭔지모르겠는값 : " + refId);
      // console.log(datepicker1.value.input);
      // ref="datepicker1"

      const dp = inputs[refId].value;
      // console.log(dp);
      console.log("해당 날짜 값: " + dp.input);
      
      alert(dp.input);
    };
    

    return {
      picked,
      locale,
      inputFormat,
      inputs,
      clickCalIcon,
      getCalValue,
    };
  },
});
</script>

<style scope>
div.date {
  display: inline-flex;
}

</style>