<template>
  <img
    alt="読み込みません"
    :src="clothesImage"
  >
</template>

<script>

export default {
name:"Cloth",
props: {
  dressNumber:{
    type:Number,
    required:true
  }
},

computed:{
  clothesImage(){
  
   if(this.dressNumber==4){
return "/img/t-shirt.png"//半袖
    } else if (this.dressNumber==3) {
      return "/img/y-shirt.png"//長袖
    } else if (this.dressNumber==2) {
      return "/img/longt-shirt.png"//ジャケット
    } else if (this.dressNumber==1){
      return "/img/jacket.png"//コート
    }
return ""
  }
}
}
</script>

<style>

</style>

