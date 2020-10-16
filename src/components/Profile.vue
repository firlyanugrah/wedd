<template>
    <section class="w-full bg-white pb-32">
      <div class="flex bg-white mx-auto profile">
        <div class="image">
          <img src="/src/assets/images/groom.jpg" alt="groom">
        </div>
        <div class="flex pt-32 flex-col text-wrap">
          <div class="relative titlewrapper titlewrapper--black">
            <h2 class="text-center font-fredericka text-4xl mb-4">The Groom</h2>
          </div>
          <p class="font-georgia">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
      </div>
      <div class="flex bg-white mx-auto profile">
        <div class="flex pt-32 flex-col text-wrap">
          <div class="relative titlewrapper titlewrapper--black">
            <h2 class="text-center font-fredericka text-4xl mb-4">The Bride</h2>
          </div>
          <p class="font-georgia">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        <div class="image">
          <img src="/src/assets/images/bride.jpg" alt="groom">
        </div>
      </div>
    </section>
</template>
<style scoped>
  .profile{
    max-width: 850px;
  }
  .image{
    transform: translateY(10%);
  }
  .text-wrap{
    max-width: 450px;
    opacity: 0;
    transform: translateY(10%);
    transition: all 1.8s cubic-bezier(.46,.54,.17,1);
  }
  .text-wrap.show{
    opacity: 1;
    transform: translateY(0%);
  }
</style>

<script>
export default {
  methods:{
    onScroll(){
      Array.from(document.getElementsByClassName("profile")).forEach(
        function(element, index, array) {
            const rect = element.getBoundingClientRect();
            const title = element.querySelector('.text-wrap').getBoundingClientRect();
            const res1 = window.scrollY-array[index].offsetTop;
            let toBottom = 10-(res1/10)
            if(rect.top < window.innerHeight && rect.bottom >= 0) {
              element.querySelector('.image').style.transform = "translateY("+ toBottom +"%)";
            }
            title.top <  window.innerHeight-(window.innerHeight*0.2) ? element.querySelector('.text-wrap').classList.add('show') : element.querySelector('.text-wrap').classList.remove('show');
        }
    );
    },
    registScroll: function (){
      this.onScroll();
    },
  },
  mounted(){
    // this.$nextTick(function(){
    //   // this.registScroll();
    //   this.onScroll();
    // });
  },
  created(){
    window.addEventListener('scroll', this.registScroll);
  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.registScroll);
  }
}
</script>