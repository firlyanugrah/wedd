<template>
    <section class="w-full min-h-screen ourstory bg-white relative">
      <div>
        <h2 class="text-center font-fredericka text-4xl mb-4">How it All Began</h2>
      </div>
      <div class="relative w-full lg:w-1/2 min-h-screen timeline mx-auto" ref="timeline">
        <div class="timeline__line"></div>
        <div class="timeline__linewrap absolute h20vh"></div>
        <div class="timeline__wrapper relative">
          <div v-for="(item, key) in ourstory" :key="key">
            <div class="bullet">
              <img src="/src/assets/icons/bullet.png">
            </div>
            <div class="timeline__linewrap relative h20"></div>
            <div class="timeline__content relative bg-white w-full">
              <div class="timeline__content--inner bg-white text-center w-full animate__fadeInUp">
                <div class="date font-fredericka">{{ item.date }}</div>
                <div class="title font-georgia font-bold">{{ item.title }}</div>
                <div class="caption font-georgia md:w-2/3 mx-auto">{{ item.caption }}</div>
                <div class="image mt-4" v-if="item.img">
                  <img :src="item.img">
                </div>
              </div>
            </div>
            <div class="timeline__linewrap relative h20vh"></div>
          </div>
        </div>
      </div>
      <div class="timeline__end pb-40">wkwk</div>
    </section>
</template>

<script>
export default {
  data(){
    return {
      ourstory: [{
        date: 'Jan 1, 2011',
        title: 'Our First Meet',
        caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img: ''
      },{
        date: 'Jan 1, 2011',
        title: 'Our First Meet',
        caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img: '/src/assets/images/02.jpg'
      },{
        date: 'Jan 1, 2011',
        title: 'Our First Meet',
        caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img: ''
      },{
        date: 'Jan 1, 2011',
        title: 'Our First Meet',
        caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img: ''
      },{
        date: 'Jan 1, 2011',
        title: 'Our First Meet',
        caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img: '/src/assets/images/02.jpg'
      }]
    }
  },
  methods:{
    onScroll(){
      Array.from(document.getElementsByClassName("timeline__content")).forEach(
        function(element, index, array) {
            const rect = element.getBoundingClientRect();
            rect.top < window.innerHeight-(window.innerHeight*0.73) ? element.classList.add('show') : element.classList.remove('show');
        }
    );
    },
    registScroll: function (){
      this.onScroll();
    },
  },
  mounted(){
    this.$nextTick(function(){
      // this.registScroll();
      this.onScroll();
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
  .ourstory::before{
    content: '';
    width: 400px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-image: url("../../src/assets/icons/bg-ornament-right.png");
    background-size: 100%;
    background-repeat: repeat-y;
    z-index: 3;
  }
  .ourstory::after{
    content: '';
    width: 400px;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: url("../../src/assets/icons/bg-ornament-left.png");
    background-size: 100%;
    background-repeat: repeat-y;
    z-index: 3;
  }
  .timeline__line{
    width: 65px;
    height: 20vh;
    position: sticky;
    left: 50%;
    top: 0;
    background-color: #ce9999;
    transform: translateX(-50%);
  }
  .timeline__linewrap{
    width: 75px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    background-image: url("../../src/assets/icons/line-2.png");
    background-size: 100%;
    background-position: 0 0;
    background-repeat: repeat-y;
    background-color: rgb(206 153 153 / 20%);
  }
  .timeline__content{
    z-index: 2;
  }
  .timeline__content::before{
    content: '';
    position: absolute;
    width: 75px;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    background-image: url("../../src/assets/icons/line-2.png");
    background-size: 100%;
    background-position: 0 0;
    background-repeat: repeat-y;
    background-color: rgb(206 153 153 / 20%);
  }
  .h20{
    height: 20px;
  }
  .h20vh{
    height: 20vh;
  }
  .side{
    position: absolute;
    width: 49.8%;
    top: 0;
    height: 100%;
    background-color: #fff;
  }
  .side--left{
    left: 0;
  }
  .side--right{
    right: 0;
  }
  .bullet{
    width: 100px;
    margin: 0 auto;
    background: rgb(206 153 153 / 20%);
  }
  .title{
    color: #ce9999;
  }
  .animate__fadeInUp{
    opacity: 0;
    transform: translateY(20%);
    transition: all .8s cubic-bezier(.46,.54,.17,1);
  }
  .timeline__content.show .animate__fadeInUp{
    opacity: 1;
    transform: translateY(0%);
  }
</style>