<template>
    <div :class="{'fixed': !isLoaded}" class="top-0 left-0">
      <transition name="fade">
        <app-loader v-if="!isLoaded"></app-loader>
      </transition>
      <app-jumbotron></app-jumbotron>
      <app-countdown></app-countdown>
      <app-gallery></app-gallery>
      <!-- <app-profile></app-profile>
      <app-our-story></app-our-story> -->
    </div>
</template>
<script>
import AppCountdown from './Countdown.vue'
import AppGallery from './Gallery.vue'
import AppJumbotron from './Jumbotron.vue'
import AppLoader from './Loader.vue'
// import AppOurStory from './OurStory.vue'
// import AppProfile from './Profile.vue'
export default {
  components:{
    AppCountdown,
    AppGallery,
    AppJumbotron,
    AppLoader,
    // AppOurStory,
    // AppProfile
  },
  data(){
    return {
      isLoaded: false
    }
  },
  methods:{

  },
  mounted(){
    let self = this;
    this.$nextTick(function(){
      window.onload = function() {
        self.isLoaded = true
      };
    });
  }
}
</script>
<style>
  ::-webkit-scrollbar-button {
      background-color: #975a16;
  }
  ::-webkit-scrollbar {
      width: 4px;
  }
  ::-webkit-scrollbar-corner {
      background-color: #975a16;
  }
  ::-webkit-scrollbar-thumb {
      background-color: #f6ad55;
  }
  ::-webkit-scrollbar-track {
      background-color: #975a16;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .font-fredericka{
    font-family: 'Fredericka the Great', cursive;
  }
  .font-georgia{
    font-family: "PT Serif", Georgia, "Times New Roman", Times, serif;
  }
</style>