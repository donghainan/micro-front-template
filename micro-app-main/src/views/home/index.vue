<!--
 * @Author: hainan dong
 * @Date: 2020-09-08 11:30:50
 * @LastEditTime: 2020-09-08 11:30:54
 * @LastEditors: hainan dong
 * @Description: 
 * @FilePath: \ja-front-template\micro-app-main\src\views\home\index.vue
 * @Code Is Everything
-->
<template>
<section class="home-container">Home</section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
.home-container {
  padding: 30px;
}
</style>
