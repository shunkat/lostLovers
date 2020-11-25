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
return "/img/t-shirt.png"
    } else if (this.dressNumber==3) {
      return "/img/y-shirt.png"
    } else if (this.dressNumber==2) {
      return ""
    } else if (this.dressNumber==1){
      return "/img/jacket.png"
    }
return ""
  }
}
}
</script>

<style>

</style>