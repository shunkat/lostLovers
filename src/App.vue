<template>
  <div
    id="app"
    class=""
  >
    <img
      alt="読み込みません"
      :src="clothesImage"
    >
  
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/pages/HelloWorld.vue";
import {clothIndex} from "./lib/clothes"　//　テスト用
export default {
  name: "App",
  components: {
    HelloWorld
  },
  data(){
    return{
      clothesImage:"",
      dressIndex:null
    }
  },
  mounted() {
    this.dressIndex=clothIndex(21)
    console.log(this.dressIndex) // テスト用
    if(this.dressIndex==4){
this.clothesImage="/img/t-shirt.png"
    } else if (this.dressIndex==3) {
      this.clothesImage="/img/y-shirt.png"
    } else if (this.dressIndex==2) {
      this.clothesImage=""
    } else if (this.dressIndex==1){
      this.clothesImage="/img/jacket.png"
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
