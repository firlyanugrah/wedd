<template>
    <section  class="flex justify-center items-center min-h-screen jumbotron relative overflow-hidden">
      <div class="absolute top-0 left-0 parallax min-h-screen w-full" ref="parallax">
        <div v-for="(item, index) in imageCover" :key="index" class="jumbotron--cinematic absolute top-0 left-0 bg-cover h-full w-full" :style="{ backgroundImage: 'url(../../src/assets/images/' + item + ')' }" :class="{ 'opacity-0' : imageCounter != index }"></div>
      </div>
      <div class="max-w-6xl mx-auto text-center text-white z-10"> 
          <h1 class="font-fredericka text-6xl">Alda & Firly</h1>
          <p class="font-georgia text-2xl lt-spc-3">ARE GETTING MERRIED</p>
          <p class="border--love"><span></span><i class="fa fa-heart"></i><span></span></p>
          <p class="font-georgia text-normal lt-spc-3">JULY 7TH, 2021</p>
      </div>
    </section>
</template>
<script>
export default {
  data(){
    return {
      imageCover: ['01.jpg','02.jpg','03.jpg','05.png'],
      imageCounter: 0,
      everySec: 3500
    }
  },
  methods: {
    intervalImageCover(){
      const self = this
      setInterval(function(){
        self.imageCounter == self.imageCover.length-1 ? self.imageCounter = 0 : self.imageCounter++
      }, self.everySec)
    },
    onScroll(){
      const jumbotronHeight = this.$refs.parallax.clientHeight;
      if(window.scrollY < jumbotronHeight) this.$refs.parallax.style.transform = "translateY("+ window.scrollY/25 +"%)"
    },
    registScroll: function (){
      this.onScroll();
    },
  },
  mounted(){
    this.$nextTick(function(){
      this.intervalImageCover();
      this.registScroll();
    });
  },
  created(){
    window.addEventListener('scroll', this.registScroll);
  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.registScroll);
  }
}
</script>
<style scoped>
  .parallax{
    transform: translateY(0);
  }
  .lt-spc-3{
    letter-spacing: 0.3em;
  }
  .border--love span{
    border: 0;
    border-top: 1px solid #fff;
    display: inline-block;
    margin: 6px 10px;
    width: 150px;
  }
  /* .jumbotron{
    height: 130vh;
  } */
  .jumbotron::before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgb(78 58 58 / 58%);
    z-index: 2;
  }
  /* .jumbotron::after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background: linear-gradient(to bottom,rgb(109 109 109 / 0%) 0,#ffffff 99%);
    z-index: 3;
  } */
  .jumbotron--cinematic{
    background-position: center;
    transition: opacity 1s ease-in-out;
  }
</style>